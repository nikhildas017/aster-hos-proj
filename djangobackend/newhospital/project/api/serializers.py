from rest_framework import serializers
from .models import Patient
from .models import Dept_tbl, Doctor_tbl, reg_tbl, book_tbl

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields='__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dept_tbl
        fields = '__all__'
    
class DoctorSerializer(serializers.ModelSerializer):
    dept_name = serializers.StringRelatedField() 
    class Meta:
        model = Doctor_tbl
        fields = ['id', 'doctor_name', 'doctor_img', 'dept_name',]
       

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = reg_tbl
        fields = '__all__'
    
# class BookTableSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = book_tbl
#         fields = ['id', 'date', 'test', 'doctor', 'notes']

class BookTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = book_tbl
        fields = ['id', 'date', 'test', 'doctor', 'user']  # keep only the fields you want to accept

    def create(self, validated_data):
        # Pop the user out of validated_data
        user = validated_data.pop('user')
        # Now create the booking with the user properly assigned
        return book_tbl.objects.create(user=user, **validated_data)