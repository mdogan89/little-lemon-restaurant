from django.shortcuts import render
from .models import ContactForm
from .serializers import ContactFormSerializer
from rest_framework.generics import ListCreateAPIView


# Create your views here.


class ContactFormsView(ListCreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
