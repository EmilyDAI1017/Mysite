from __future__ import unicode_literals
from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect

# Create your views here.

from .models import Markers
from .forms import AddMarkersInfo



def addinfo(request):
    if request.method == 'POST':
        mks = AddMarkersInfo(request.POST)
        if mks.is_valid():
            if request.user.is_authenticated:
                submit = mks.save(commit=False)
                submit.use_id = request.user
                submit.save()

                return render(request, 'home.html', {'mks': mks })
            else:
                return HttpResponseRedirect('accounts/login/')

    else:
        mks = AddMarkersInfo()
        return render(request, 'home.html', {'mks': mks})