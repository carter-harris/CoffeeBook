from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# region = [('Latin America', 'Latin America'), ('Oceania', 'Oceania'), ('Africa', 'Africa')]
# brew_methods = [('Chemex', 'Chemex'), ('V60', 'V60'), ('Kalita Wave', 'Kalita Wave'), ('Aeropress', 'Aeropress')]
USER_TYPES = [('Shop', 'Shop'), ('Client', 'Client')]





class User(AbstractUser):
    user_type = models.CharField(choices=USER_TYPES, max_length=6)
    shop_name = models.CharField(max_length=25, default='')
    location = models.CharField(max_length=200, default='')

    #  do you want to be a shop or client, if they want to be a certain user you need to post that selection in the http request

    # This representation is used any time a base string representation
    # is needed, such as the web browseable API interface provide by
    # the framework.
    def __str__(self):
        return "{} {}".format(self.shop_name, self.first_name)



class BrewMethod(models.Model):
    name = models.CharField(max_length=25)
    # methods = models.CharField(max_length=25, choices=brew_methods)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)


class Region(models.Model):
    name = models.CharField(max_length=25)
    # methods = models.CharField(max_length=25, choices=brew_methods)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)


class Coffee(models.Model):
    name = models.CharField(max_length=50)
    notes = models.CharField(max_length=50)
    farm = models.CharField(max_length=50)
    varietal = models.CharField(max_length=25, null=True)
    altitude = models.CharField(max_length=20)
    process = models.CharField(max_length=20)
    description = models.TextField()
    region = models.ForeignKey(Region, related_name='coffees')
    brew_method = models.ForeignKey(BrewMethod, null=True, on_delete=models.SET_NULL, related_name='coffees')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, null=True,   on_delete=models.SET_NULL, related_name='coffees')
    image = models.CharField(max_length=500, null=True)
    def __str__(self):
        return "{}: {}".format(self.id, self.name)


class Review(models.Model):
    review = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='reviews')
    coffee = models.ForeignKey(Coffee, null=True, on_delete=models.SET_NULL, related_name='reviews')

    def __str__(self):
        return "{}:".format(self.id)
