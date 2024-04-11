import reflex as rx

def titulo(texto:str) -> rx.Component:
    return rx.heading(
                texto,
                size = '6',
                weight='bold'
            )

def subtitulo(texto:str) -> rx.Component:
    return rx.heading(
                texto,
                size = '4',
                weight='light'
            )

def info(texto:str, icono:str="") -> rx.Component:
    return rx.hstack(
                rx.cond(
                    icono != "",
                    rx.icon(
                        icono, 
                        stroke_width=2,
                        size=15
                        )
                ),
                rx.heading(
                    texto,
                    size = '2',
                    weight='light'
                ),
            width="100%",
            )

def info_text(title: str, body: str) -> rx.Component:
    return rx.vstack(
            rx.text(
                title,
                size="1",
                weight="bold",
                color_scheme="blue"
            ),
            rx.text(
                body,
                size = "1",
                weight="light",
                color_scheme="gray"
            ), 
            spacing="1",
            width="100%"
        )
