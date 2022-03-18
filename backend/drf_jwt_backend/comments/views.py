from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_list_or_404, get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):

    sort_comments = request.query_params.get('video_id')

    comments = Comment.objects.all()

    if sort_comments:
        comments = comments.filter(video_id=sort_comments)

    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):

    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_specific_comments(request, pk):

    comments = get_object_or_404(Comment, pk=pk)

    if request.method == 'PUT':
        serializer = CommentSerializer(comments, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        comments.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)