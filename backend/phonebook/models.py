from django.db import models
from django.db.models.fields import CharField
from django.utils.translation import gettext as _
from django.utils.text import slugify


# Create your models here.
class Contact(models.Model):
	name = models.CharField(default=_('Full Name'), max_length=500)
	phone = models.CharField(unique=True, max_length=9)
	email = models.EmailField(blank=True, null=True)
	date_created = models.DateTimeField(auto_now_add=True, verbose_name=_('Date Created'))
	slug = models.SlugField(max_length=255, default=_(''), blank=True)

	def __str__(self):
		return f'{ self.name }'

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super().save(*args, **kwargs)

	class Meta:
		ordering = ['name']