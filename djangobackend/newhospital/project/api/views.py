from rest_framework.generics import ListCreateAPIView
from .models import Patient
from .serializers import PatientSerializer, DoctorSerializer, DepartmentSerializer, BookTableSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .models import Doctor_tbl, Dept_tbl, book_tbl, reg_tbl
from rest_framework.permissions import IsAuthenticated

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

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def book_table_api(request):
    user = request.user  # <-- logged-in patient or admin

    if request.method == 'GET':
        # Patients only see their own bookings
        if user.role == 'patient':
            bookings = book_tbl.objects.filter(user=user)
        else:
            # Admin can see all
            bookings = book_tbl.objects.all()

        serializer = BookTableSerializer(bookings, many=True)
        return Response(serializer.data)

    # POST → only patients can create
    if user.role != 'patient':
        return Response({"error": "Only patients can book appointments"}, status=403)

    serializer = BookTableSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)
        return Response({"message": "Appointment booked successfully"}, status=201)

    return Response(serializer.errors, status=400)