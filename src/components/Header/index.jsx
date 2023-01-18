// import {useContext} from 'react'
import { useLanguaje } from '../../context/languajes'
import '../../styles/Header.css'

export  function Header() {
  const {lang, setLang} = useLanguaje()

  return (
    <header className='header'>
      <h1>
        Andres Laguilavo
      </h1>
      <ul className='sections-links'>
        <li>{lang.header.link1}</li>
        {/* <li>Sobre Mi</li> */}
        <li>{lang.header.link2}</li>
        <li>{lang.header.link3}</li>
      </ul>
    </header>
  )
}

