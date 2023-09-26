import Header from "./components/Header/Header"
import FormAndReviews from "./components/FormAndReviews/FormAndReviews"
import OurProcess from "./components/OurProcess/OurProcess"
import OurWork from "./components/OurWork/OurWork"
import WeDo from "./components/WeDo/WeDo"
import Tagline from "./components/Tagline/Tagline"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import ContactBar from "./components/ContactBar/ContactBar"

export default function App() {
  return (
    <>
      <Header />
      <ContactBar />
      <FormAndReviews />
      <Services />
      <OurProcess />
      <OurWork />
      <WeDo />
      <Tagline />
      <Footer />
    </>
  )
}
