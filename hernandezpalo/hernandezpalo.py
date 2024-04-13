import reflex as rx

import hernandezpalo.styles.styles as  styles
import hernandezpalo.constants as constants

import hernandezpalo.page.index as index
import hernandezpalo.page.experiencia as experiencia
import hernandezpalo.page.proyectos as proyectos
import hernandezpalo.page.contacto as contacto


from hernandezpalo.api.api import dame_habilidad, dame_tarea, dame_certificado, dame_experiencia, dame_curso, actualiza_cache, dame_proyecto
app = rx.App(
    theme = rx.theme( 
        appearance="dark",
        accentColor="blue",
        panelBackground="solid",
        radius="large" 
        ),
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(
            src=f"https://www.googletagmanager.com/gtag/js?id={constants.GOOGLE_ANALYTICS_TAG}"
        ),
        rx.script(
            f"""
            window.dataLayer = window.dataLayer || [];
            function gtag(){{dataLayer.push(arguments);}}
            gtag('js', new Date());
            gtag('config', '{constants.GOOGLE_ANALYTICS_TAG}');
            """
            ),
        ],
    )

# API PUBLICA, ENDPOINT EXPUESTOS
app.api.add_api_route("/tarea", dame_tarea)

app.api.add_api_route("/habilidad", dame_habilidad)
app.api.add_api_route("/experiencia", dame_experiencia)
app.api.add_api_route("/curso", dame_curso)
app.api.add_api_route("/certificado", dame_certificado)
app.api.add_api_route("/proyecto", dame_proyecto)

app.api.add_api_route("/update_cache", actualiza_cache)

