import reflex as rx
import hernandezpalo.utils as utils

from hernandezpalo.routes import Route
from hernandezpalo.styles.styles import Spacing

from  hernandezpalo.components.navbar import navbar
from hernandezpalo.components.footer import footer

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
                rx.text("PROYECTOS"),
                #footer(),
            spacing=Spacing.DEFAULT.value,
            width="100%"
            )
        ),
    )


def pintar_proyecto() -> rx.Component:
    return rx.card(
            rx.inset(
                rx.image(
                    src="/reflex_banner.png",
                    width="100%",
                    height="auto",
                ),
                side="top",
                pb="current",
            ),
            rx.text(
                "Reflex is a web framework that allows developers to build their app in pure Python."
            ),
            width="25vw",
        )

def proyecto() -> rx.Component:
    pass