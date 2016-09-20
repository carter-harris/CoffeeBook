from rest_framework import routers
from django.conf.urls import url, include
from coffee_book import views

router = routers.DefaultRouter()
router.register(r'coffee', views.CoffeeView)
router.register(r'guides', views.BrewMethodView)
router.register(r'region', views.RegionView)
router.register(r'review', views.ReviewView)
router.register(r'users', views.UserView) # I never wanna see all the users, so?


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^login/$', views.login_user, name='login_user'),
    url(r'^register/$', views.create_user_object, name='create_user_object'),
    # url(r'^new_coffee/$', views.create_new_coffee, name='create_user_object'),
]
