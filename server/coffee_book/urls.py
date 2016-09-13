from rest_framework import routers
from django.conf.urls import url, include
from coffee_book import views

router = routers.DefaultRouter()
router.register(r'coffee', views.CoffeeView)
router.register(r'guides', views.BrewMethodView)
router.register(r'passport', views.PassportView)
router.register(r'review', views.ReviewView)

urlpatterns = [
    url(r'^', include(router.urls)),
]
