from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_list_or_404, get_object_or_404


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comment_replies(request, pk):

    comment_id = pk
    request.data['comment_id'] = comment_id

    if request.method == 'POST':

        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def user_comment_replies(request, pk):

    comment_id = pk
    request.data['comment_id'] = comment_id

    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)