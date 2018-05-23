from django.contrib import admin

# Register your models here.
from django.contrib.gis.db import models
from mapwidgets.widgets import GooglePointFieldWidget
import mapwidgets
from .models import PointField

class CityAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.PointField: {"widget": GooglePointFieldWidget}
    }
    fieldsets = (
        (None, {'fields': ('name', 'location')}),
        ('Extra', {
            'fields': ('city',),
            'classes': ('collapse',),
        }),
    )

admin.site.register(PointField, CityAdmin)