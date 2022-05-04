from django.urls import path
from .views import *

urlpatterns = [
    path("contactos", contactos_view),
    path("variables/<str:llave_variable>", variable_view),
    path("habilidades", habilidades_view),
    path("proyectos", proyectos_view),
    path("experiencia", experiencia_view)
]