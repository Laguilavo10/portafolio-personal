import React from "react"
import "../../styles/Skills.css"
import { generateImg } from "../../utils/GenerateImg"

export function Skills() {
  const skills = ["html", "css", "javascript", "react", "git"]

  return (
    <>
      <section className="skills-container">
        <h4 className="title-section">Skills</h4>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li className="skills-list--item" key={skill}>
              <img src={generateImg(skill)} alt={skill} />
              <p>{`${skill[0].toUpperCase()}${skill.substring(1)}`}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
