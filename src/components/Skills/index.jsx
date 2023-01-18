import React from 'react'
import logoReact from '../../assets/react.svg'
import '../../styles/Skills.css'
import { generateSVG } from '../../utils/Svg'
export function Skills() {


  const skills = ['html', 'css', 'javascript', 'react', 'git']

  return (
    <>
      <section className='skills-container'>
        <h4>skills</h4>
        <ul className='skills-list'>

          {skills.map((skill)=>(
            <li className='skills-list--item' key={skill}>
              <img src={generateSVG(skill)} alt={skill} />
            </li>
          ))}
        </ul>

      </section>

    </>
  )
}
