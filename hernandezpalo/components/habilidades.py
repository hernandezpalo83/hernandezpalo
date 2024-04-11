import reflex as rx
import hernandezpalo.styles.styles as styles

from hernandezpalo.styles.styles import EMSize
from hernandezpalo.models.Habilidad import Habilidad

from hernandezpalo.state.stateHabilidad import StateHabilidad

def habilidades() -> rx.Component:
    return rx.vstack(
                rx.chakra.responsive_grid(
                    rx.foreach(StateHabilidad.list_habilidad, pintar_habilidad),
                    on_mount=StateHabilidad.get_habilidad,
                    margin_top = EMSize.DEFAULT.value,    
                    spacing="30px",
                    columns=[1, 2, 4, 4, 7, 9],
                    width="100%",
                ),
                width="80%",
                style=styles.featured_container_style,        
                margin_top = EMSize.BIG.value,  
                padding='0% 10% 0% 10%',
            )

def pintar_habilidad(Habilidad) -> rx.Component:

        return  rx.center(
                rx.vstack(
                    rx.image(
                        src=Habilidad.imagen,
                        width=EMSize.VERY_BIG.value,
                        height=EMSize.VERY_BIG.value,
                        alt=Habilidad.titulo,
                        style=styles.habilidades,
                    ),
                    rx.text(Habilidad.titulo),
                    aling_items = "center",
                    width="100%",
                    aling="center"
                )
            )
