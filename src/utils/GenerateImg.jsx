import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import resume from '../assets/resume.svg'
import url from '../assets/url.svg'
import email from '../assets/email.svg'

import pokedex from '../assets/pokedex.jpeg'
import gestorGastos from '../assets/gestorGastos.jpeg'
import toDo from '../assets/toDo.jpeg'
import periodicTable from '../assets/periodicTable.jpeg'
import loginInstagram from '../assets/loginInstagram.jpeg'
import passwordGenerator from '../assets/passwordGenerator.jpeg'
import moviesInfo from '../assets/moviesInfo.jpeg'

import menu from '../assets/menu.svg'
import close from '../assets/close.svg'


let imgs = {
  html,
  css,
  javascript,
  react,
  git,
  linkedin,
  github,
  resume,
  url,
  email,

  pokedex,
  gestorGastos,
  toDo,
  periodicTable,
  loginInstagram,
  passwordGenerator,
  moviesInfo,

  menu,
  close,
}

export const generateImg = (name) => {
  return imgs[name]
}
