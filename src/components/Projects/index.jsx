import React from "react"
import "../../styles/Projects.css"
import { generateSVG } from "../../utils/GenerateSVG"

export function Projects() {
  const projectsList = [
    {
      name: "Gestor de Gastos",
      langs: ["react", "css"],
      repo: "https://github.com/Laguilavo10/gestor-de-gastos",
      url: "https://laguilavo10.github.io/gestor-de-gastos/",
    },
    {
      name: "Pokedex",
      langs: ["react", "css"],
      repo: "https://github.com/Laguilavo10/pokedex-kanto",
      url: "https://laguilavo10.github.io/pokedex-kanto/",
    },
    {
      name: "Periodic Table",
      langs: ["react", "css"],
      repo: "https://github.com/Laguilavo10/periodic-table/",
      url: "https://laguilavo10.github.io/periodic-table/",
    },
    {
      name: "toDo List",
      langs: ["react", "css"],
      repo: "https://github.com/Laguilavo10/toDo-React",
      url: "https://laguilavo10.github.io/toDo-React/",
    },
    {
      name: "PassWord Generator",
      langs: ["html", "css", "javascript"],
      repo: "https://github.com/Laguilavo10/password-generator",
      url: "https://laguilavo10.github.io/password-generator/",
    },
    {
      name: "Login Instagram",
      langs: ["html", "css"],
      repo: "https://github.com/Laguilavo10/clon-Instagram",
      url: "https://laguilavo10.github.io/clon-Instagram/",
    },
  ]
  generateSVG()
  return (
    <>
      <section className="projects-container">
        <h4>Proyectos</h4>
        <ul className="projects-list">
          {projectsList.map((project, i) => (
            <li key={i} className="projects-list--item">
              <p>{project.name}</p>
              <div className="projects-list--info">
                <img
                  src="https://pbs.twimg.com/media/D6uc2kBX4AAv3xV.jpg"
                  alt=""
                />
                <div className="projects-list--links">
                  <a href={project.repo} target="_blank">
                    <img src={generateSVG('github')} alt="" />
                    Repo
                  </a>
                  <a href={project.url} target="_blank">
                    <img src={generateSVG('url')} alt="" />
                    URL
                  </a>
                </div>
              </div>
              <div className="projects-langs">
                {project.langs.map((lang) => (
                  <span key={lang} className={`tag-lang ${lang}`}>
                    {lang}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
