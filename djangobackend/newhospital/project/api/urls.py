from django.urls import path
from .views import PatientListCreate
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
)
from .views import hello_api

urlpatterns=[
    path('patients/',PatientListCreate.as_view(),name='patients.list'),
    path('login/', TokenObtainPairView.as_view(), name='login'),    
    path('hello/', hello_api),
]