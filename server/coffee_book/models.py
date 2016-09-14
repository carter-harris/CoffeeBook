from django.db import models
from django.contrib.auth.models import User

region = [('Latin America', 'Latin America'), ('Oceania', 'Oceania'), ('Africa', 'Africa')]
brew_methods = [('Chemex', 'Chemex'), ('V60', 'V60'), ('Kalita Wave', 'Kalita Wave'), ('Aeropress', 'Aeropress')]



class ShopUser(User):
    # name = models.CharField(max_length=25)
    location = models.CharField(max_length=200)

    # This representation is used any time a base string representation
    # is needed, such as the web browseable API interface provide by
    # the framework.
    def __str__(self):
      return "{}: {}".format(self.id, self.name)



class BrewMethod(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
      return "{}: {}".format(self.id, self.name)


class Coffee(models.Model):
    name = models.CharField(max_length=25)
    notes = models.CharField(max_length=35)
    region = models.CharField(choices=region, max_length=25)
    farm = models.CharField(max_length=25)
    altitude = models.CharField(max_length=35)
    process = models.CharField(max_length=25)
    description = models.TextField()
    brew_method = models.ForeignKey(BrewMethod, choices=brew_methods, null=True, on_delete=models.SET_NULL, related_name='coffees')
    shop_user = models.ForeignKey(ShopUser, null=True, on_delete=models.SET_NULL, related_name='coffees')
    # owner = models.ForeignKey('ShopUser', related_name='shop_user')
    img = models.ImageField(upload_to='coffee_images/', default='coffee_images/default_coffee_image.whatever')

    def __str__(self):
      return "{}: {}".format(self.id, self.name)


class Review(models.Model):
    review = models.TextField()
    owner = models.ForeignKey(User, related_name='review_owner')
    # owner = models.ForeignKey('auth.User', related_name='user')
    coffee = models.ForeignKey(Coffee, null=True, on_delete=models.SET_NULL, related_name='reviews')

    def __str__(self):
      return "{}: {}".format(self.id, self.name)
