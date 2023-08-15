import gsap from "gsap"
import "./header.css"
import Point from "./Point"
import { useEffect } from "react"


export default function Header() {

  useEffect(()=>{
    const tl = gsap.timeline();
    tl.to(".point img",{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.3

    })
    const tl2 = gsap.timeline();
    tl2.to(".point span",{
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.3

    })
  }, [])
  

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
