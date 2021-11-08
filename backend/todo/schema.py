import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Task

class TaskType(DjangoObjectType):
	class Meta:
		model = Task
		fields = ('id', 'title', 'description', 'complete', 'date_created', 'slug')


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


# Creating, Updating and Deleting Data
class TaskMutation(graphene.Mutation):
	class Arguments:
		slug = graphene.String()
		title = graphene.String()
		description = graphene.String()
		complete = graphene.Boolean()

	task = graphene.Field(TaskType)

	@classmethod
	def mutate(cls, root, info, **kwargs):
		if kwargs.get('slug') is not None:
			try:
				task = Task.objects.get(slug=kwargs.get('slug'))

				# Delete Task
				if kwargs.get('title') is None and kwargs.get('description') is None and kwargs.get('complete') is None:
					try:
						return task.delete()
					except Task.DoesNotExist:
						return None


				# Update Task
				if kwargs.get('title') is not None:
					task.title = kwargs.get('title').title()

				if kwargs.get('complete') is not None:
					task.complete = kwargs.get('complete')

				if kwargs.get('description') is not None:
					task.description = kwargs.get('description')

				task.save()
				return TaskMutation(task=task)
			except Task.DoesNotExist:
				return None


		# Create New Task
		description = ""

		if kwargs.get('description') is not None:
			description = kwargs.get('description')		

		if kwargs.get('title') is not None:
			task = Task(title=kwargs.get('title').title(), description=description)
			task.save()
			return TaskMutation(task=task)


class Mutation(graphene.ObjectType):
	create_task = TaskMutation.Field()
	update_task = TaskMutation.Field()
	delete_task = TaskMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)