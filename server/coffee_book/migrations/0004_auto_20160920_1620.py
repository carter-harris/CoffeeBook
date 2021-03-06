# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-20 16:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee_book', '0003_auto_20160916_1642'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coffee',
            name='img',
        ),
        migrations.AddField(
            model_name='coffee',
            name='image',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='coffee',
            name='varietal',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='coffee',
            name='altitude',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='coffee',
            name='farm',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='coffee',
            name='name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='coffee',
            name='notes',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='coffee',
            name='process',
            field=models.CharField(max_length=20),
        ),
    ]
