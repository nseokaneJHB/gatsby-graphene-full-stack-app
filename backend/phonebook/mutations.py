import graphene

from .models import Contact
from .type import ContactType


# # Creating, Updating and Deleting Data
class ContactMutation(graphene.Mutation):
	class Arguments:
		slug = graphene.String()
		name = graphene.String()
		phone = graphene.String()
		email = graphene.String()

	contact = graphene.Field(ContactType)

	@classmethod
	def mutate(cls, root, info, **kwargs):
		if kwargs.get('slug') is not None:
			try:
				contact = Contact.objects.get(slug=kwargs.get('slug'))

				# Delete Contact
				if kwargs.get('name') is None and kwargs.get('phone') is None and kwargs.get('email') is None:
					return contact.delete()

				# Update Contact
				if kwargs.get('name') is not None:
					contact.name = kwargs.get('name')

				if kwargs.get('phone') is not None:
					contact.phone = kwargs.get('phone')

				if kwargs.get('email') is not None:
					contact.email = kwargs.get('email')

				contact.save()
				return ContactMutation(contact=contact)

			except Contact.DoesNotExist:
				return None

		# Create New Contact
		contact = Contact(name=kwargs.get('name'), phone=kwargs.get('phone'), email=kwargs.get('email') if kwargs.get('email') is not None else "")
		contact.save()
		return ContactMutation(contact=contact)


class Mutation(graphene.ObjectType):
	create_contact = ContactMutation.Field()
	delete_contact = ContactMutation.Field()