from django.urls import path
from . import views


urlpatterns = [path("", views.ContactFormsView.as_view(), name="contact")]
