import React from "react"
import { generateImg } from "../../utils/GenerateImg"
import "../../styles/Contact.css"
import { useLanguaje } from "../../context/languajes"

export function Contact() {
  const {lang} = useLanguaje()
  
  return (
    <>
      <section className="contact-container" id="contact">
        <h4>{lang.contact.title}</h4>
        <p>{lang.contact.msj}</p>
        <div className="contact-links">
          <a href="mailto:andresfelipelaguilavo@hotmail.com?subject=¡Trabajemos Juntos!">
            <img src={generateImg("email")} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-laguilavo-2a2848205/"
            target="_blank"
          >
            <img src={generateImg("linkedin")} alt="" />
          </a>
        </div>
      </section>
      {/* <a href="mailto:andresfelipelaguilavo@hotmail.com?subject=¡Trabajemos Juntos!">ss</a> */}
    </>
  )
}
