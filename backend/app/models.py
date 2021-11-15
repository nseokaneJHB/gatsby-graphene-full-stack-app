from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify


# Create your models here.
class App(models.Model):
	name = models.CharField(default=_('App Name'), max_length=255, unique=True)
	description = models.TextField(blank=True, null=True)
	date_created = models.DateTimeField(auto_now_add=True, verbose_name=_('Date Created'))
	slug = models.SlugField(max_length=255, default=_(''), blank=True)

	def __str__(self):
		return f'{ self.name }'

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super().save(*args, **kwargs)

	class Meta:
		ordering = ['name']