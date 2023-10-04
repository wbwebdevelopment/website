import "./ourwork.css"
import projectData from "./projectData"
import Project from "./Project"

export default function OurWork() {
    const projectElems = projectData.map((data, i)=>{
        return(
            <Project key={i} {...data} />
        )
    })
  return (
    <section id="ourWork">
        <div id="ourWorkTitleWrapper">
        <h2 id="ourWorkTitle">Some of our work</h2>
        </div>
        <div id="projectsWrapper">
            {projectElems}
        </div>
    </section>
  )
}