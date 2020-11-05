from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from .models import Images


class TemplateView(TemplateView):
    template_name = 'index.html'


class ImageView(CreateView):
    model = Images
    success_url = '/'
    fields = ['image']
