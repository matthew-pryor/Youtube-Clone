from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_replies),
    path('<int:pk>/', views.user_comment_replies),
]
