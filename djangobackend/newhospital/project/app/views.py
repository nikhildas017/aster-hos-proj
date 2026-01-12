from django.shortcuts import render,redirect
from.models import *
from django.contrib.auth import logout

# Create your views here.
def index(request):
    return render(request,'index.html')
def deptview(request):
    data=Dept_tbl.objects.all()
    return render(request,"deptlist.html",{"data":data})
def doctview(request):
    data=Doctor_tbl.objects.all()
    return render(request,"doctlist.html",{"data":data})
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
        msg="Registration Successfully"
        return render(request,"reg.html",{'msg':msg})
    return render(request, 'reg.html')
def login_view(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        obj=reg_tbl.objects.filter(email=email,password=password)
        if obj.exists():
            for i in obj:
                idno=i.id
                user_name=i.name
                user_mobile=i.mobile
                user_email=i.email
                user=i.user
            request.session['id1']=idno
            request.session['name']=user_name
            request.session['mobile']=user_mobile
            request.session['user_type']=user
            request.session['email']=user_email
            request.session['password']=password
            if user=='admin':
                return render(request,"adminhome.html")
            else:
                return render(request,"custhome.html")
    return render(request,"login.html")
def bookdata(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        mobile=request.POST.get('mob')
        gender=request.POST.get('gender')
        district=request.POST.get('district')
        date=request.POST.get('date')
        test=request.POST.getlist('test')
        doctor_name=request.POST.get('doctorname')
        user_id=request.session.get('id1')
        user=reg_tbl.objects.get(id=user_id)
        obj=book_tbl.objects.create(name=name,email=email,mobile=mobile,gender=gender,district=district,date=date,test=", ".join(test),doctor_name=doctor_name,user=user)
        obj.save()
        msg="Appointment Booked"
        return render(request,"book.html",{'msg':msg})
    user_name=request.session.get('name')
    user_email=request.session.get('email')
    user_mobile=request.session.get('mobile')
    data=Doctor_tbl.objects.all()
    return render(request,"book.html",{'data':data,'name':user_name,'email':user_email,'mobile':user_mobile})
def viewadminbook(request):
    data=book_tbl.objects.all()
    return render(request,'viewbook.html',{'data':data})
def viewcustbook(request):
    if 'id1' in request.session:
        user_id=request.session['id1']
        data=book_tbl.objects.filter(user=user_id)
        return render(request, 'viewbook.html',{'data':data})
    else:
        return redirect('login')
def logout_view(request):
    logout(request)
    return redirect(index)
def custhome(request):
    return render(request,'custhome.html')
def adminhome(request):
    return render(request,'adminhome.html')