import hernandezpalo.constants as const

from .SupabaseAPI import SupabaseAPI
from  hernandezpalo.models.Tarea import Tarea
from  hernandezpalo.models.Habilidad import Habilidad
from hernandezpalo.models.Experiencia import Experiencia, Curso, Tecnologia

SUPABASE_API = SupabaseAPI()

async def repo() -> str:
    return const.REPO_URL

async def dame_tarea() -> list[Tarea]:
    return SUPABASE_API.get_tarea() 

async def dame_habilidad() -> list[Habilidad]:
    return SUPABASE_API.get_habilidades()

async def dame_experiencia() -> list[Experiencia]:
    return SUPABASE_API.get_experiencia()

async def dame_curso() -> list[Curso]:
    return SUPABASE_API.get_curso()

async def dame_certificado() -> list[Curso]:
    return SUPABASE_API.get_certificado()

async def actualiza_cache() -> str:
    return SUPABASE_API.tarea_actualizar_cache()
