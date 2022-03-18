from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comments),
    path('video_id', views.user_comments),
    path('<int:pk>/', views.user_specific_comments),
    path('all/', views.get_all_comments),
]
