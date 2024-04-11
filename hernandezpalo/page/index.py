import reflex as rx
import hernandezpalo.utils as utils


from hernandezpalo.routes import Route
from hernandezpalo.styles.styles import Spacing

from hernandezpalo.components.navbar import navbar
from hernandezpalo.components.presentacion import presentacion, resumen_presentacion, texto_presentacion
from hernandezpalo.components.textos import titulo
from hernandezpalo.components.footer import footer
from hernandezpalo.components.habilidades import habilidades

from hernandezpalo.state.stateHabilidad import StateHabilidad
from hernandezpalo.state.StateTask import DailyTaskState


ROUTE = Route.SOBRE_MI

@rx.page(
    title=utils.title_index,
    description=utils.description_index,
    image=utils.preview_index,
    meta=utils.meta_index,
    # on_load=[
    #     # StateHabilidad.get_habilidad ,
    #     # DailyTaskState.daily_task
    #     ]
)

def index() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        utils.lang(),
        navbar(ROUTE),
        rx.center ( 
            rx.vstack(
                presentacion(),
                resumen_presentacion(),
                texto_presentacion(),
                rx.center(titulo("Habilidades"), width="100%"),
                habilidades(),
                footer(),
            spacing=Spacing.DEFAULT.value,
            width="100%"
            )
        ),
    )
