from django.urls import path
from .views import PatientListCreate
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
)

urlpatterns=[
    path('patients/',PatientListCreate.as_view(),name='patients.list'),
    path('login/', TokenObtainPairView.as_view(), name='login'),    
]