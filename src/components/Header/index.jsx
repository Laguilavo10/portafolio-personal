import { useState } from "react"
import { languajes, useLanguaje } from "../../context/languajes"
import "../../styles/Header.css"

export function Header() {
  const { lang, setLang } = useLanguaje()

  const [menuOpen, setMenuOpen] = useState(false)

  const changeLang = (event) => {
    setLang(languajes[event.target.value])
  }

  const handleMenu = (menuOpen) => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
    <div className={`opacity-background--${menuOpen}`}></div>
    <header className="header" id="header">
      <h1 className="header-name"></h1> {/*El texto se genera en CSS*/}
      <div className="header-menu--burguer" onClick={() => handleMenu(menuOpen)}>
        <div className={`${menuOpen && "line1"}`}></div>
        <div className={`${menuOpen && "line2"}`}></div>
      </div>
      
      <div className={`sections-links ${!menuOpen && "inactive"}`}>
        <a href="#aboutMe">{lang.header.link1}</a>
        <a href="#projects">{lang.header.link2}</a>
        <a href="#contact">{lang.header.link3}</a>
        <select defaultValue="ES" onChange={changeLang}>
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>
      </div>
    </header>
    </>
  )
}
