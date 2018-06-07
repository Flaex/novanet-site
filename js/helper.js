//Header object
const header = {
  "logo" :
    {
      "alt" : "logo novanet",
      "src" : "logo.svg"
    },
  "sm" : [
    {
      "id" : "facebook",
      "icon" : "fab fa-facebook-f",
      "url" : "https://www.facebook.com/GrupoNovanet"
    },
    {
      "id" : "twitter",
      "icon" : "fab fa-twitter",
      "url" : "https://twitter.com/gruponovanet"
    },
    {
      "id" : "instagram",
      "icon" : "fab fa-instagram",
      "url" : "https://www.instagram.com/gruponovanet/"
    }
  ],
  "legal" : "Derechos reservados 2006-2018."
};

//Stories object
const stories = {
  "title" : "Creamos historias de éxito",
  "paragraph" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  }

//Nosotros object
const nosotros = {
  "sectionTitle" : "Nosotros",
  "sectionNavBtn" : [
    {
      "color" : "greenbg-1",
      "icon" : "icon ni-rocket",
      "href" : "#andar"
    },
    {
      "color" : "greenbg-2",
      "icon" : "icon ni-brain",
      "href" : "#pensar"
    },
    {
      "color" : "greenbg-3",
      "icon" : "icon ni-ball",
      "href" : "#ir"
    }
  ],
  "tabs" : [
    {
      "id" : "andar",
      "tabTitle" : "¿En qué andamos?",
      "tabParagraph" : "Diseñamos contenido desde la concepción inicial hasta la ejecución final. Entendemos que la manera en la que tu negocio comunica es fundamental para establecer una conexión real con tus clientes.",
    },
    {
      "id" : "pensar",
      "tabTitle" : "¿En qué pensamos?",
      "tabParagraph" : "Utilizamos el diseño y la tecnología para impulsar el éxito de tus proyectos. Estamos día a día conectados con la innovación y la tendencia. Asumimos el diseño como un reto de cambio constante.",
    },
    {
      "id" : "ir",
      "tabTitle" : "¿Hacia dónde vamos?",
      "tabParagraph" : "Para nosotros es primordial promover el desarrollo de cada uno de tus propósitos y proveerte de las herramientas necesarias para lograrlos con éxito. Vamos mucho más allá.",
    }
  ]
}

//Hacemos object
const hacemos = {
  "sectionTitle" : "¿Qué hacemos?",
  "sectionNavBtn" : [
    {
      "color" : "bluebg-1",
      "icon" : "icon ni-pencil",
      "href" : "#diseno"
    },
    {
      "color" : "bluebg-2",
      "icon" : "icon ni-webdev",
      "href" : "#desarrollo"
    },
    {
      "color" : "bluebg-3",
      "icon" : "icon ni-connection",
      "href" : "#integracion"
    }
  ],
  "tabs" : [
    {
      "id" : "diseno",
      "tabTitle" : "Diseño gráfico",
      "tabItems" : [
        {
          "icon" : "icon ni-logo",
          "title" : "Logotipos",
          "text" : "Estudiamos las características de tu empresa para que a través de tu logotipo logres conectarte realmente con tu mercado."
        },
        {
          "icon" : "icon ni-printer",
          "title" : "Impresos y digital",
          "text" : "Producimos piezas como papelería comercial, imágenes en redes sociales, boletines, banners promocionales, avisos de prensa, folletos, volantes, afiches, entre otros."
        },
        {
          "icon" : "icon ni-star",
          "title" : "Branding",
          "text" : "Te ubicamos exactamente en el lugar indicado para que estés ahí en el momento en el que tus clientes te necesiten."
        }
      ]
    },
    {
      "id" : "desarrollo",
      "tabTitle" : "Aplicaciones web",
      "tabItems" : [
        {
          "icon" : "icon ni-webpage",
          "title" : "Sitios web",
          "text" : "Tus usuarios merecen experimentar lo mejor de tus ideas a través de la web. Para que estés alineado con la tendencia orientamos el diseño a la adaptabilidad y su funcionabilidad en dispositivos móviles."
        },
        {
          "icon" : "icon ni-tap",
          "title" : "Interfaces de usuario y desarrollo frontend",
          "text" : "Diseñamos e implementamos vistas para aplicaciones web, gestores de contenido propietario o de código abierto."
        },
        {
          "icon" : "icon ni-database",
          "title" : "Aplicaciones backend",
          "text" : "Están basadas en la web y diseñadas para satisfacer las necesidades de tu organización en procesos administrativos, logísticos o mecanismos de información."
        }
      ]
    },
    {
      "id" : "integracion",
      "tabTitle" : "Integración",
      "tabItems" : [
        {
          "icon" : "icon ni-chat",
          "title" : "Integración en proyectos",
          "text" : "Nos integramos con tus procesos para realizar diversas tareas de implementación en medios digitales, desarrollo de aplicaciones y piezas de diseño en general."
        },
        {
          "icon" : "icon ni-sync",
          "title" : "Gestión de Contenido",
          "text" : "Hacemos grandes esfuerzos por conocer realmente tu mercado para poder generar piezas que sean capaces de conectar con sus realidades para luego implementarlas en diversas plataformas."
        },
        {
          "icon" : "icon ni-compass",
          "title" : "Tecnologías de la información",
          "text" : "Te apoyamos constantemente en el descubrimiento de tecnologías adaptadas a tus necesidades. Ubicamos tus ideas dentro de lo que es tendencia a nivel global."
        }
      ]
    }
  ]
}

//Portafolio object
const portafolio = {
  "sectionTitle" : "Portafolio",
  "sectionNavBtn" : [
    {
      "color" : "orangebg-1",
      "icon" : "icon ni-star",
      "href" : "#branding"
    },
    {
      "color" : "orangebg-2",
      "icon" : "icon ni-responsive",
      "href" : "#disenoweb"
    },
    {
      "color" : "orangebg-3",
      "icon" : "icon ni-logo",
      "href" : "#logotipos"
    }
  ],
  "tabs" : [
    {
      "id" : "branding",
      "tabTitle" : "Branding",
      "tabItems" : [
        {
          "title": "Merlin Data Quality",
          "dates": "May 2017",
          "text": "Normalización de logotipo, manual corporativo y aplicación de imagen corporativa en papelería comercial",
          "images" : [
             {
               "src": "mdq-logo-200.jpg",
               "href" : "mdq-logo-900.jpg"
             },
             {
               "src": "mdq-man1-200.jpg",
               "href" : "mdq-man1-900.jpg"
             },
             {
               "src": "mdq-man2-200.jpg",
               "href" : "mdq-man2-900.jpg"
             },
             {
               "src": "mdq-man2-200.jpg",
               "href" : "mdq-man3-900.jpg"
             },
             {
               "src": "mdq-pap2-200.jpg",
               "href" : "mdq-pap2-900.jpg"
             }
           ]
        },
        {
          "title": "Groberplus",
          "dates": "Jun 2017",
          "text": "Diseño e impresión de catálogo de productos, página web.",
          "images" : [
             {
               "src": "gp-cat2-200.jpg",
               "href" : "gp-cat2-900.jpg"
             },
             {
               "src": "gp-cat3-200.jpg",
               "href" : "gp-cat3-900.jpg"
             },
             {
               "src": "gp-cat4-200.jpg",
               "href" : "gp-cat4-900.jpg"
             },
             {
               "src": "gp-web1-200.jpg",
               "href" : "gp-web1-900.jpg"
             },
             {
               "src": "gp-web2-200.jpg",
               "href" : "gp-web2-900.jpg"
             },
             {
               "src": "gp-web3-200.jpg",
               "href" : "gp-web3-900.jpg"
             }
           ]
        },
        {
          "title": "Ejsupply",
          "dates": "Mar 2013",
          "text": "Diseño de señalización, infografías, papelería comercial y página web.",
          "images" : [
             {
               "src": "ejs-pap1-200.jpg",
               "href" : "ejs-pap1-900.jpg"
             },
             {
               "src": "ejs-pap2-200.jpg",
               "href" : "ejs-pap2-900.jpg"
             },
             {
               "src": "ejs-pap3-200.jpg",
               "href" : "ejs-pap3-900.jpg"
             },
             {
               "src": "ejs-pap4-200.jpg",
               "href" : "ejs-pap4-900.jpg"
             },
             {
               "src": "ejs-web-200.jpg",
               "href" : "ejs-web-900.jpg"
             }
           ]
        },
        {
          "title": "Take on Bar",
          "dates": "May 2017",
          "text": "Aplicación de imagen corporativa en papelería comercial, brochure, página web y redes sociales.",
          "images" : [
             {
               "src": "tob-log-200.jpg",
               "href" : "tob-log-900.jpg"
             },
             {
               "src": "tob-pap1-200.jpg",
               "href" : "tob-pap1-900.jpg"
             },
             {
               "src": "tob-pap2-200.jpg",
               "href" : "tob-pap2-900.jpg"
             },
             {
               "src": "tob-web1-200.jpg",
               "href" : "tob-web1-900.jpg"
             },
             {
               "src": "tob-sm-200.jpg",
               "href" : "tob-sm-900.jpg"
             }
           ]
        },
        {
          "title": "Gamma Medical",
          "dates": "May 2017",
          "text": "Despliegue de marca en avisos de prensa, papelería comercial, página web y redes sociales.",
          "images" : [
             {
               "src": "gm-log-200.jpg",
               "href" : "gm-log-900.jpg"
             },
             {
               "src": "gm-pap1-200.jpg",
               "href" : "gm-pap1-900.jpg"
             },
             {
               "src": "gm-pap2-200.jpg",
               "href" : "gm-pap2-900.jpg"
             },
             {
               "src": "gm-sm-200.jpg",
               "href" : "gm-sm-900.jpg"
             },
             {
               "src": "gm-web1-200.jpg",
               "href" : "gm-web1-900.jpg"
             }
           ]
        },
        {
          "title": "Perez & Parra",
          "dates": "May 2017",
          "text": "Diseño de papelería comercial y página web.",
          "images" : [
             {
               "src": "p&p-log-200.jpg",
               "href" : "p&p-log-900.jpg"
             },
             {
               "src": "p&p-man-200.jpg",
               "href" : "p&p-man-900.jpg"
             },
             {
               "src": "p&p-pap1-200.jpg",
               "href" : "p&p-pap1-900.jpg"
             },
             {
               "src": "p&p-pap2-200.jpg",
               "href" : "p&p-pap2-900.jpg"
             },
             {
               "src": "p&p-web1-200.jpg",
               "href" : "p&p-web1-900.jpg"
             }
           ]
        },
        {
          "title": "Ben Sherman",
          "dates": "May 2017",
          "text": "Diseño e instalación de gigantografías, piezas de señalización y manual corporativo.",
          "images" : [
             {
               "src": "bs-man-200.jpg",
               "href" : "bs-man-900.jpg"
             },
             {
               "src": "bs-post2-200.jpg",
               "href" : "bs-post2-900.jpg"
             },
             {
               "src": "bs-post1-200.jpg",
               "href" : "bs-post1-900.jpg"
             },
             {
               "src": "bs-rrhh-200.jpg",
               "href" : "bs-rrhh-900.jpg"
             },
             {
               "src": "bs-avi-200.jpg",
               "href" : "bs-avi-900.jpg"
             }
           ]
        },
        {
          "title": "EMN, Especialidades Médicas Nucleosistemas",
          "dates": "May 2017",
          "text": "Diseño y despliegue de señalización, piezas corporativas y papelería comercial.",
          "images" : [
             {
               "src": "emn-log-200.jpg",
               "href" : "emn-log-900.jpg"
             },
             {
               "src": "emn-pap1-200.jpg",
               "href" : "emn-pap1-900.jpg"
             },
             {
               "src": "emn-pap2-200.jpg",
               "href" : "emn-pap2-900.jpg"
             }
           ]
        },
        {
          "title": "Quality Freight Services",
          "dates": "May 2017",
          "text": "Diseño de papelería comercial, página web y redes sociales.",
          "images" : [
             {
               "src": "qfs-log-200.jpg",
               "href" : "qfs-log-900.jpg"
             },
             {
               "src": "qfs-pap-200.jpg",
               "href" : "qfs-pap-900.jpg"
             },
             {
               "src": "qfs-sm-200.jpg",
               "href" : "qfs-sm-900.jpg"
             },
             {
               "src": "qfs-web1-200.jpg",
               "href" : "qfs-web1-900.jpg"
             },
             {
               "src": "qfs-web2-200.jpg",
               "href" : "qfs-web2-900.jpg"
             }
           ]
        },
        {
          "title": "CMS, Caracas Multisport",
          "dates": "May 2017",
          "text": "Diseño de camisetas y aplicación de logotipo.",
          "images" : [
             {
               "src": "cms-bran1-200.jpg",
               "href" : "cms-bran1-900.jpg"
             },
             {
               "src": "cms-bran2-200.jpg",
               "href" : "cms-bran2-900.jpg"
             },
             {
               "src": "cms-bran3-200.jpg",
               "href" : "cms-bran3-900.jpg"
             }
           ]
        },
        {
          "title": "Unipanda",
          "dates": "May 2017",
          "text": "Diseño de papelería comercial.",
          "images" : [
             {
               "src": "uni-log-200.jpg",
               "href" : "uni-log-900.jpg"
             },
             {
               "src": "uni-pap1-200.jpg",
               "href" : "uni-pap1-900.jpg"
             },
             {
               "src": "uni-pap2-200.jpg",
               "href" : "uni-pap2-900.jpg"
             }
           ]
        },
        {
          "title": "Caracas Design 2015",
          "dates": "May 2015",
          "text": "Diseño web y redes sociales.",
          "images" : [
             {
               "src": "cd-sm-200.jpg",
               "href" : "cd-sm-900.jpg"
             },
             {
               "src": "cd-web1-200.jpg",
               "href" : "cd-web1-900.jpg"
             },
             {
               "src": "cd-web2-200.jpg",
               "href" : "cd-web2-900.jpg"
             },
             {
               "src": "cd-web3-200.jpg",
               "href" : "cd-web3-900.jpg"
             }
           ]
        },
        {
          "title": "Bellychic",
          "dates": "May 2017",
          "text": "Diseño de manual corporativo y covers para redes sociales.",
          "images" : [
             {
               "src": "bc-man1-200.jpg",
               "href" : "bc-man1-900.jpg"
             },
             {
               "src": "bc-man2-200.jpg",
               "href" : "bc-man2-900.jpg"
             },
             {
               "src": "bc-rrss-200.jpg",
               "href" : "bc-rrss-900.jpg"
             }
           ]
        },
        {
          "title": "La Casa del Habano",
          "dates": "May 2017",
          "text": "Diseño de anuncio impreso.",
          "images" : [
             {
               "src": "lcdh-print-200.jpg",
               "href" : "lcdh-print-900.jpg"
             }
           ]
        }
      ]
    },
    {
      "id" : "disenoweb",
      "tabTitle" : "Diseño UI/UX",
      "tabItems" : [
        {
          "title": "Banco del Libro website",
          "dates": "May 2013",
          "text": "Web design, html/css implementation.",
          "url" : "http://galerias.bid-dimad.org/bid_14/?p=4191",
          "images" : [
             {
               "src": "bdl-web1-200.jpg",
               "href" : "bdl-web1-900.jpg"
             },
             {
               "src": "bdl-web2-200.jpg",
               "href" : "bdl-web2-900.jpg"
             },
             {
               "src": "bdl-web4-200.jpg",
               "href" : "bdl-web4-900.jpg"
             },
             {
               "src": "bdl-web4-200.jpg",
               "href" : "bdl-web4-900.jpg"
             }
           ]
        },
        {
          "title": "Novanet website",
          "dates": "Jun 2015",
          "text": "Responsive web design, html/css implementation.",
          "images" : [
            {
              "src": "nn-web1-200.jpg",
              "href" : "nn-web1-900.jpg"
            },
            {
              "src": "nn-web2-200.jpg",
              "href" : "nn-web2-900.jpg"
            },
            {
              "src": "nn-web3-200.jpg",
              "href" : "nn-web3-900.jpg"
            }
          ]
        },
        {
          "title": "Dos Espacios",
          "dates": "May 2013",
          "text": "Diseño e implementación web en plataformas e-commerce.",
          "images" : [
             {
               "src": "de-web1-200.jpg",
               "href" : "de-web1-900.jpg"
             },
             {
               "src": "de-web2-200.jpg",
               "href" : "de-web2-900.jpg"
             },
             {
               "src": "de-web3-200.jpg",
               "href" : "de-web3-900.jpg"
             }
           ]
        }
      ]
    },
    {
      "id" : "logotipos",
      "tabTitle" : "Logotipos",
      "tabItems" : [
        {
          "title": "Escuela de natación Rivas",
          "dates": "Oct 2017",
          "text": "Diseño de identidad gráfica",
          "images" : [
            {
              "src": "edr-log-200.jpg",
              "href" : "edr-log-900.jpg"
            }
          ]
        },
        {
          "title": "Rhinovations. Remodeling Company",
          "dates": "Abr 2018",
          "text": "Diseño de logotipo",
          "images" : [
            {
              "src": "rv-logo-200.jpg",
              "href" : "rv-logo-900.jpg"
            }
          ]
        },
        {
          "title": "Unidad de Gimnasia Correctiva",
          "dates": "Abr 2018",
          "text": "Diseño de marca.",
          "images" : [
            {
              "src": "ugc-logo-200.jpg",
              "href" : "ugc-logo-900.jpg"
            }
          ]
        }
      ]
    }
  ],
  "sectionLink" : "portafolio.html",
}

//Clientes object
const clientes = {
  "sectionTitle" : "Clientes",
  "sectionNavBtn" : [
    {
      "color" : "redbg-3",
      "icon" : "icon ni-chat",
      "href" : "#logotipos"
    },
    {
      "color" : "redbg-2"
    },
    {
      "color" : "redbg-1",
    }
  ],
  "tabs" : [
    {
      "id" : "logos-clientes",
      "tabItems" : [
        {
          "bg" : "bdl"
        },
        {
          "bg" : "cd"
        },
        {
          "bg" : "bs"
        },
        {
          "bg" : "tob"
        },
        {
          "bg" : "cms"
        },
        {
          "bg" : "gp"
        },
        {
          "bg" : "lcdh"
        },
        {
          "bg" : "no"
        },
        {
          "bg" : "per"
        },
        {
          "bg" : "pev"
        },
        {
          "bg" : "qui"
        },
        {
          "bg" : "ss"
        },
        {
          "bg" : "uni"
        },
        {
          "bg" : "bc"
        },
        {
          "bg" : "sh"
        },
        {
          "bg" : "art"
        },
        {
          "bg" : "gm"
        },
        {
          "bg" : "emn"
        },
        {
          "bg" : "gstar"
        },
        {
          "bg" : "kul"
        },
        {
          "bg" : "seg"
        }
      ]
    }
  ]
}

//Contacto object
const contacto = {
  "sectionTitle" : "Contacto",
  "sectionNavBtn" : [
    {
      "color" : "aquabg-1",
      "icon" : "icon ni-message",
      "href" : "#message"
    },
    {
      "color" : "aquabg-2",
      "icon" : "icon ni-pin",
      "href" : "#location"
    },
    {
      "color" : "aquabg-3"
    }
  ],
  "tabs" : [
    {
      "id" : "message",
      "tabTitle" : "¡Queremos conectar contigo!",
      "tabParagraph" : "Juntos desarrollaremos las tácticas para generar las acciones para posicionarte donde quieres estar.",
    },
    {
      "id" : "location",
      "tabTitle" : "¿Dónde estamos ubicados?"
    }
  ]
}
