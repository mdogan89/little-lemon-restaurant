from django.shortcuts import render
from .models import Score
from .serializers import ScoreSerializer
from rest_framework.generics import ListCreateAPIView


# Create your views here.


class ScoresView(ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
