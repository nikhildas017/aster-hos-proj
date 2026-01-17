from django.urls import path
from .views import PatientListCreate
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import hello_api

urlpatterns=[
    path('patients/',PatientListCreate.as_view(),name='patients.list'),
    path('login/', TokenObtainPairView.as_view(), name='login'),  
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('hello/', hello_api),
]