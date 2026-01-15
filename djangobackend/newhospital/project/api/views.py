from rest_framework.generics import ListCreateAPIView
from .models import Patient
from .serializers import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class PatientListCreate(ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

@api_view(['GET'])
def hello_api(request):
    return Response({
        "status": "success",
        "message": "Django is connected to React"
    })