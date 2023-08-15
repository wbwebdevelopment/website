import "./header.css"
import Point from "./Point"


export default function Header() {
  return (
    <header>
      <div id="logoWrapper">
        <img id="mainLogo" src="./img/mainlogo.png"/>
        <a href="#contactFormTitle" id="getInTouch" className="get-in-touch-button">
          <img src="./img/icons/form-icon.svg" alt="form icon" />
          <span>Get In Touch!</span>
          </a>
      </div>

      <h1 id="mainTagline"><span>Upgrade</span> your business!</h1>
      
      <h3 id="secondTagline">Helping businesses strengthen their online presence and branding with modern technology.</h3>

      <div id="pointsWrapper">
        <Point title="Built with modern technologies" />
        <Point title="Build trust with your customers" />
        <Point title="Look as legitimate as possible" />
        <Point title="Optimized for SEO" />
      </div>

    <div id="headerBg"></div>
    </header>
  )
}
