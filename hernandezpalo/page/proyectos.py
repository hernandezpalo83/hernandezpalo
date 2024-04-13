import reflex as rx
import hernandezpalo.utils as utils

from hernandezpalo.routes import Route
from hernandezpalo.styles.styles import Spacing
from hernandezpalo.styles.styles import EMSize

from  hernandezpalo.components.navbar import navbar
from hernandezpalo.components.footer import footer

from hernandezpalo.state.stateProyecto import StateProyecto
from hernandezpalo.models.Proyecto import Proyecto

ROUTE = Route.PROYECTOS

@rx.page(
    route=ROUTE.value,
    title=utils.title_projects,
    description=utils.description_projects,
    image=utils.preview_projects,
    meta=utils.meta_projects
)

def proyectos_page()-> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        utils.lang(),
        navbar(ROUTE),
        rx.center ( 
            rx.vstack(
                rx.heading("PROYECTOS"),
                proyecto(),
                footer(),
            spacing=Spacing.DEFAULT.value,
            width="100%"
            )
        ),
    )


    
def proyecto()-> rx.Component:
    return rx.center(
                rx.chakra.responsive_grid(
                    rx.foreach(StateProyecto.list_proyecto, pintar_proyecto),
                    on_mount=StateProyecto.get_proyecto,
                    margin_top = EMSize.DEFAULT.value,    
                    spacing="30px",
                    columns=[1, 3, 4, 4, 4, 5],
                    width="100%",
                    margin = EMSize.BIG.value,
                ),
            )

def pintar_proyecto(lista:list[Proyecto]) -> rx.Component:
    
    return rx.card(
        rx.link(
            rx.vstack(
                rx.image(src=lista.imagen),
                rx.box(
                    rx.heading(lista.titulo),
                    rx.text(
                        lista.descripcion
                    ),
                ),
                spacing="2",
            ),
            href=lista.url,
            is_external=True
        ),
        as_child=True,
    )

