from rest_framework import serializers
from .models import Reply

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['text', 'user_id', 'comment']
        depth = 1