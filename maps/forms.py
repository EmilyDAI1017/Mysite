from django import forms
from maps.models import Markers

class AddMarkersInfo(forms.ModelForm):

    class Meta:
        model = Markers
        fields = ['name','address','description', 'type','lat','lng',]



