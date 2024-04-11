import reflex as rx
from hernandezpalo.api.api import dame_curso, dame_experiencia, dame_certificado
from hernandezpalo.models.Experiencia import Experiencia, Curso, Tecnologia

class StateExperiencias(rx.State):

    list_experiencia: list[Experiencia] 
    list_curso: list[Curso] 
    list_certificado: list[Curso] 

    async def get_curso(self):
        self.list_curso = await dame_curso()

    async def get_certificado(self):
        self.list_certificado = await dame_certificado()

    async def get_experiencia(self):
        self.list_experiencia = await dame_experiencia()


