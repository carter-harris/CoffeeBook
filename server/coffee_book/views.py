#####################################################################################
#   IMPORT SECTION  #

from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.views.decorators.csrf import csrf_exempt

import json

from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import ShopUser, Coffee, BrewMethod, Review
from .serializers import ShopUserSerializer, CoffeeSerializer, BrewMethodSerializer, ReviewSerializer




#####################################################################################
#   CLASSES SECTION    #

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ShopUserView(viewsets.ModelViewSet):
    queryset = ShopUser.objects.all()
    serializer_class = ShopUserSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CoffeeView(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer


class BrewMethodView(viewsets.ModelViewSet):
    queryset = BrewMethod.objects.all()
    serializer_class = BrewMethodSerializer


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer




#####################################################################################
#   FUNCTIONS SECTION   #

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
            'request' - the values passed in as string via the $http call from register-ctrl of login.html
    '''

    # data = imported json and using the .loads() function, passed in the
    # argument - the decoded body of the request to be posted which is
    # a dictionary of the info typed into the form. Data is the same as data
    # in the register-ctrl $http call.
    data = json.loads(request.body.decode())

    # ASSIGNS CORRESPONDING OBJ VALUE TO A VARIABLE
    username =  data['username']
    password = data['password']
    email = data['email']
    first_name = data['first_name']
    last_name = data['last_name']

    # CALLS CREATE USER FUNCTION ON USER.OBJECTS
    user = User.objects.create_user(
                                    username=username,
                                    password=password,
                                    email=email,
                                    first_name=first_name,
                                    last_name=last_name,
                                    )

    # SAVES USER DATA THAT WAS JUST POSTED
    user.save()

    currentUser = authenticate(username=username, password=password)

    if currentUser is not None:
        login(request, currentUser)
        return HttpResponseRedirect('/')
    else:
        return Http404


def login_user(request):
    data = json.loads(request.body.decode())

    username = data['username']
    password = data['password']

    user = authenticate(username=username, password=password)
    # login(user)

    if user is not None:
        login(request, user)
        # print('login user', request.user)
        return HttpResponseRedirect('/')
    else:
        return Http404


##############################################
###              LOGOUT USER               ###
##############################################
def logout_view(request):
    logout(request)
    print('user', request.user)
    return HttpResponseRedirect('/')

