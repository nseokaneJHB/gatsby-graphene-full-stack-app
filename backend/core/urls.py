from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apps/', include('app.urls')),
    path('todo/', include('todo.urls')),
    path('blog/', include('blog.urls')),
]
