import reflex as rx

import hernandezpalo.constants as const

def link_social(email:bool, github:bool, twiter:bool, linkelind:bool) -> rx.Component:
    return rx.hstack(
        rx.cond(
            email==True,
            rx.link(
                rx.icon(tag="mail", stroke_width=2, size=25 ),
                href="mailto:" + const.EMAIL,
                is_external=True
            )
        ),
        rx.cond(
            github==True,
            rx.link(
                rx.icon("github", stroke_width=2, size=25),
                href=const.GITHUB_URL,
                is_external=True
            )            
        ),
        rx.cond(
            twiter==True,
            rx.link(
                rx.icon("twitter", stroke_width=2, size=25),
                href=const.TWITTER_X_URL,
                is_external=True
            )                   
        ),
        rx.cond(
            linkelind==True,
            rx.link(
                rx.icon("linkedin", stroke_width=2, size=25),
                href=const.LINKEDIN_URL,
                is_external=True
            )                   
        ),
        width = "100%",
        spacing="4"
    )
