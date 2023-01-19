import React from "react"
import "../../styles/Projects.css"
import { generateImg } from "../../utils/GenerateImg"
import { projectsList } from "../../utils/projectsList"

export function Projects() {

  return (
    <>
      <section className="projects-container" id="projects">
        <h4>Proyectos</h4>
        <ul className="projects-list">
          {projectsList.map((project, i) => (
            <li key={i} className="projects-list--item">
              <p>{project.name}</p>
              <div className="projects-list--info">
                <img
                  src={generateImg(project.img)}
                  alt=""
                />
                <div className="projects-list--links">
                  <a href={project.repo} target="_blank">
                    <img src={generateImg('github')} alt="" />
                    Repo
                  </a>
                  <a href={project.url} target="_blank">
                    <img src={generateImg('url')} alt="" />
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
