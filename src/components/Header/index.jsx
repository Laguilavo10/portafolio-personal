
import { languajes, useLanguaje } from '../../context/languajes'
import '../../styles/Header.css'

export  function Header() {
  const {lang, setLang} = useLanguaje()
  
  const changeLang = (event)=>{
    setLang(languajes[event.target.value])
  }
  return (
    <header className='header' id='header'>
      <h1>
        {"<Andres Laguilavo/>"}
      </h1>
      <div className='sections-links'>
        <a href='#aboutMe'>{lang.header.link1}</a>
        <a href='#projects'>{lang.header.link2}</a>
        <a href='#contact'>{lang.header.link3}</a>
        <select defaultValue='EN' onChange={changeLang}>
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>
      </div>
    </header>
  )
}

