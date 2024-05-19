import reflex as rx

# Común
def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


meta = [
    {"name": "og:type", "content": "website"},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@hernandezpalo"}
]

# Index
title_index = "Portafolio de Javier Hernandez Martin, aqui podras descrubrir un poco mas sobre mi y sobre el desarrollo de aplicaciones | by HernandezPalo"
description_index = "Portafolio personal de HernandezPalo. En esta pagina me podras conocer un poco mejor, mis gustos, intereses, lo que estoy aprendiendo o el proyecto en el que estoy inmerso."
preview_index = "project/Portafolio.jpg"

meta_index = [
    {"name": "og:title", "content": title_index},
    {"name": "og:description", "content": description_index},
    {"name": "og:image", "content": preview_index}
]
meta_index.extend(meta)

# Experiencia
title_experiencia = "Experiencia Laboral de Javier Hernandez Martin | by HernandezPalo"
description_experiencia = "Muestra la experiencia laboral, cursos y certificados, al final para conocer mas lo que hecho, aunque lo importante es que hare, realizados por Javier Hernandez."
preview_experiencia = "project/Portafolio.jpg"

meta_experiencia = [
    {"name": "og:title", "content": title_experiencia},
    {"name": "og:description", "content": description_experiencia},
    {"name": "og:image", "content": preview_experiencia}
]
meta_experiencia.extend(meta)

# Proyectos
title_projects = "Proyectos de Programación realizados anteriormente | by HernandezPalo"
description_projects = "Aqui muestro una lista (que no todas) de aplicaciones personales desarrolladas para aprender, practicar y aplicar los conocimiento adquiridos. Ya se sabe, hacer y deshacer todo es aprender."
preview_projects = "project/Portafolio.jpg"

meta_projects = [
    {"name": "og:title", "content": title_projects},
    {"name": "og:description", "content": description_projects},
    {"name": "og:image", "content": preview_projects}
]
meta_projects.extend(meta)

# sobremi
title_sobremi = "Sobre mi, un poco mas de informacion sobre Javier Hernandez Martin | by HernandezPalo"
description_sobremi = "Quereis conocerme un poco mas, os puedo ayudar en algo, aqui os informo sobre como poneros en conctacto conmigo. A que esperais?."
preview_sobremi = "project/Portafolio.jpg"

meta_sobremi = [
    {"name": "og:title", "content": title_sobremi},
    {"name": "og:description", "content": description_sobremi},
    {"name": "og:image", "content": preview_sobremi}
]
meta_sobremi.extend(meta)

# contacto
title_contacto = "Contacto, como podeis poneros en contacto conmigo | by HernandezPalo"
description_contacto = "Quereis conocerme un poco mas, os puedo ayudar en algo, aqui os informo sobre como poneros en conctacto conmigo. A que esperais?."
preview_contacto = "project/Portafolio.jpg"

meta_contacto = [
    {"name": "og:title", "content": title_contacto},
    {"name": "og:description", "content": description_contacto},
    {"name": "og:image", "content": preview_contacto}
]
meta_contacto.extend(meta)
