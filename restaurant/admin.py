from django.contrib import admin
from .models import MenuItem, Table
from contact.models import ContactForm

# Register your models here.
admin.site.register(MenuItem)
admin.site.register(Table)
admin.site.register(ContactForm)
