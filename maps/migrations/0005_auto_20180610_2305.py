# Generated by Django 2.0.5 on 2018-06-10 11:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('maps', '0004_auto_20180609_1200'),
    ]

    operations = [
        migrations.AlterField(
            model_name='markers',
            name='use_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
