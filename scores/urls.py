from django.urls import path
from . import views


urlpatterns = [path("", views.ScoresView.as_view(), name="scores")]
