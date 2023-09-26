import { useEffect, useState } from "react"
import "./contactbar.css"

export default function ContactBar() {
    const [emailText, setEmailText] = useState("contact@wbwebdev.com");
    const [phoneText, setPhoneText] = useState("+1 706-512-1082");
    const [messengerText, setMessengerText] = useState("Click To Chat");
    useEffect(()=>{
        if(window.matchMedia("(max-width: 649px)").matches){
            setEmailText("Tap To Email")
            setMessengerText("Tap To Chat")
            setPhoneText("Tap To Call")
        }
    }, [])

  return (
    <div id="contactBar">
        <a className="contact-bar-item" target="_blank" href="https://m.me/61551476578368">
            <img src="./img/icons/messenger-icon.svg" alt="Contact Bar Icon" />
            <span>{messengerText}</span>
        </a>
        <div className="seperator"></div>
        <a className="contact-bar-item email-link" href="mailto:contact@wbwebdev.com">
            <img src="./img/icons/email-icon-black.svg" alt="Contact Bar Icon" />
            <span>{emailText}</span>
        </a>
        <div className="seperator"></div>
        <a className="contact-bar-item" href="tel:7065121082">
            <img src="./img/icons/phone-icon-black.svg" alt="Contact Bar Icon" className="contact-icon" />
            <span>{phoneText}</span>
        </a>
    </div>
  )
}
