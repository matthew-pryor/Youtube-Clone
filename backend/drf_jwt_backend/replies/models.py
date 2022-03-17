from django.db import models
from django.contrib.auth.models import User
from comments.models import Comment

# Create your models here.

class Reply(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=1200)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)


    def __str__(self):
        return {
            self.user,
            self.text,
            self.comment
        }