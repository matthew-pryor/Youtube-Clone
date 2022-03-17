from django.contrib import admin
from.models import Comment
from replies.models import Reply

# Register your models here.
admin.site.register(Comment)
admin.site.register(Reply)