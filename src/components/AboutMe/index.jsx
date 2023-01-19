import React from "react"
import { useLanguaje } from "../../context/languajes"
import { generateSVG } from "../../utils/GenerateSVG"
import "../../styles/AboutMe.css"

export function AboutMe() {
  const { lang } = useLanguaje()
  
  return (
    <>
      <section className="about-me">
        <div className="about-me--info">
          <h2>Frontend Developer</h2>
          <p>{lang.aboutMe.description}</p>
          <div className="about-me--redirects">
            <a href="#" className="about-me--links" target='_blank'>
              <p>Resume</p>
              <img src={generateSVG('resume')} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/andres-laguilavo-2a2848205/" className="about-me--links" target='_blank'>
              <p>LinkedIn</p>
              <img src={generateSVG('linkedin')} alt="" />
            </a>
            <a href="https://github.com/Laguilavo10" className="about-me--links" target='_blank'>
              <p>GitHub</p>
              <img src={generateSVG('github')} alt="" />
            </a>
          </div>
        </div>
        <div className="about-me--img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oFkWne5n1cGvJqDwTu7L2IVjke1icnpwmWng_vk&s"
            alt=""
          />
        </div>
      </section>
    </>
  )
}
