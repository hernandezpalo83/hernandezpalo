import os
import dotenv
import json

from cachetools import TTLCache

from supabase import create_client
from hernandezpalo.models.Tarea import Tarea
from hernandezpalo.models.Habilidad import Habilidad
from hernandezpalo.models.Experiencia import Experiencia, Curso, Tecnologia

class SupabaseAPI:
    
    dotenv.load_dotenv()

    SUPABASE_URL = os.environ.get("SUPABASE_URL")
    SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
    tablas = ['tarea', 'habilidad', 'experiencia', 'curso', 'certificado']

    def __init__(self) -> None:
        self.cache = TTLCache(maxsize=100, ttl=86400)  # Cache con una expiración de 1 dia
        if self.SUPABASE_URL != None and self.SUPABASE_KEY != None:
            self.supabase = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)

    def get_data_from_cache(self, tabla:str):
        return self.cache.get(tabla)

    def update_cache(self, tabla:str):
        if tabla == "tarea":
            data = self.supabase.table("Tarea").select("*").execute()
        elif tabla == "habilidad":
            data = self.supabase.table("habilidades").select("*").execute()
        elif tabla == "experiencia":
            data = self.supabase.table("experiencia").select("*").execute()
        elif tabla == "curso":
            data = self.supabase.table("curso").select("*").eq('certificado', 'False').execute()
        elif tabla == "certificado":
            data = self.supabase.table("curso").select("*").eq('certificado', 'True').execute()
            

        if data:
            self.cache[tabla] = data    

        return data
    
    def get_tarea(self) -> list[Tarea]:

        featured_data = []

        response = self.get_data_from_cache("tarea")
        if response is None:
            response = self.update_cache("tarea")

        if len(response.data) > 0:
            for featured_item in response.data:
                featured_data.append(
                    Tarea(
                        id=featured_item["id"], 
                        codigo=featured_item["codigo"],
                        url=featured_item["url"], 
                        titulo=featured_item["titulo"], 
                        descripcion=featured_item["descripcion"], 
                        estado=featured_item["estado"]
                    )
                )

        return featured_data
    
    def get_habilidades(self) -> list[Habilidad]:

        featured_data = []

        response = self.get_data_from_cache("habilidad")
        if response is None:
            response = self.update_cache("habilidad")

        if len(response.data) > 0:
            for featured_item in response.data:
                featured_data.append(
                    Habilidad(
                        id=featured_item["id"], 
                        titulo=featured_item["titulo"],
                        imagen=featured_item["imagen"], 
                    )
                )

        return featured_data

    def get_experiencia(self) -> list[Experiencia]:

        featured_data = []

        response = self.get_data_from_cache("experiencia")
        if response is None:
            response = self.update_cache("experiencia")
        
        if len(response.data) > 0:
            for experiencia_item in response.data:
                tecnologia = experiencia_item.get("tecnologia", [])
                funcion = experiencia_item.get("funcion", "")
                descripcion = experiencia_item.get("descripcion", "")

                featured_data.append(
                    Experiencia(
                        id=experiencia_item["id"], 
                        fecha=experiencia_item["fecha"],
                        funcion=funcion,
                        titulo=experiencia_item["titulo"],
                        descripcion=descripcion,
                        tecnologia=tecnologia,
                    )
                )
        return featured_data
    
    def get_curso(self) -> list[Curso]:

        featured_data = []

        response = self.get_data_from_cache("curso")
        if response is None:
            response = self.update_cache("curso")
        
        featured_data = []
        if len(response.data) > 0:
            for featured_item in response.data:
                certificado = featured_item.get("certificado", False)
                url = featured_item.get("url", None) 
                if url is None:
                    url = ""

                featured_data.append(
                    Curso(
                        id=featured_item["id"], 
                        titulo=featured_item["titulo"],
                        fecha=featured_item["fecha"],
                        imagen=featured_item["imagen"], 
                        url=url, 
                        certificado=certificado, 
                    )
                )
        return featured_data

    def get_certificado(self) -> list[Curso]:

        featured_data = []

        response = self.get_data_from_cache("certificado")
        if response is None:
            response = self.update_cache("certificado")
        
        featured_data = []
        if len(response.data) > 0:
            for featured_item in response.data:
                certificado = featured_item.get("certificado", False)
                url = featured_item.get("url", None) 
                if url is None:
                    url = ""

                featured_data.append(
                    Curso(
                        id=featured_item["id"], 
                        titulo=featured_item["titulo"],
                        fecha=featured_item["fecha"],
                        imagen=featured_item["imagen"], 
                        url=url, 
                        certificado=certificado, 
                    )
                )
        return featured_data
    
    def tarea_actualizar_cache(self):
        for tabla in self.tablas:
            self.update_cache(tabla)

        return json.dumps({"mensaje": 'Cache actualizado'})
