import React from 'react'
import logoReact from '../../assets/react.svg'
import '../../styles/Skills.css'

export function Skills() {
  return (
    <>
      <section className='skills-container'>
        <h4>Skills</h4>
        <ul className='skills-list'>
          <li className='skills-list--item'>
            <img src={logoReact} alt="" />
          </li>
          <li className='skills-list--item'>
            <img src={logoReact} alt="" />
          </li>
          <li className='skills-list--item'>
            <img src={logoReact} alt="" />
          </li>
        </ul>
      </section>

    </>
  )
}
