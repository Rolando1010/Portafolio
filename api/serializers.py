from rest_framework.serializers import ModelSerializer
from .models import *

class habilidad_serializer(ModelSerializer):
    class Meta:
        model = Habilidad
        fields = "__all__"

class categoria_habilidad_serializer(ModelSerializer):
    habilidades = habilidad_serializer(many=True)
    
    class Meta:
        model = CategoriaHabilidad
        fields = "__all__"

class tecnologia_serializer(ModelSerializer):
    class Meta:
        model = Tecnologia
        fields = "__all__"

class uso_tecnologias_serializer(ModelSerializer):
    tecnologias = tecnologia_serializer(many=True)

    class Meta:
        model = UsoTecnologias
        fields = "__all__"

class url_proyecto_serializer(ModelSerializer):
    class Meta:
        model = URLProyecto
        fields = "__all__"

class proyecto_serializer(ModelSerializer):
    usos_tecnologias = uso_tecnologias_serializer(many=True)
    urls = url_proyecto_serializer(many=True)

    class Meta:
        model = Proyecto
        fields = "__all__"

class contacto_serializer(ModelSerializer):
    class Meta:
        model = Contacto
        fields = "__all__"

class variable_serializer(ModelSerializer):
    class Meta:
        model = Variable
        fields = "__all__"

class experiencia_serializer(ModelSerializer):
    class Meta:
        model = Experiencia
        fields = "__all__"