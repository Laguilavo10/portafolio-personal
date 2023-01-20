import { createContext, useState, useContext } from "react"
import { Contact } from "../components/Contact"

export const languajes = {
  ES: {
    header: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
    },
    aboutMe: {
      description: "Entusiasta desarrollador Junior de las tecnologias Frontend. Con habilidades para trabajar en equipo y aprender rápidamente, buscando unirme a una empresa para desarrollar mis habilidades y contribuir al éxito del equipo.",
      cv: "Descargar CV",
    },
    projects:{
      project1:"Gestor de Gastos",
      project2:"Pokedex",
      project3:"Tabla Periodica",
      project4:"ToDO List",
      project5:"Generador de Contraseñas",
      project6:"Login Instagram",
    },
    contact:{
      title:"Contacto",
      msj:"uwu",
    }
  },
  EN: {
    header: {
      link1: "Home",
      link2: "Projects",
      link3: "Contact",
    },
    aboutMe: {
      description: "Enthusiastic Junior developer with Frontend technologies. With skills to work in a team and learn quickly, looking to join a company to develop my skills and contribute to the success of the team.",
      cv: "Descargar CV",
    },
    projects:{
      project1:"Expense Manager",
      project2:"Pokedex",
      project3:"Periodic Table",
      project4:"ToDO List",
      project5:"Password Generator",
      project6:"Login Instagram",
    },
    contact:{
      title:"Contact Me",
      msj:"uwu",
    }
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
