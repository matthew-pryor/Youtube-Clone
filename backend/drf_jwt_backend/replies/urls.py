from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('comments/<int:pk>/', views.user_comment_replies),
]
