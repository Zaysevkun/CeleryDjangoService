from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

from imageapp import views

urlpatterns = [
    path('', views.TemplateView.as_view()),
    path('image/', csrf_exempt(views.ImageView.as_view())),
]