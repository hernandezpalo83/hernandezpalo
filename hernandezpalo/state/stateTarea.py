import reflex as rx
from hernandezpalo.api.api import dame_tarea
from hernandezpalo.models.Tarea import Tarea

class StateTarea(rx.State):
    tareas: list[Tarea] 
    #tareas: list[dict[int,str,str, str,str, str]]
    columns=["Id","Codigo","URL","Titulo","Descripcion","Estado"]
    table_rows:list
    
    
    async def get_tarea(self):
        self.tareas = await dame_tarea()
        print(self.tareas)
        self.table_rows = [[row['ID'], row['Codigo'], row['URL'], row['Titulo'], row['Descripcion'], row['Estado']] for row in self.tareas]
