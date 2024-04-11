import reflex as rx
import hernandezpalo.styles.styles as styles

from hernandezpalo.styles.styles import EMSize, Spacing
from hernandezpalo.models.Experiencia import Experiencia, Curso, Tecnologia

def pinta_experiencia(lista:list[Experiencia]) -> rx.Component:
    return  rx.vstack(
                rx.hstack(
                    rx.badge(lista.fecha, variant="outline", color_scheme="green"),
                    rx.badge(lista.funcion, variant="outline", color_scheme="yellow"),
                ),
                rx.heading(lista.titulo),
                rx.box(
                    rx.code_block(
                        lista.descripcion,
                        theme="dark",
                        wrap_long_lines = True,
                        border_radius="1.5rem",
                        custom_style={
                            # "background-color": Color.CONTENT.value,
                            "padding": EMSize.DEFAULT.value
                        },
                        # code_tag_props={
                        #     "style": {
                        #         "fontFamily": Font.DEFAULT.value,
                        #         "fontWeight": FontWeight.NORMAL.value,
                        #         "color": TextColor.BLANCO.value
                        #     }
                        # }
                    ), 
                    width="100%",
                    padding="1em",
                    style=styles.featured_container_style,
                    # margin_top = EMSize.DEFAULT.value,                                                
                ),
                # rx.hstack(
                #     rx.foreach(data, pinta_tegnologia),
                #     # style= styles.badge_tecnologia,
                #     margin_top = EMSize.BIG.value,   
                # ),
            align_items="start",    
            style=styles.container_style,
            margin_top = EMSize.DEFAULT.value,                    
            spacing=Spacing.DEFAULT.value,
            width="100%",
        )

def pinta_curso(lista:list[Curso]) -> rx.Component:
        return  rx.link(
                    rx.hstack(
                        rx.image(
                            src=lista.imagen,
                            width=EMSize.VERY_BIG.value,
                            height=EMSize.VERY_BIG.value,
                            alt=lista.titulo
                        ),
                        rx.chakra.stat(
                            rx.chakra.stat_label(lista.titulo),
                            rx.chakra.stat_help_text(f"Realización: " + lista.fecha),
                        ),
                    ),
                    href=lista.url,
                    is_external=True
                )
        

def pinta_certificado(lista:list[Curso]) -> rx.Component:
    return rx.link(
            rx.hstack(
                rx.image(
                    src=lista.imagen,
                    width=EMSize.VERY_BIG.value,
                    height=EMSize.VERY_BIG.value,
                    alt=lista.titulo
                ),
                rx.chakra.stat(
                    rx.chakra.stat_label(lista.titulo,  hyphens= "auto"),
                    rx.chakra.stat_help_text(f"Expedición: " + lista.fecha),
                )
            ),
            href=lista.url,
            is_external=True
        )



# def pinta_tegnologia(data) -> rx.Component:
#     return  rx.badge(
#             data,
#             # bg=Color.PRIMARY.value ,
#             # color=Color.CONTENT.value ,
#             # border_color=Color.SECONDARY.value ,
#             border_width=2,
#             border_radius= EMSize.MEDIUM.value,
#             )

