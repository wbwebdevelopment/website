import "intl-tel-input/build/css/intlTelInput.min.css"
import "./phonenumber.css"
//@ts-ignore
import intlTelInput from "intl-tel-input"
import { useEffect, useRef } from "react"

export default function PhoneNumber() {

    const inputRef: any = useRef();

    useEffect(()=>{
        intlTelInput(inputRef.current, {
            utilsScript: "../../../node_modules/intl-tel-input/build/js/utils.js"
          })
    }, [])

  return (
    <input  ref={inputRef} required type="tel" name="phone" id="phoneInput" placeholder={"Phone Number"} />
  )
}
