from rest_framework import serializers
from django.contrib.auth.models import User
from coffee_book.models import User, Coffee, BrewMethod, Review, Region

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'user_type', 'first_name', 'last_name', 'shop_name', 'location')

class BrewMethodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BrewMethod
        fields = ('id', 'url', 'name', 'coffees')

class RegionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Region
        fields = ('id', 'url', 'name')

class CoffeeSerializer(serializers.HyperlinkedModelSerializer):
    # do the owner read only for this one and the review
    # owner = serializers.ReadOnlyField(source='owner.username') example
    class Meta:
        model = Coffee
        fields = ('id', 'url', 'name', 'notes', 'farm', 'altitude', 'process', 'description', 'region', 'brew_method', 'owner', 'img', 'reviews')

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'url', 'review', 'owner', 'coffee')
