import reflex as rx
from hernandezpalo.api.api import dame_proyecto
from hernandezpalo.models.Proyecto import Proyecto

class StateProyecto(rx.State):

    list_proyecto: list[Proyecto] 
    
    async def get_proyecto(self):
        self.list_proyecto = await dame_proyecto()

    