# from rest_framework import permissions
# import pprint

# class IsShopOwner(permissions.BasePermission):
#     """
#     Custom permission to only allow owners of an object to edit it.
#     """

#     def has_object_permission(self, request, view, obj):

#         #request - request from the browser

#         # view - look it up

#         # obj - is the instance of the model attempting to make a request on

#         # Read permissions are allowed to any request,
#         # so we'll always allow GET, HEAD or OPTIONS requests.
#         # if request.method in permissions.SAFE_METHODS:
#         #     return True

#         # Write permissions are only allowed to the owner of the snippet.
#         pprint.pprint(dir(request.user))
#         print(request.user.__dict__)
#         return request.user.type == 'ShopOwner'