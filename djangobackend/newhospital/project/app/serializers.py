from rest_framework import serializers
from .models import Dept_tbl, Doctor_tbl, reg_tbl, book_tbl


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dept_tbl
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor_tbl
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = reg_tbl
        fields = '__all__'

class BookTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = book_tbl
        fields = '__all__'