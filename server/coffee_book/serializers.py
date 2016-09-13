from coffee_book.models import ShopUser, Coffee, BrewMethod, Passport, Review
from rest_framework import serializers

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

class PassportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Passport
        fields = ('id', 'url', 'coffees', 'reviews')

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'url', 'review', 'passport', 'coffees')
