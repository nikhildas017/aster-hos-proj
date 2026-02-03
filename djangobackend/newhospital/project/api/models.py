from django.db import models

# Create your models here.
class Dept_tbl(models.Model):
    dept_name=models.CharField(max_length=50)
    descrip=models.CharField(max_length=100)
    def __str__(self):
        return self.dept_name

class Patient(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    admitted_on=models.DateField(auto_now_add=True)
    def __str__(self):
        return self.name
    
class Doctor_tbl(models.Model):
    doctor_name=models.CharField(max_length=50)
    doctor_img=models.FileField(upload_to="pictures")
    dept_name=models.ForeignKey(Dept_tbl,on_delete=models.CASCADE)
    def __str__(self):
        return self.doctor_name
    
class reg_tbl(models.Model):
    name=models.CharField(max_length=50)
    mobile=models.IntegerField()
    email=models.EmailField()
    password=models.CharField(max_length=50)
    cnpass=models.CharField(max_length=50)
    user=models.CharField(max_length=50)
    def __str__(self):
        return self.name
    
class book_tbl(models.Model):
    # user = models.ForeignKey(reg_tbl, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor_tbl, on_delete=models.CASCADE)
    date = models.DateField()
    test = models.CharField(max_length=100)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.name} - {self.date}"