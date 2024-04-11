import reflex as rx

import hernandezpalo.constants as const
import hernandezpalo.routes as Route
import hernandezpalo.styles.styles as styles

from hernandezpalo.styles.styles import EMSize, MenuColor, Spacing
from hernandezpalo.components.link_icon import link_icon

def navbar(route: Route) -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.link(
                rx.hstack(
                    rx.text(
                            "Hernandez", 
                            rx.text.span(
                                "Palo",
                                weight="light",
                                color= MenuColor.LOGO_ACT.value
                            ) ,
                            margin_right = "15px",
                            weight="bold",   
                            color= MenuColor.LOGO_DES.value                            
                        ) 
                ),
                href="/",
            ),
        ),
        rx.tablet_and_desktop ( 
            rx.hstack ( 
                rx.link(
                    "Sobre mi",
                    href="/", 
                    style = styles.Item_menu
                    ),
                rx.link(
                    "Experiencia", 
                    href="/experiencia", 
                    style = styles.Item_menu
                    ),
                rx.link(
                    "Proyectos", 
                    href="/proyectos", 
                    style = styles.Item_menu
                    ),
                rx.link(
                    "Blog", 
                    href=const.PROY_BLOG,
                    style = styles.Item_menu,
                    is_external=True,
                    ),                    
                rx.link(
                    "Contacto", 
                    href="contacto", 
                    style = styles.Item_menu
                    ),
                spacing= Spacing.DEFAULT.value, 
                color_schema = 'gray',
            ),
        ),
        rx.mobile_only(
            rx.spacer(),
            rx.center(
                rx.menu.root(
                    rx.menu.trigger(
                        rx.button(rx.icon("menu")),
                    ),
                    rx.menu.content(
                        rx.vstack(
                            rx.hstack(
                                rx.icon("book-text"),
                                rx.link(
                                    "Sobre mi",
                                    href="/", 
                                    #style = styles.menu_style
                                    )
                            ),
                            rx.hstack(
                                rx.icon("waypoints"),
                                rx.link(
                                    "Experiencia", 
                                    href="/experiencia", 
                                    #style = styles.menu_style
                                    )
                            ),
                            rx.hstack(
                                rx.icon("projector"),                        
                                rx.link(
                                    "Proyectos", 
                                    href="/proyectos", 
                                    #style = styles.menu_style
                                    )
                            ),
                            rx.hstack(
                                rx.icon("contact"),                        
                                rx.link(
                                    "Contacto", 
                                    href="contacto", 
                                    #style = styles.menu_style
                                    )
                            ),
                            spacing= Spacing.DEFAULT.value, 
                        ),
                        width="100%", 
                    ),
                    #bg= Color.BACKGROUND.value,
                ),
            #bg= Color.BACKGROUND.value,
            width="100%",
            ),
        ),
        rx.spacer(), 
        rx.hstack(
            link_icon(
                "github",
                const.GITHUB_URL
            ),
            link_icon(
                "twitter",
                const.TWITTER_X_URL
            ),
            link_icon(
                "linkedin",
                const.LINKEDIN_URL
            ),           
        ),
        bg = MenuColor.BACKGROUND.value,
        width="100%",        
        height="50px", 
        position="sticky",
        padding='10px 1% 5px 1%',
        z_index="999",
        top="0",
    )