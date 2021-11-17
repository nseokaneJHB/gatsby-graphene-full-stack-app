from graphene_django import DjangoObjectType
from .models import Contact


class ContactType(DjangoObjectType):
	class Meta:
		model = Contact
		fields = ( 'id', 'name', 'phone', 'email', 'date_created', 'slug' )