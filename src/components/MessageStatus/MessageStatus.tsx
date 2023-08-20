import "./messagestatus.css"
import { useEffect, useState, useRef } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import successAnim from "./success-anim.json"

export default function MessageStatus() {

    const wrapperRef:any = useRef();
    const [messageSuccess, setMessageSuccess] = useState("none");
    const [messageStatusStyles, setMessageStatusStyles] = useState({opacity: 1, display: "flex"});

    function removeAnim(){
        setMessageStatusStyles((old)=>{return{...old, opacity: 0}});
    }

    useEffect(()=>{
        let getParams = new URLSearchParams(window.location.search);
        if(getParams.has("messagesuccess")){
            const newURL = location.origin + location.hash;
            window.history.replaceState({id: 999}, "Page", newURL);

            if(getParams.get("messagesuccess") == "true"){
                setMessageSuccess("success");
            }
        }
    }, [])
    
    if(messageSuccess == "success"){
        
        return (
            <div
            ref={wrapperRef}
            style={messageStatusStyles}
            id="messageStatusWrapper"
            onTransitionEnd={()=>{setMessageStatusStyles((old)=>{return{...old, display: "none"}});}}
            >
                <div id="messageStatusAnim">
                    <Lottie 
                    animationData={successAnim}
                    play={true}
                    loop={false}
                    onComplete={removeAnim}
                    />
                </div>
            </div>
          )
    }else{
        return <></>
    }
  
}
