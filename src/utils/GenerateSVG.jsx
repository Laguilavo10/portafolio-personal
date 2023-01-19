import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import resume from '../assets/resume.svg'
import url from '../assets/url.svg'

let icons = {
  html,
  css,
  javascript,
  react,
  git,
  linkedin,
  github,
  resume,
  url,
}

export const generateSVG = (svgName) => {
  return icons[svgName]
}
