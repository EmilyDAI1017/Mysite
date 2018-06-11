from django import forms
from maps.models import Markers

class AddMarkersInfo(forms.ModelForm):
    name = forms.CharField(max_length=60)
    address = forms.CharField(max_length=100)
    description = forms.CharField(max_length=150)
    types = (
        ('m', 'museum'),
        ('s', 'school'),
        ('r', 'restaurant'),
        ('o', 'other'),

    )
    mktype = forms.ChoiceField(choices=types, label="", initial='', widget=forms.Select(), required=True)

    lat = forms.IntegerField()
    lng = forms.IntegerField()

    class Meta:
        model = Markers
        fields = '__all__'


