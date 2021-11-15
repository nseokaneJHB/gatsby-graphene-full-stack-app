from django.db.models import query
import graphene
from graphene_django import DjangoListField

from .models import App
from .type import AppType


# Getting data
class Query(graphene.ObjectType):
	apps = DjangoListField(AppType)

	def resolve_apps(self, info):
		return App.objects.all()


schema = graphene.Schema(query=Query)