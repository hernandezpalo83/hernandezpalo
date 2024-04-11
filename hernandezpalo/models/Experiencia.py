import reflex as rx
from typing import List

class Experiencia(rx.Base):

    id: int
    fecha: str
    funcion: str
    titulo: str
    descripcion: str
    tecnologia: List[str]

class Curso(rx.Base):
    id: int
    titulo: str
    fecha: str
    imagen: str
    url: str
    certificado: str

class Tecnologia(rx.Base):
    id: int
    titulo: str
    descripcion: str
    imagen: str