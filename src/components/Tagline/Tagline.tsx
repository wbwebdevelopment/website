import "./tagline.css"
import animationData from "./animation.json"
import Lottie from "react-lottie-player/dist/LottiePlayerLight"

export default function Tagline() {
  return (
    <section id="tagline">
        <div id="taglineWrapper">
            <div id="taglineContent">
                <p>If you’re looking to get the most out of an investment in a website for your business. You’ve come to the right place. I will personally see to it that you love your new website</p>

                <p>I know that you will love your new website. I believe it so much that I offer a 30-day no-questions-asked refund if you are not satisfied with your website.</p>

                <a href="#contactBar" id="taglineButton" className="get-in-touch-button">
                    <img src="./img/icons/form-icon.svg" alt="form icon" />
                    <span>Get In Touch!</span>
                </a>
            </div>
            <div id="taglineAnimation">
                <Lottie
                animationData={animationData}
                play={true}
                loop={true}
                />
            </div>
        </div>
    </section>
  )
}
