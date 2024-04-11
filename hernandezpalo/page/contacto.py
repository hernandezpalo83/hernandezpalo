import reflex as rx
import hernandezpalo.utils as utils
import hernandezpalo.constants as const

from hernandezpalo.routes import Route
from hernandezpalo.styles.styles import Spacing

from  hernandezpalo.components.navbar import navbar
from hernandezpalo.components.footer import footer

from hernandezpalo.components.textos import titulo, subtitulo
from hernandezpalo.components.link_social import link_social
from hernandezpalo.components.presentacion import presentacion

ROUTE = Route.CONTACTO

@rx.page(
    route=ROUTE.value,
    title=utils.title_contacto,
    description=utils.description_contacto,
    image=utils.preview_contacto,
    meta=utils.meta_contacto
)

def contacto_page()-> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        utils.lang(),
        navbar(ROUTE),
        rx.center ( 
            rx.vstack(
                contacto(),
                footer(),
            spacing=Spacing.DEFAULT.value,
            width="100%",
            aling_items = "center",
            )
        ),
    )

def contacto() -> rx.Component:
    return rx.center(
                rx.flex(
                    presentacion(),
                    titulo("Hablamos?..."),
                    subtitulo("Ponte en contacto conmigo"),
                    rx.link(
                        rx.button(
                            rx.icon(tag="mail", stroke_width=2, size=25 ),
                            "CONTACTA CONMIGO",
                            size = '4',
                            color_scheme="blue",
                            radius="large",
                            ),
                            href="mailto:" + const.EMAIL
                    ),
                    link_social(False, True, True, True),
                    direction="column",
                    spacing="6",
                    aling = "center",     
                ),
                width="100%",
                aling_items = "center",
            )
