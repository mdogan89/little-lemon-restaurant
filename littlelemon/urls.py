"""
URL configuration for littlelemon project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from restaurant.views import ReservationTestViewSet
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers

from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
# router.register(r"tables", BookingViewSet)
router.register(r"table", ReservationTestViewSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("restaurant/", include("restaurant.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("api-token-auth/", obtain_auth_token),
    path("booking/", include(router.urls)),
    path("", TemplateView.as_view(template_name="index.html")),
    path("contact/", include("contact.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
