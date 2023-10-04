import Header from "./components/Header/Header"
import FormAndReviews from "./components/FormAndReviews/FormAndReviews"
import OurProcess from "./components/OurProcess/OurProcess"
import OurWork from "./components/OurWork/OurWork"
import WeDo from "./components/WeDo/WeDo"
import Tagline from "./components/Tagline/Tagline"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import ContactBar from "./components/ContactBar/ContactBar"
import { useEffect } from "react"

export default function App() {

  useEffect(()=>{
    const {hash} = location
    if(hash != ""){
      const targetElem = document.querySelector(hash)
      if(targetElem){
        setTimeout(()=>{
          targetElem.scrollIntoView()
        }, 100) 
      }
    }
  }, [])

  return (
    <>
      <Header />
      <ContactBar />
      <FormAndReviews />
      <Services />
      
      <OurWork />
      <OurProcess />
      <WeDo />
      <Tagline />
      <Footer />
    </>
  )
}
