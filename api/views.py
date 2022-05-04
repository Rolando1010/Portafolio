from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

@api_view(["GET"])
def contactos_view(request):
    return Response(contacto_serializer(
        Contacto.objects.all(),
        many = True
    ).data)

@api_view(["GET"])
def variable_view(request, llave_variable):
    try:
        valor_variable = Variable.objects.get(llave = llave_variable).valor
    except:
        valor_variable = ""
    return Response(valor_variable)

@api_view(["GET"])
def habilidades_view(request):
    return Response(categoria_habilidad_serializer(CategoriaHabilidad.objects.all(), many=True).data)

@api_view(["GET"])
def proyectos_view(request):
    return Response(proyecto_serializer(Proyecto.objects.all(), many=True).data)

@api_view(["GET"])
def experiencia_view(request):
    return Response(experiencia_serializer(Experiencia.objects.all(), many=True).data)