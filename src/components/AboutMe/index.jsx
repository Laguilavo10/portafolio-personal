import React from "react";
import { useLanguaje } from "../../context/languajes";
import '../../styles/AboutMe.css'


export function AboutMe() {

  const {lang} = useLanguaje()
  
  return (
    <>
      <section className="about-me">
        <div className="about-me--info">
          <h2>Frontend Developer</h2>
          <p>{lang.aboutMe.description}</p>
          <button>{lang.aboutMe.cv}</button>
        </div>
        <div className="about-me--img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oFkWne5n1cGvJqDwTu7L2IVjke1icnpwmWng_vk&s" alt="" />
        </div>
      </section>
    </>
  );
}
