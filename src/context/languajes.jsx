import { createContext, useState, useContext } from "react"

const languajes = {
  ES: {
    header: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
    },
    aboutMe: {
      description: "Soy un desarrollador FRontend uwu",
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
