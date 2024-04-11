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
title_index = "Portafolio | by HernandezPalo"
description_index = "Portafolio personal de HernandezPalo."
preview_index = "project/Portafolio.jpg"

meta_index = [
    {"name": "og:title", "content": title_index},
    {"name": "og:description", "content": description_index},
    {"name": "og:image", "content": preview_index}
]
meta_index.extend(meta)

# Experiencia
title_experiencia = "Experiencia Laboral de Javier Hernandez | by HernandezPalo"
description_experiencia = "Muestra la experiencia laboral, cursos y certificados realizados por Javier Hernandez."
preview_experiencia = "project/Portafolio.jpg"

meta_experiencia = [
    {"name": "og:title", "content": title_experiencia},
    {"name": "og:description", "content": description_experiencia},
    {"name": "og:image", "content": preview_experiencia}
]
meta_experiencia.extend(meta)

# Proyectos
title_projects = "Proyectos de Programación | by HernandezPalo"
description_projects = "Aplicaciones personales desarrolladas para practicar los conocimiento."
preview_projects = "project/Portafolio.jpg"

meta_projects = [
    {"name": "og:title", "content": title_projects},
    {"name": "og:description", "content": description_projects},
    {"name": "og:image", "content": preview_projects}
]
meta_projects.extend(meta)

# sobremi
title_sobremi = "Sobre mi | by HernandezPalo"
description_sobremi = "Informacion sobre mi, gustos, intereses..."
preview_sobremi = "project/Portafolio.jpg"

meta_sobremi = [
    {"name": "og:title", "content": title_sobremi},
    {"name": "og:description", "content": description_sobremi},
    {"name": "og:image", "content": preview_sobremi}
]
meta_sobremi.extend(meta)

# contacto
title_contacto = "Contacto | by HernandezPalo"
description_contacto = "Formas de ponerse en contacto con Javier Hernandez"
preview_contacto = "project/Portafolio.jpg"

meta_contacto = [
    {"name": "og:title", "content": title_contacto},
    {"name": "og:description", "content": description_contacto},
    {"name": "og:image", "content": preview_contacto}
]
meta_contacto.extend(meta)
