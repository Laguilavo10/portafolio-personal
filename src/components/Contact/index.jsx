import React from "react"
import { generateImg } from "../../utils/GenerateImg"
import "../../styles/Contact.css"

export function Contact() {
  return (
    <>
      <section className="contact-container">
        <h4>Contact Me</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aut
          omnis quo neque eum debitis exercitationem asperiores perferendis,
          illum, ipsum voluptas ea doloremque numquam quod accusantium
          consequuntur sit dolorem laboriosam!
        </p>
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
