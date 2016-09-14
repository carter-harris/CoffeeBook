# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-13 21:37
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('coffee_book', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review_owner', to=settings.AUTH_USER_MODEL),
        ),
    ]