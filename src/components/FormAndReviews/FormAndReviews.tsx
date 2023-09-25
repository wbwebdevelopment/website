import "./form.css"
import "./reviews.css"
import "./PhoneNumber/PhoneNumber"
import { useEffect, useRef, useState } from "react"
import reviewData from "./reviewData"
import Review from "./Review"
import Carousel from "react-multi-carousel"
import gsap from "gsap"
import MessageStatus from "../MessageStatus/MessageStatus"
import PhoneNumber from "./PhoneNumber/PhoneNumber"

export default function FormAndReviews() {

    const [isAnimating, setIsAnimating] = useState(false);
    const isMouseInSubmit = useRef(false);

    const responsive = {
        desktop: {
          breakpoint: { max: 6000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }


    const ReviewElems = reviewData.map((data, i)=>{
       return <Review key={i} {...data} />
    });

    const tl = useRef(gsap.timeline({defaults: {duration: 0.6, ease: "power1.in"}}));

function shouldIPause(){
    if(isMouseInSubmit.current){
        tl.current.pause();
    }
}


    function submitAnimIn(){

        isMouseInSubmit.current = true;

        if(!isAnimating){
            
            setIsAnimating(true);
            tl.current.fromTo("#submitButtonPlane", {
                right: "100%"
            },{
                right: "40%",
                onComplete: shouldIPause
            }).fromTo("#submitButtonShader", {
                opacity: 0
            },{
                opacity: 1,
                duration: 0.25
            }, "<")
            
            tl.current.to("#submitButtonPlane", {
                right: "-20%",
                duration: 0.3,
                ease: "power1.in"
            })
            .to("#submitButtonShader", {
                opacity: 0,
                duration: 0.25,
                onComplete: ()=>{tl.current.clear(); setIsAnimating(false);}
            }, "<")
        }
    }

    function submitAnimOut(){
        isMouseInSubmit.current = false;
     
            tl.current.resume();
        
    }


  return (
    <>
    <MessageStatus />
    <section id="formAndReviews">
 
        <div id="reviewsWrapper">
            <h2 id="reviewsTitle">What People Say</h2>
            <div id="reviewsContainer">
            <Carousel
                responsive={responsive}
                arrows={false}
                centerMode={true}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={6000}
                >
                    {ReviewElems}
                </Carousel>
            </div>
        </div>

        <form method="POST" action="https://formsubmit.co/97aca8e29358f1aec86ce3da24c5e17f" id="contactForm">
        <input type="hidden" name="_cc" value="williambojczuk@gmail.com"/>
        <input type="hidden" name="_next" value={`${window.location.origin}?messagesuccess=true${location.hash}`}/>
        <input type="hidden" name="_captcha" value="false"/>
            
            <h2 id="contactFormTitle">Let's Talk!</h2>
            <div className="input-wrapper">
                <img id="formPersonIcon" src="./img/icons/person-icon.svg" alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            <div className="input-wrapper">
                <img id="formEmailIcon" src="./img/icons/email-icon.svg" alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email"} />
            </div>
            <div className="input-wrapper">
                    <PhoneNumber />
            </div>
            <div className="input-wrapper">
                <textarea maxLength={2000} name="message" id="messageInput" placeholder={"Write me a message..."}></textarea>
            </div>
            <div onMouseEnter={submitAnimIn} onMouseLeave={submitAnimOut}>
                <div id="submitButtonShader">
                    <div id="submitButtonPlane"></div>
                </div>
            <input id="submitButton" type="submit" value="Send Now!" />
            </div>
        </form>
    </section>
    </>
  )
}
