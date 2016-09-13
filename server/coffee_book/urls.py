from rest_framework import routers
from django.conf.urls import url, include
from coffee_book import views

router = routers.DefaultRouter()
router.register(r'coffee', views.CoffeeView)
router.register(r'guides', views.BrewMethodView)
router.register(r'review', views.ReviewView)
router.register(r'shopusers', views.ShopUserView)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
