from inspect import ArgSpec
import graphene
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType, DjangoListField

from .models import Profile, Post, Comment, Like


class UserType(DjangoObjectType):
	class Meta:
		model = User
		fields = ('id', 'username', 'email')


class ProfileType(DjangoObjectType):
	class Meta:
		model = Profile
		fields = ('id', 'user', 'phone', 'bio')


class PostType(DjangoObjectType):
	class Meta:
		model = Post
		fields = ('id', 'author', 'post', 'likes')


class CommentType(DjangoObjectType):
	class Meta:
		model = Comment
		fields = ('id', 'author', 'post', 'comment', 'likes')


class LikeType(DjangoObjectType):
	class Meta:
		model = Like
		fields = ('id', 'author')


class Query(graphene.ObjectType):
	# Get All Data From Individual Models
	all_users = DjangoListField(UserType)
	all_profiles = DjangoListField(ProfileType)
	all_posts = DjangoListField(PostType)
	all_comments = DjangoListField(CommentType)
	all_likes = DjangoListField(LikeType)

	def resolve_all_users(root, info):
		return User.objects.all()

	def resolve_all_profiles(root, info):
		return Profile.objects.all()

	def resolve_all_posts(root, info):
		return Post.objects.all()

	def resolve_all_comments(root, info):
		return Comment.objects.all()

	def resolve_all_likes(root, info):
		return Like.objects.all()

	# Get Single Data From Models
	one_user = graphene.Field(UserType, id=graphene.String())
	one_profile = graphene.Field(ProfileType, id=graphene.String())
	one_post = graphene.Field(PostType, id=graphene.String())
	one_comment = graphene.Field(CommentType, id=graphene.String())
	one_like = graphene.Field(LikeType, id=graphene.String())

	def resolve_one_user(root, info, id):
		return User.objects.get(pk=id)

	def resolve_one_profile(root, info, id):
		return Profile.objects.get(pk=id)

	def resolve_one_post(root, info, id):
		return Post.objects.get(pk=id)

	def resolve_one_comment(root, info, id):
		return Comment.objects.get(pk=id)

	def resolve_one_like(root, info, id):
		return Like.objects.get(pk=id)

	# Get User Activities
	user_profile = graphene.Field(ProfileType, user=graphene.String())
	user_posts = DjangoListField(PostType, author=graphene.String())
	user_comments = DjangoListField(CommentType, author=graphene.String())

	user_like = graphene.Field(LikeType, author=graphene.String())
	liked_comments = DjangoListField(CommentType, author=graphene.String())
	liked_posts = DjangoListField(PostType, author=graphene.String())

	def resolve_user_profile(root, info, user):
		return Profile.objects.get(user = user)

	def resolve_user_posts(root, info, author):
		return Post.objects.filter(author = author)

	def resolve_user_comments(root, info, author):
		return Comment.objects.filter(author = author)

	def resolve_liked_posts(root, info, author):
		like_by_user = Like.objects.get(author = author)
		return Post.objects.filter(likes = like_by_user.id)

	def resolve_liked_comments(root, info, author):
		like_by_user = Like.objects.get(author = author)
		return Comment.objects.filter(likes = like_by_user.id)


	# Get All Post Comments
	post_comments = DjangoListField(CommentType, post=graphene.String())

	def resolve_post_comments(root, info, post):
		return Comment.objects.filter(post=post)


schema = graphene.Schema(query=Query)