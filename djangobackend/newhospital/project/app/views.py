from django.shortcuts import render,redirect
from.models import *
from django.contrib.auth import logout
from django.http import JsonResponse

# Create your views here.
def index(request):
    return JsonResponse({"message": "Django backend is running"})
def deptview(request):
    data = Dept_tbl.objects.all().values()
    return JsonResponse(list(data), safe=False)
def doctview(request):
    data = Doctor_tbl.objects.all().values()
    return JsonResponse(list(data), safe=False)
def regview(request):
    if request.method=="POST":
        name=request.POST.get('name')
        mobile=request.POST.get('mob')
        email=request.POST.get('email')
        password=request.POST.get('password')
        cnpass=request.POST.get('cnpass')
        user=request.POST.get('user_type')
        obj=reg_tbl.objects.create(name=name,mobile=mobile,email=email,password=password,cnpass=cnpass,user=user)
        obj.save()
        # msg="Registration Successfully"
        # return render(request,"reg.html",{'msg':msg})
        return JsonResponse({"message": "Registration successful"})
    # return render(request, 'reg.html')
    return JsonResponse({"error": "POST method required"}, status=400)
def login_view(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        obj=reg_tbl.objects.filter(email=email,password=password)
        if obj.exists():
            user = obj.first()
            request.session['id1'] = user.id
            request.session['user_type'] = user.user
            # for i in obj:
    #             idno=i.id
    #             user_name=i.name
    #             user_mobile=i.mobile
    #             user_email=i.email
    #             user=i.user
    #         request.session['id1']=idno
    #         request.session['name']=user_name
    #         request.session['mobile']=user_mobile
    #         request.session['user_type']=user
    #         request.session['email']=user_email
    #         request.session['password']=password
    #         if user=='admin':
    #             return render(request,"adminhome.html")
    #         else:
    #             return render(request,"custhome.html")
    # return render(request,"login.html")
            return JsonResponse({
                        "message": "Login successful",
                        "user_type": user.user
                    })
        return JsonResponse({"error": "Invalid credentials"}, status=401)
# def bookdata(request):
#     if request.method=="POST":
#         name=request.POST.get('name')
#         email=request.POST.get('email')
#         mobile=request.POST.get('mob')
#         gender=request.POST.get('gender')
#         district=request.POST.get('district')
#         date=request.POST.get('date')
#         test=request.POST.getlist('test')
#         doctor_name=request.POST.get('doctorname')
#         user_id=request.session.get('id1')
#         user=reg_tbl.objects.get(id=user_id)
#         obj=book_tbl.objects.create(name=name,email=email,mobile=mobile,gender=gender,district=district,date=date,test=", ".join(test),doctor_name=doctor_name,user=user)
#         obj.save()
#         msg="Appointment Booked"
#         return render(request,"book.html",{'msg':msg})
#     user_name=request.session.get('name')
#     user_email=request.session.get('email')
#     user_mobile=request.session.get('mobile')
#     data=Doctor_tbl.objects.all()
#     return render(request,"book.html",{'data':data,'name':user_name,'email':user_email,'mobile':user_mobile})
def bookdata(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobile = request.POST.get('mob')
        gender = request.POST.get('gender')
        district = request.POST.get('district')
        date = request.POST.get('date')
        test = request.POST.getlist('test')
        doctor_name = request.POST.get('doctorname')

        user_id = request.session.get('id1')
        if not user_id:
            return JsonResponse({"error": "User not logged in"}, status=401)

        user = reg_tbl.objects.get(id=user_id)

        book_tbl.objects.create(
            name=name,
            email=email,
            mobile=mobile,
            gender=gender,
            district=district,
            date=date,
            test=", ".join(test),
            doctor_name=doctor_name,
            user=user
        )

        return JsonResponse({"message": "Appointment booked successfully"})

    # GET request → send data to React
    doctors = list(Doctor_tbl.objects.all().values())
    return JsonResponse({"doctors": doctors})
# def viewadminbook(request):
#     data=book_tbl.objects.all()
#     return render(request,'viewbook.html',{'data':data})
def viewadminbook(request):
    data = list(book_tbl.objects.all().values())
    return JsonResponse({"bookings": data})
# def viewcustbook(request):
#     if 'id1' in request.session:
#         user_id=request.session['id1']
#         data=book_tbl.objects.filter(user=user_id)
#         return render(request, 'viewbook.html',{'data':data})
#     else:
#         return redirect('login')
def viewcustbook(request):
    user_id = request.session.get('id1')
    if not user_id:
        return JsonResponse({"error": "User not logged in"}, status=401)

    data = list(book_tbl.objects.filter(user=user_id).values())
    return JsonResponse({"bookings": data})
# def logout_view(request):
#     logout(request)
#     return redirect(index)
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logged out successfully"})
# def custhome(request):
#     return render(request,'custhome.html')
# def adminhome(request):
#     return render(request,'adminhome.html')

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Doctor_tbl
from .serializers import DoctorSerializer

from .models import Dept_tbl
from .serializers import DepartmentSerializer

from .models import book_tbl
from .serializers import BookTableSerializer

@api_view(['GET', 'POST'])
def doctor_api(request):
    if request.method == 'GET':
        doctors = Doctor_tbl.objects.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def department_api(request):
    departments = Dept_tbl.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
def book_table_api(request):
    if request.method == 'GET':
        bookings = book_tbl.objects.all()
        serializer = BookTableSerializer(bookings, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BookTableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)