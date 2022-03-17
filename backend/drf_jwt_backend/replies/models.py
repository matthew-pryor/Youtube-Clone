from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Reply(models.Model):

    text = models.CharField(max_length=1200)
    def __str__(self):
        return {
            self.text,
        }