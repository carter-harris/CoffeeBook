from django.shortcuts import render

# USER SECTION
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404
import json

#
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse



from .models import ShopUser, Coffee, BrewMethod, Review
from .serializers import ShopUserSerializer, CoffeeSerializer, BrewMethodSerializer, ReviewSerializer


class ShopUserView(viewsets.ModelViewSet):
    queryset = ShopUser.objects.all()
    serializer_class = ShopUserSerializer

class CoffeeView(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer

class BrewMethodView(viewsets.ModelViewSet):
    queryset = BrewMethod.objects.all()
    serializer_class = BrewMethodSerializer

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

