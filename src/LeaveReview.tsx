import "./leavereview.css"
import "./components/FormAndReviews/form.css"
import {useState, useRef} from "react"
import gsap from "gsap"

export default function LeaveReview() {
    const [isAnimating, setIsAnimating] = useState(false);
    const isMouseInSubmit = useRef(false);

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
        <div className="center">
            <img src="/img/mainlogo.png" id="reviewLogo" alt="Main Logo" />
        </div>
        <div className="center">
        <form className="leave-review-form" method="POST" action="https://formsubmit.co/97aca8e29358f1aec86ce3da24c5e17f" id="contactForm">
        <input type="hidden" name="_subject" value="New review!" />
        <input type="hidden" name="_cc" value="williambojczuk@gmail.com"/>
        <input type="hidden" name="_next" value={`${window.location.origin}?messagesuccess=true${location.hash}`}/>
            
            <h2 id="contactFormTitle" className="review-form-title">Leave a review!</h2>
            <div className="input-wrapper">
                <img id="formPersonIcon" src="./img/icons/person-icon.svg" alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            <div className="input-wrapper">
                <img className="company-name-icon" id="formEmailIcon" src="./img/icons/person-icon.svg" alt="Email Icon" />
                <input type="text" name="companyName" id="emailInput" placeholder={"Company Name (if applicable)"} />
            </div>
            <div className="input-wrapper">
                <textarea maxLength={2000} name="review" id="messageInput" placeholder={"What do you want to say?"}></textarea>
            </div>
            <div onMouseEnter={submitAnimIn} onMouseLeave={submitAnimOut}>
                <div id="submitButtonShader">
                    <div id="submitButtonPlane"></div>
                </div>
            <input id="submitButton" type="submit" value="Send Now!" />
            </div>
        </form>
        </div>
    </>
  )
}
