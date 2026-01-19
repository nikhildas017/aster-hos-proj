from django.urls import path,include
from.import views
from .views import doctor_api, department_api, book_table_api

urlpatterns = [
    path('',views.index,name="index"),
    path('deptview',views.deptview,name="deptview"),
    path('doctview',views.doctview,name="doctview"),
    path('reg',views.regview,name="reg"),
    path('login',views.login_view,name="login"),
    path('bookdata',views.bookdata,name="bookdata"),
    path('viewadminbook',views.viewadminbook,name="viewadminbook"),
    path('viewcustbook',views.viewcustbook,name="viewcustbook"),
    path('logout',views.logout_view,name="logout"),
    # path('adminpage',views.adminhome,name="adminpage"),
    # path('custpage',views.custhome,name="custpage"),
    path('doctors/', doctor_api),
    path('departments/', department_api),
    path('book/', book_table_api),
]
