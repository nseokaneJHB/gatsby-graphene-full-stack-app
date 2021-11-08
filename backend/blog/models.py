from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	phone = models.CharField(max_length=10, blank=True)
	bio = models.TextField(blank=True)
	avatar = models.ImageField(blank=True)
	date_updated = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f'{ self.user }'

	@receiver(post_save, sender=User)
	def create_profile(sender, instance, created, **kwargs):
		if created:
			Profile.objects.create(user=instance)

	@receiver(post_save, sender=User)
	def save_profile(sender, instance, **kwargs):
		instance.profile.save()


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
	instance.profile.save()


class Like(models.Model):
	author = models.OneToOneField(User, on_delete=models.CASCADE)

	def __str__(self):
		return f'{ self.author }'

	@receiver(post_save, sender=User)
	def create_like_author(sender, instance, created, **kwargs):
		if created:
			Like.objects.create(author=instance)


class Post(models.Model):
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	post = models.TextField()
	likes = models.ManyToManyField(Like, blank=True)
	time_created = models.TimeField(auto_now_add=True)
	date_created = models.DateField(auto_now_add=True)

	def __str__(self):
		return f'Post: { self.post }'

	class Meta:
		ordering = ['-date_created', '-time_created']
	
 
class Comment(models.Model):
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	post = models.ForeignKey(Post, on_delete=models.CASCADE)
	comment = models.TextField()
	likes = models.ManyToManyField(Like, blank=True)
	time_created = models.TimeField(auto_now_add=True)
	date_created = models.DateField(auto_now_add=True)

	def __str__(self):
		return f'Comment by Name: { self.author }'

	class Meta:
		ordering = ['-date_created', '-time_created']
