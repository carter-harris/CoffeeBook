#####################################################################################
#   IMPORT SECTION  #

from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.views.decorators.csrf import csrf_exempt

import json

# from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

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


#####################################################################################
#   FUNCTIONS SECTION   #

##############################################
###              CREATE USER               ###
##############################################
def create_user_object(request):
    '''
        Function to catch registration of user from login.html.
        Upon form submission, the values of the fields are passed in via the arg 'request'
        and then set to variables below.

        Following we create a user by setting the variables passed in the the create_user function
        below and then we save it to our database.

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
    shop_name = req_body['shop_name']
    location = req_body['location']
    user_type = req_body['location']

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

    # Check which user type is sent in and run create user function associated with the correct type
    # if they are one of the types, create a user of that type
    # if req_body['user_type'] == 'Shop':
    #     create_shop_user(user)
    # elif req_body['user_type'] == 'Client':
    #     create_user(user)

    # Authenticate the user and make them currentUser
    currentUser = authenticate(username=username, password=password)

    if currentUser is not None:
        login(request, currentUser)
        return HttpResponseRedirect('/')
    else:
        return Http404


##############################################
###               Login User               ###
##############################################
@csrf_exempt
def login_user(request):
    '''Handles the creation of a new user for authentication
    Method arguments:
      request -- The full HTTP request object
    '''

    # Load the JSON string of the request body into a dict
    req_body = json.loads(request.body.decode())

    # Use the built-in authenticate method to verify
    authenticated_user = authenticate(
            username=req_body['username'],
            password=req_body['password']
            )

    # If authentication was successful, log the user in
    success = True
    if authenticated_user is not None:
        login(request=request, user=authenticated_user)
    else:
        success = False

    data = json.dumps({"success":success})
    return HttpResponse(data, content_type='application/json')


##############################################
###              LOGOUT USER               ###
##############################################
def logout_view(request):
    logout(request)
    print('user', request.user)
    return HttpResponseRedirect('/')
