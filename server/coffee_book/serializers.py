from rest_framework import serializers
from django.contrib.auth.models import User
from coffee_book.models import ShopUser, Coffee, BrewMethod, Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'shop')

class ShopUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ShopUser
        fields = ('id', 'url', 'first_name', 'location')

class CoffeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Coffee
        fields = ('id', 'url', 'name', 'region', 'farm', 'altitude', 'process', 'description', 'brew_method', 'shop_user', 'img', 'reviews')

class BrewMethodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BrewMethod
        fields = ('id', 'url', 'name', 'coffees')

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'url', 'review', 'coffee')
