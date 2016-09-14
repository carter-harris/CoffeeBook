from django.db import models
from django.contrib.auth.models import User

# region = [('Latin America', 'Latin America'), ('Oceania', 'Oceania'), ('Africa', 'Africa')]
# brew_methods = [('Chemex', 'Chemex'), ('V60', 'V60'), ('Kalita Wave', 'Kalita Wave'), ('Aeropress', 'Aeropress')]



class ShopUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    shop_name = models.CharField(max_length=25)
    location = models.CharField(max_length=200)


    # This representation is used any time a base string representation
    # is needed, such as the web browseable API interface provide by
    # the framework.
    def __str__(self):
        return "{}: {}".format(self.id, self.shop_name, self.location )



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
    name = models.CharField(max_length=25)
    notes = models.CharField(max_length=35)
    region = models.ForeignKey(Region, related_name='coffees')
    farm = models.CharField(max_length=25)
    altitude = models.CharField(max_length=35)
    process = models.CharField(max_length=25)
    description = models.TextField()
    brew_method = models.ForeignKey(BrewMethod, null=True, on_delete=models.SET_NULL, related_name='coffees')
    shop_user = models.ForeignKey('auth.User', null=True,   on_delete=models.SET_NULL, related_name='coffees')
    img = models.ImageField(upload_to='coffee_images/', default='coffee_images/default_coffee_image.whatever')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)


class Review(models.Model):
    review = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='reviews')
    coffee = models.ForeignKey(Coffee, null=True, on_delete=models.SET_NULL, related_name='reviews')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)
