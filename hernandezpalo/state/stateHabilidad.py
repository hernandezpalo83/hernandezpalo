import reflex as rx
from hernandezpalo.api.api import dame_habilidad
from hernandezpalo.models.Habilidad import Habilidad

class StateHabilidad(rx.State):
    list_habilidad: list[Habilidad] 
    
    async def get_habilidad(self):
        self.list_habilidad = await dame_habilidad()