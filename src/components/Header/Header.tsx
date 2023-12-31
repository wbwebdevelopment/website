import gsap from "gsap"
import "./header.css"
import Point from "./Point"
import { useEffect } from "react"
import LeaveReviewButton from "../LeaveReviewButton/LeaveReviewButton"


export default function Header() {

  useEffect(()=>{

    setTimeout(()=>{
      const tl = gsap.timeline();
      tl.to("#mainTagline span:nth-child(1)",{
        "--clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        ease: "power1.in"
      })
      tl.to(".point img",{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.3
  
      })
      tl.to(".point span",{
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.3
  
      }, "<")
    }, 500)
    
  }, [])
  

  return (
    <header>
      <div id="logoWrapper">
        <img id="mainLogo" src="./img/mainlogo.png"/>
        <LeaveReviewButton google="https://g.page/r/Cd7IQM3jc37ZEBM/review" facebook="https://www.facebook.com/profile.php?id=61551476578368" />
      </div>
      <a href="tel:+17065121082" className="text-call-button">Text or Call: +1 706-512-1082</a>

      <h1 id="mainTagline"><span>Convert</span> <span>your</span> <span>business!</span></h1>
      
      <h3 id="secondTagline">Propel Your business to new heights with the help of our custom-made websites. Get a Free Quote and Let's Transform Your Online Presence Today!</h3>
      <a href="#contactBar" id="contactButton">Get a free quote!</a>


      <div id="pointsWrapper">
        <Point title="Build trust with your customers" />
        <Point title="Get More Leads" />
        <Point title="Book More Jobs" />
        <Point title="Optimized for SEO" />
      </div>

    <div id="headerBg"></div>
    </header>
  )
}
