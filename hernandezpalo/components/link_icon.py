import reflex as rx


def link_icon(image: str, url: str) -> rx.Component:
    return rx.link(
            rx.icon(
                image, 
                size = 32, 
                radius="full"
            ),
            href=url,
            is_external=True
        )