import { createContext, useState, useContext } from "react"

const languajes = {
  ES: {
    header: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
    },
    aboutMe: {
      description:
        "Soy un desarrollador Frontend. Me gusta aprender de manera autodidacta y siempre estoy buscando oportunidades para ampliar mis conocimientos y habilidades. Me interesan especialmente los temas sociales y me gusta contribuir a la solución de problemas a través de la tecnología. Durante mi experiencia, he demostrado ser una persona atenta al detalle, capaz de trabajar en equipo y poseer adaptabilidad a los cambios. Mis habilidades incluyen el manejo de tecnologías como HTML, CSS, JavaScript, GIT y React, y he participado en proyectos personales desarrollando sitios web.",
      cv: "Descargar CV",
    },
  },
}

const LanguajeSite = createContext()

//crea el provider
export const LanguajeProvider = ({ children }) => {
  const [lang, setLang] = useState(languajes["ES"])
  return (
    <LanguajeSite.Provider value={{ lang, setLang }}>
      {children}
    </LanguajeSite.Provider>
  )
}
//funcion para llamar el valor de languajes
export const useLanguaje = () => {
  const { lang, setLang } = useContext(LanguajeSite)
  return { lang, setLang }
}
