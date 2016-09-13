from django.db import models
from django.contrib.auth.models import User

class ShopUser(User):
    location = models.CharField()

    def __str__(self):
        return "{}: {}".format(self.id, self.name)



class Coffee(models.Model):
    name = models.CharField(max_length=25)
    notes = models.CharField(max_length=35)
    region = models.CharField(max_length=25)
    farm = models.CharField(max_length=25)
    altitude = models.CharField(max_length=35)
    process = models.CharField(max_length=25)
    description = models.CharField()
    brew_method = models.ForeignKey(BrewMethod, related_name='coffees')
    shop_user = models.ForeignKey(ShopUser, related_name='coffees')
    img = models.ImageField(upload_to = 'coffee_images/', default = 'coffee_images/default_coffee_image.whatever')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)



class BrewMethod(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)



class Passport(User):
    coffees = models.ManyToManyField(Coffee)

    def __str__(self):
        return "{}: {}".format(self.id, self.?)



class Review(models.Model):
    review = models.TextField()
    passport = models.ForeignKey(Passport, related_name='reviews')
    coffee = models.ForeignKey(Coffee, related_name='reviews')

    def __str__(self):
        return "{}: {}".format(self.id, self.?)




