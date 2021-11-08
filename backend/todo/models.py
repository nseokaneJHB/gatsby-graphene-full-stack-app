from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify


# Create your models here.
class Task(models.Model):
	title = models.CharField(default=_('New Task'), max_length=255, unique=True)
	description = models.TextField(blank=True, null=True)
	complete = models.BooleanField(default=False, verbose_name=_('Status'))
	date_created = models.DateTimeField(auto_now_add=True, verbose_name=_('Date Created'))
	slug = models.SlugField(max_length=255, default=_(''), blank=True)

	def __str__(self):
		return f'{ self.title }'

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super().save(*args, **kwargs)