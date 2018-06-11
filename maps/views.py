from __future__ import unicode_literals
from django.shortcuts import render,redirect

# Create your views here.

from .models import Markers
from .forms import AddMarkersInfo
from django.http import HttpResponse


def addinfo(request):
    if request.method == 'POST':
        mks = AddMarkersInfo(request.POST)
        if mks.is_valid():
            submit = mks.save(commit=False)
            submit.user = request.user
            submit.save()

            name = mks.cleaned_data['name']
            address = mks.cleaned_data['address']
            description = mks.cleaned_data['description']
            mktype = mks.cleaned_data['mktype']
            lat = mks.cleaned_data['lat']
            lng = mks.cleaned_data['lng']

            Markers.objects.get_or_create(name=name, address=address, description=description,  mktype=mktype, lat=lat, lng=lng)
            return HttpResponse()
    else:
        mks = AddMarkersInfo()
        return render(request, 'home.html', {'mks': mks})
