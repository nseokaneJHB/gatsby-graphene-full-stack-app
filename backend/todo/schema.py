import graphene
from graphene_django import DjangoListField

from .models import Task
from .type import TaskType

from .mutation import Mutation


# Getting data
class Query(graphene.ObjectType):
	tasks = DjangoListField(TaskType)
	task  = graphene.Field(TaskType, slug=graphene.String())

	def resolve_tasks(self, info):
		return Task.objects.all()

	def resolve_task(self, info, slug):
		try:
			return Task.objects.get(slug=slug)
		except Task.DoesNotExist:
			return None


schema = graphene.Schema(query=Query, mutation=Mutation)