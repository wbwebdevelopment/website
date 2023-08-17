import "./form.css"
import "./reviews.css"
import reviewData from "./reviewData"
import Review from "./Review"
import Carousel from "react-multi-carousel"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FormAndReviews() {

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
                autoPlaySpeed={4000}
                >
                    {ReviewElems}
                </Carousel>
            </div>
        </div>

        <form method="POST" action="https://formsubmit.co/97aca8e29358f1aec86ce3da24c5e17f" id="contactForm">
        <input type="hidden" name="_cc" value="williambojczuk@gmail.com"/>
        <input type="hidden" name="_next" value={`${window.location.href}?messagesuccess=true`}/>
            
            <h2 id="contactFormTitle">Let's Talk!</h2>
            <div className="input-wrapper">
                <img src="./img/icons/person-icon.svg" alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            <div className="input-wrapper">
                <img src="./img/icons/email-icon.svg" alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email"} />
            </div>
            <div className="input-wrapper">
                <img src="./img/icons/phone-icon.svg" alt="Phone Icon" />
                <input required type="text" name="phone" id="phoneInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <textarea maxLength={2000} name="message" id="messageInput" placeholder={"Write me a message..."}></textarea>
            </div>
            <input type="submit" value="Send Now!" />
        </form>
    </section>
    </>
  )
}
