from django.db.models import *

class Habilidad(Model):
    nombre = CharField(max_length=50)
    imagen = TextField()

    def __str__(self):
        return self.nombre

class CategoriaHabilidad(Model):
    nombre = CharField(max_length=50, unique=True)
    habilidades = ManyToManyField(Habilidad)

    def __str__(self):
        return self.nombre

class Tecnologia(Model):
    nombre = CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre

class UsoTecnologias(Model):
    uso = CharField(max_length=100, default="")
    tecnologias = ManyToManyField(Tecnologia)

    def __str__(self):
        return", ".join(list(map(
            lambda tecnologia: tecnologia.nombre,
            self.tecnologias.all()
        )))

class Proyecto(Model):
    titulo = CharField(max_length=100, unique=True)
    descripcion = TextField()
    imagen = TextField()
    usos_tecnologias = ManyToManyField(UsoTecnologias)

    def __str__(self):
        return self.titulo

class URLProyecto(Model):
    titulo_ver = CharField(max_length=50)
    url = TextField()
    proyecto = ForeignKey(Proyecto, related_name="urls", on_delete=CASCADE)

    def __str__(self):
        return self.titulo_ver + " - " + self.proyecto.titulo

class Contacto(Model):
    icono_font_awesome = CharField(max_length=50)
    url = TextField()

class Variable(Model):
    llave = TextField(unique=True)
    valor = TextField()

    def __str__(self):
        return self.llave

class Experiencia(Model):
    descripcion = TextField()