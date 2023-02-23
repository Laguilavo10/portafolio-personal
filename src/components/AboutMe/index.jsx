import React from "react"
import { useLanguaje } from "../../context/languajes"
import { generateImg } from "../../utils/GenerateImg"
import avatar from '../../assets/AR-removebg-preview.png'

import "../../styles/AboutMe.css"


export function AboutMe() {
  const { lang } = useLanguaje()
  return (
    <>
      <section className="about-me" id="aboutMe">
        <div className="about-me--info">
          <h1>Frontend <br /> Developer</h1>
          <p>{lang.aboutMe.description}</p>
          <div className="about-me--redirects">
            <a href="https://drive.google.com/file/d/1VOtnGhdWROxqm6nhvWqHwZxDuBwpRNC4/view?usp=share_link"  className="about-me--links" target="_blank">
              <p>Resume</p>
              <img src={generateImg('resume')} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/andres-laguilavo-2a2848205/" className="about-me--links" target='_blank'>
              <p>LinkedIn</p>
              <img src={generateImg('linkedin')} alt="" />
            </a>
            <a href="https://github.com/Laguilavo10" className="about-me--links" target='_blank'>
              <p>GitHub</p>
              <img src={generateImg('github')} alt="" />
            </a>
          </div>
        </div>
        <div className="about-me--img">
          <img
            src={avatar}
            // typeof="png"
            // src={sinfondo}
            alt=""
          />
        </div>
      </section>
    </>
  )
}
