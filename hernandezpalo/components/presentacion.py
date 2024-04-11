import reflex as rx
import datetime

from hernandezpalo.styles.styles import Spacing
import hernandezpalo.textos as texto_fijo

from hernandezpalo.components.textos import titulo, subtitulo, info, info_text
from hernandezpalo.components.link_social import link_social


def presentacion() -> rx.Component:
    return  rx.vstack(
                rx.hstack(
                    rx.avatar(
                        src = "",
                        variant="soft",
                        size="7",
                        radius="full",
                        fallback="JH",
                    ),
                    rx.vstack(
                        titulo("Javier Hernandez Martin"),
                        subtitulo(" @HernandezPalo"),
                        info("Palomero (Caceres) - España", "map-pin"),
                        link_social(True, True, True, True),
                    width = "100%", 
                    spacing= Spacing.SMALL.value,
                    padding= "0px"   
                    )
                ),
            width = "100%",
            padding = "12px",
            align_items= "center"
            )

def resumen_presentacion() -> rx.Component:
    return rx.center( 
            rx.flex(
                info_text(
                    f"{experience()}+",
                    "años de experiencia"
                ),
                info_text(
                    "(SPOC)", "Scrum Product Owner Certified"
                ),
                info_text(
                    "(SFCE)", "Scrum Foundations Certified Expert"
                ),
                info_text(
                    f"Jefe de proyecto",""
                ),
            width="100%",
            spacing= Spacing.SMALL.value,
            margin = "10px" ,
            padding='0% 10% 0% 10%'
            ),
        width="100%",
        )

def texto_presentacion() -> rx.Component:
    return rx.center(
            rx.box(
                    rx.markdown(texto_fijo.SOBRE_MI),
                    width="100%",
                    aling="center",
                    padding='0% 10% 0% 10%'
                ),
                
            )

def experience() -> int:
    return datetime.date.today().year - 2005