import reflex as rx
import datetime
import hernandezpalo.constants as const

def footer() -> rx.Component:
    return rx.center( 
                rx.vstack(
                    rx.link(
                        rx.box(
                            f"© 2023-{datetime.date.today().year} ",
                            rx.text.span("HernandezPalo by Javier Hernandez")
                        ),
                    href=const.HERNANDEZPALO_URL,
                    is_external=True,
                    ),
                    rx.text(
                        "BUILDING SOFTWARE WITH ♥ FROM EXTREMADURA TO THE WORLD.",
                    ),
                    width="100%",
                    align_items = "center",
                ),
                align_content="center",
                width="100%",
                align_items = "center",               

            )