import reflex as rx
import hernandezpalo.utils as utils

from hernandezpalo.routes import Route
from hernandezpalo.styles.styles import Spacing

from hernandezpalo.components.navbar import navbar
from hernandezpalo.components.footer import footer
from hernandezpalo.components.experiencia import pinta_certificado, pinta_curso, pinta_experiencia


from hernandezpalo.state.stateExperiencia import StateExperiencias

ROUTE = Route.EXPERIENCIA

@rx.page(
    route=ROUTE.value,
    title=utils.title_experiencia,
    description=utils.description_experiencia,
    image=utils.preview_experiencia,
    meta=utils.meta_experiencia
)

def experiencia_page()-> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        utils.lang(),
        navbar(ROUTE),
        rx.center ( 
            rx.vstack(
                experiencia(),
                cursos(),
                footer(),
            spacing=Spacing.DEFAULT.value,
            width="90%",
            aling_content= "center"
            )
        ),
    )


def experiencia()-> rx.Component:
    return rx.vstack(
            rx.heading("Experiencia Laboral"),
                rx.vstack(
                    rx.foreach(StateExperiencias.list_experiencia, pinta_experiencia),
                    on_mount=StateExperiencias.get_experiencia,
                    width="100%"
                )
        )


def cursos()-> rx.Component:
    return  rx.vstack(
                rx.heading("Certificados"),
                rx.box(
                    rx.chakra.responsive_grid( 
                        rx.foreach(StateExperiencias.list_certificado, pinta_certificado),
                        on_mount=StateExperiencias.get_certificado,
                        spacing="20px",
                        columns=[1, 1, 1, 2, 3, 3],
                    ), 
                    width="100%",
                    align_items="center",
                ),
                
                rx.heading("Cursos"),
                rx.box(
                    rx.chakra.responsive_grid(
                        rx.foreach(StateExperiencias.list_curso, pinta_curso),
                        on_mount=StateExperiencias.get_curso,
                        spacing="20px",
                        columns=[1, 1, 1, 2, 3, 3],
                    ), 
                    width="100%",
                    align_items="center",
            ),
            width="100%",
            align_items="center"
    )



# def view_experiencias() -> rx.Component:
#     return  rx.center(
#                 rx.vstack(
#                     rx.heading("Experiencia Laboral"),
#                     rx.box(
#                         rx.vstack(
#                             *[
#                                 experiencia_list(data, "last" if index == len(experiencias) else None )
#                                 for index, data in enumerate( experiencias ) 
#                             ],
#                         ),
#                         margin_top = Size.VERY_BIG.value,
#                         style=styles.max_width_style,
#                         ),
                        
                    
#                     rx.heading("Cetificaciones",margin_top = Size.VERY_BIG.value,),
#                     rx.responsive_grid(
#                         *[
#                                 certificaciones_list(data)
#                                 for data in certificados
#                             ],
#                             style=styles.max_width_style,
#                     margin_top = Size.BIG.value,    
#                     spacing="20px",
#                     columns=[1, 1, 1, 2, 3, 3],
#                     ),

#                     rx.heading("Cursos", margin_top = Size.VERY_BIG.value,),
#                     rx.responsive_grid(
#                         *[
#                                 cursos_list(data)
#                                 for data in cursos
#                             ],
#                     margin_top = Size.BIG.value,    
#                     spacing="20px",
#                     columns=[1, 1, 1, 2, 3, 3],
#                     ),                
#                 style=styles.max_width_style,
#                 ),
#              )
         
