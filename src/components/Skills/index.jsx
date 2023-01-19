import React from "react";
import "../../styles/Skills.css";
import { generateSVG } from "../../utils/GenerateSVG";

export function Skills() {
  const skills = ["html", "css", "javascript", "react", "git"];

  return (
    <>
      <section className="skills-container">
        <h4>skills</h4>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li className="skills-list--item" key={skill}>
              <img src={generateSVG(skill)} alt={skill} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
