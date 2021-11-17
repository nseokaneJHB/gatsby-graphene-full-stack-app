import graphene
from graphene_django import DjangoListField

from .type import ContactType

from .models import Contact

from .mutations import Mutation

# Getting data
class Query(graphene.ObjectType):
	contacts = DjangoListField(ContactType)
	contact = graphene.Field(ContactType, slug=graphene.String())

	def resolve_contacts(self, info):
		return Contact.objects.all()

	def resolve_contact(self, info, slug):
		try:
			return Contact.objects.get(slug=slug)
		except Contact.DoesNotExist:
			return None


schema = graphene.Schema(query=Query, mutation=Mutation)