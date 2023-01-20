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
      description: "Entusiasta desarrollador Junior con habilidades en HTML, CSS, JavaScript y el framework React. Con habilidades para trabajar en equipo y aprender rápidamente, buscando unirme a una empresa en crecimiento para desarrollar mis habilidades y contribuir al éxito del equipo.",
      cv: "Descargar CV",
    },
    projects:{
      project1:"Gestor de Gastos",
      project1:"Pokedex",
      project1:"Tabla Periodica",
      project1:"ToDO List",
      project1:"Generador de Contraseñas",
      project1:"Login Instagram",
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
      description: "Enthusiastic Junior developer with skills in HTML, CSS, JavaScript and the React framework. With teamwork skills and a quick learner, looking to join a growing company to develop my skills and contribute to the success of the team.",
      cv: "Descargar CV",
    },
    projects:{
      project1:"Expense Manager",
      project1:"Pokedex",
      project1:"Periodic Table",
      project1:"ToDO List",
      project1:"Password Generator",
      project1:"Login Instagram",
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
