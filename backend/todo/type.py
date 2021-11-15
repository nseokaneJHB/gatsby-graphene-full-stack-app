from graphene_django import DjangoObjectType
from .models import Task


class TaskType(DjangoObjectType):
	class Meta:
		model = Task
		fields = ('id', 'title', 'description', 'complete', 'date_created', 'slug')

