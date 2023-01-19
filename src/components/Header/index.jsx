// import {useContext} from 'react'
import { useLanguaje } from '../../context/languajes'
import '../../styles/Header.css'

export  function Header() {
  const {lang, setLang} = useLanguaje()

  return (
    <header className='header' id='header'>
      <h1>
        {"<Andres Laguilavo/>"}
      </h1>
      <div className='sections-links'>
        <a href='#aboutMe'>{lang.header.link1}</a>
        <a href='#projects'>{lang.header.link2}</a>
        <a href='#contact'>{lang.header.link3}</a>
      </div>
    </header>
  )
}

