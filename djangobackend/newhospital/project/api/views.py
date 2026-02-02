from rest_framework.generics import ListCreateAPIView
from .models import Patient
from .serializers import PatientSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Doctor_tbl
from .serializers import DoctorSerializer
from .models import Dept_tbl
from .serializers import DepartmentSerializer
from .models import book_tbl
from .serializers import BookTableSerializer

class PatientListCreate(ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

@api_view(['GET'])
def hello_api(request):
    return Response({
        "status": "success",
        "message": "Django is connected to React"
    })

@api_view(['GET'])
def doctor_api(request):
    doctors = Doctor_tbl.objects.select_related('dept_name').all()
    serializer = DoctorSerializer(doctors, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def department_api(request):
    departments = Dept_tbl.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return Response(serializer.data)
    
# @api_view(['GET', 'POST'])
# def book_table_api(request):
#     if request.method == 'GET':
#         bookings = book_tbl.objects.all()
#         serializer = BookTableSerializer(bookings, many=True)
#         return Response(serializer.data)

#     serializer = BookTableSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(
#             {"message": "Appointment booked successfully"},
#             status=status.HTTP_201_CREATED
#         )
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def book_table_api(request):

    if request.method == 'GET':
        bookings = book_tbl.objects.filter(user=request.user)
        serializer = BookTableSerializer(bookings, many=True)
        return Response(serializer.data)

    serializer = BookTableSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # 🔥 key fix
        return Response(
            {"message": "Appointment booked successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)