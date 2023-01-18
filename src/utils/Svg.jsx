import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'

let icons = {
  html,
  css,
  javascript,
  react,
  git,
}

export const generateSVG = (svgName)=>{
  return icons[svgName]
}