import reflex as rx

from enum import Enum

class EMSize(Enum):
    ZERO    = "0px !important"
    SMALL   = "0.5em"
    MEDIUM  = "0.8em"
    DEFAULT = "1em"
    LARGE   = "1.5em"
    BIG     = "2em"
    VERY_BIG= "4em"

    LARGE_ICON  = "32px"

class Spacing(Enum):
    ZERO    = "0"
    SMALL   = "2"
    DEFAULT = "4"
    LARGE   = "6"
    BIG     = "9"

class MenuColor(Enum):
    LETRAS   = "#F1F2F4"
    BACKGROUND= "#0C151D"
    LOGO_ACT = "#155276"
    LOGO_DES =  "#096DA9"

class Color(Enum):
    PRIMARY = "#14A1F0"
    SECONDARY = "#087ec4"
    BACKGROUND = "#0C151D"
    CONTENT = "#171F26"

# Constants
MAX_WIDTH = "800px"

STYLESHEETS = []

BASE_STYLE = {
        rx.link: {
            "text_decoration": "none",
            "_hover": {
            }
        }
    }

max_width_style = dict(
    align_items="start",
    padding_x=EMSize.BIG.value,
    width="100%",
    max_width=MAX_WIDTH
)


Item_menu =  {
    "--c": "linear-gradient(#F1F2F4 0 0);",
    "padding_bottom": ".15em",
    "background": "var(--c), var(--c)",
    "background_size": "0em 0em",
    "background_position": "50% 100%",
    "background_repeat": "no-repeat",
    "transition": ".3s linear, background_size .3s .2s linear",
    "_hover" : {
        "background_size": "40% .1em",
        "background_position": "10% 100%, 90% 100%",
        "transform": "scale(1.5) translateY(10px)",
        }    
    }

habilidades = {
    "border-radius":"30%",
    "-webkit-border-radius":"30%",
"_hover" : {
    "box-shadow": "0px 0px 10px 10px #ec731e",
    "-webkit-box-shadow": "0px 0px 10px 10px #ec731e",
    "transform": "scale(1.1)",
    "-webkit-transform": "scale(1.1)",
    }
}

featured_container_style = {
    "border_radius": "1.5rem",
    "background": Color.CONTENT.value,
    "box-shadow": f"0 0 {EMSize.DEFAULT.value} {Color.SECONDARY.value}"
    
}

container_style = {
    "padding": EMSize.DEFAULT.value,
    "border_radius": "1.5rem",
    "background": Color.CONTENT.value,
    "_hover": {
        "box-shadow": f"0 0 {EMSize.DEFAULT.value} {Color.SECONDARY.value}"
    }
}