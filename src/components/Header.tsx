import "./header.css"
import animationData from "./in_building_anim.json"
import Lottie from "react-lottie-player/dist/LottiePlayerLight"

export default function Header() {
  return (
    <header>
        <img id="mainLogo" src="./img/mainlogo.png"/>
        <h1 id="inBuildingTitle">New Site In Building!</h1>
        <div id="inBuildingAnim">
            <Lottie
            animationData={animationData}
            play={true}
            loop={true}
            >
            </Lottie>
        </div>
    </header>
  )
}
