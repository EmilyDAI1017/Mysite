from django.contrib import admin

# Register your models here.
from maps import models
admin.site.register(models.Markers)
