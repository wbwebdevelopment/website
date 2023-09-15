import "./services.css"
import Carousel from "react-multi-carousel"
import serviceData from "./serviceData";
import Service from "./Service";

export default function Services() {


    const serviceElems = serviceData.map((data, i)=>{
        return <Service key={i} {...data} />
    })

    const responsive = { desktop: {
        breakpoint: { max: 6000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }};

  return (
    <section id="servicesSection">
        <h2>Services we offer</h2>
        <div id="sectionsCarouselWrapper">
            <Carousel
            autoPlay={false}
            
            responsive={responsive}
            >
                {serviceElems}
            </Carousel>
        </div>
    </section>
  )
}
