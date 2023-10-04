import "./ourprocess.css"

export default function OurProcess() {
  return (
    <section id="ourProcess">
        <div id="ourProcessTitleWrapper">
        <h2 id="ourProcessTitle">Our Process</h2>
        </div>

      <div id="ourProcessGridWrapper">
      <div id="ourProcessGrid">
        <div id="gridTitle1" className="grid-title">Design</div>
        <div id="gridTitle2" className="grid-title">Development</div>
        <div id="gridTitle3" className="grid-title">Hosting</div>
        <div id="gridTitle4" className="grid-title"></div>

        <div id="gridDesc1" className="grid-desc">This is when we design your site, with colors based on your logo, or a preferred pallet. Mock-ups are created and revised until you find the design that perfectly suits your business.</div>
        <div id="gridDesc2" className="grid-desc">This is where the site is created. We use various modern technologies to ensure the site looks good, is performant, and ranks highly in SEO.</div>
        <div id="gridDesc3" className="grid-desc">Once the site’s development is done and you are happy with your product, we have to get it online! We’ll either use a domain you already own or register a new one, then host it online. This is when we go into the maintenance phase, or the site and all it’s assets are handed over to you if that's what you choose.</div>
      </div>
      </div>
     
    </section>
  )
}
