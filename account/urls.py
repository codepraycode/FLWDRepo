from django import urls
from django.urls import path
from .import views


urlpatterns = [
    path("Mlogin", views.Mlogin, name="Mlogin"),
    path("Mlogout", views.Mlogout, name="Mlogout"),
    path("Mprofile", views.Mprofile, name="Mprofile"),
    path("Mregister", views.Mregister, name="Mregister"),

    path("Cregister", views.Cregister, name="Cregister"),
    path("Clogin", views.Clogin, name="Clogin"),
    path("Clogout", views.Clogout, name="Clogout"),
    
    path("addProduct", views.addProduct, name="addproduct"),
    path("addStore", views.addStore, name="addstore")
]
