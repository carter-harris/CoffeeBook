#####################################################################################
#   IMPORT SECTION  #

# django imports
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect, Http404
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# import for handeling request formatting
import json

import requests
# from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

# imports from other files
from .models import User, Coffee, BrewMethod, Review, Region
from .serializers import UserSerializer, CoffeeSerializer, BrewMethodSerializer, ReviewSerializer, RegionSerializer
# from .permissions import IsShopOwner


#####################################################################################
#   CLASSES SECTION    #

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CoffeeView(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer
    # permission_classes = (IsShopOwner,)

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Coffee.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        if user_id is not None:
            queryset = queryset.filter(owner__id=user_id)
        return queryset


class BrewMethodView(viewsets.ModelViewSet):
    queryset = BrewMethod.objects.all()
    serializer_class = BrewMethodSerializer


class RegionView(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    # permission_classes = (IsShopOwner,)

    def get_queryset(self):
            """
            Optionally restricts the returned purchases to a given user,
            by filtering against a `username` query parameter in the URL.
            """
            queryset = Review.objects.all()
            user_id = self.request.query_params.get('user_id', None)
            if user_id is not None:
                queryset = queryset.filter(request__user__id=user_id)
            return queryset




#####################################################################################
#   FUNCTIONS SECTION   #

##############################################
###              CREATE USER               ###
##############################################
@csrf_exempt
def create_user_object(request):
    '''
        Function to catch registration of user from signup.html
        Upon data submission, the values of the fields are passed in via the arg 'request'
        and then set to variables below.

        Following we create a user by setting the variables passed in the the create_user function
        below and then we save it to our database.

        Then the request values are passed to the login function to automatically login the user once they have signed up

        Args:
            'request' - the values passed in as string via the $http call from associated ctrl of html views on Angular
    '''

    # req_body = imported json and using the .loads() function, passed in the
    # argument - the decoded body of the request to be posted which is

    # Load the JSON string of the request body into a dict
    req_body = json.loads(request.body.decode())

    # ASSIGNS CORRESPONDING OBJ VALUE TO A VARIABLE
    username =  req_body['username']
    password = req_body['password']
    email = req_body['email']
    first_name = req_body['first_name']
    last_name = req_body['last_name']
    user_type = req_body['user_type']
    shop_name = req_body['shop_name']
    location = req_body['location']

    # CALLS CREATE USER FUNCTION ON USER.OBJECTS
    user = User.objects.create_user(
                                    username=username,
                                    password=password,
                                    email=email,
                                    first_name=first_name,
                                    last_name=last_name,
                                    shop_name=shop_name,
                                    location=location,
                                    user_type=user_type,
                                    )

    # Saves user data that was just posted
    user.save()

    # currentUser = authenticate(username=username, password=password)
    # print('-->>>>>>>CURRENTUSER>>>>>>>>>', currentUser)


    # if currentUser is not None:
        # # c = login(request, currentUser)
        # c = requests.post('http://localhost:8000/login/', {"username": username, "password": password})
        # print('cccccc', c.text)
        # return HttpResponse('/')
        # return login_user(request)
    # else:
    #     return Http404
    return JsonResponse({"success": True})


##############################################
###               Login User               ###
##############################################
@csrf_exempt
def login_user(request):
    '''
        Handles the creation of a new user for authentication
        Args:
          request -- The full HTTP request object
    '''

    # Load the JSON string of the request body into a dict
    req_body = json.loads(request.body.decode())

    # Use the built-in authenticate method to verify
    authenticated_user = authenticate(
            username=req_body['username'],
            password=req_body['password']
            )
    print('>>>>>>>>LOGIN CURRENT USER>>>>>>>>', authenticated_user)

    # If authentication was successful, log the user in
    success = True
    if authenticated_user is not None:
        login(request=request, user=authenticated_user)
        # return HttpResponseRedirect('/landing')
    else:
        success = False

    the_user = User.objects.filter(username=req_body['username'])
    data = serializers.serialize('json', the_user)
    return HttpResponse(data, content_type='application/json')


##############################################
###              LOGOUT USER               ###
##############################################
def logout_view(request):
    logout(request)
    print('user', request.user)
    return HttpResponseRedirect('/')



##############################################
###           CREATE NEW COFFEE            ###
##############################################
@csrf_exempt
def create_new_coffee(request):
    '''
        Handles the creation of a new coffee by a company
        Args:
          request -- The full HTTP request object
    '''

    # Load the JSON string of the request body into a dict
    req_body = json.loads(request.body.decode())

    print('body yo >>>>>>>>>>>>>>>>>>>>>>>>', req_body)


    name = req_body["name"]
    farm = req_body["farm"]
    region = req_body["region"]
    notes = req_body["notes"]
    varietal = req_body["varietal"]
    altitude = req_body["altitude"]
    process = req_body["process"]
    brewMethod = req_body["brewMethod"]
    description = req_body["description"]
    image = req_body["image"]
    owner = req_body["owner"]

    # FIND MATCHED USERS PK
    owner = User.objects.get(pk=owner)
    region = Region.objects.get(name=region)
    brewMethod = BrewMethod.objects.get(name=brewMethod)

    # CREATE NEW COFFEE
    newCoffee = Coffee.objects.create(
                                    name = name,
                                    farm = farm,
                                    region = region,
                                    notes = notes,
                                    varietal = varietal,
                                    altitude = altitude,
                                    process = process,
                                    brew_method = brewMethod,
                                    image=image,
                                    description = description,
                                    owner = owner,
                                    )

    # SAVE NEW COFFEE POSTED
    newCoffee.save()

    # return http response with result of login attempt as json
    print("newCoffee:>>>>>> ", newCoffee)

    newCoffee_data = serializers.serialize('json', (newCoffee,))
    return HttpResponse(newCoffee_data, content_type='application/json')



