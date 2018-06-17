from django.db import models

from django.conf import settings

# Create your models here.



class Markers(models.Model):
    use_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True)

    name = models.CharField(max_length=60,default = 'name')
    address = models.CharField(max_length=100,default = 'address')
    description = models.CharField(max_length=150, default='description')
    types = (
        ('m', 'museum'),
        ('s', 'school'),
        ('r', 'restaurant'),
        ('o', 'other'),

    )
    type = models.CharField(max_length=60, choices=types, default='museum')
    lat = models.FloatField('Latitude', null=True,)
    lng = models.FloatField('Longitude', null=True,)

