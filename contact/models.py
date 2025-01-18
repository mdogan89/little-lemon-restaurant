from django.db import models

# Create your models here.


class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    mail = models.EmailField()
    subject = models.CharField(max_length=255, null=True)
    message = models.TextField()
