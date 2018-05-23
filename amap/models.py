from __future__ import unicode_literals

from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
# Create your models here.
class PointField(models.Model):
    name = models.CharField(max_length=255)
    location = models.PointField()
    city = models.PointField(blank=True, null=True)

    def __unicode__(self):
        return self.name