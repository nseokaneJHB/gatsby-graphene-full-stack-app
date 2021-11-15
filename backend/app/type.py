from django.db import models
from graphene_django import DjangoObjectType
from .models import App


class AppType(DjangoObjectType):
	class Meta:
		model = App
		fields = ('id', 'name', 'description', 'date_created', 'slug')