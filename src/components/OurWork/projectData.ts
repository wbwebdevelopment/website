interface projectType{
    imgSrc: string,
    title: string,
    link: string,
    isDesign: boolean
}

const projectData: projectType[] = [
    {
        title: "SpeedSpray Pressure Washing",
        link: "https://speedspray.github.io/website/",
        imgSrc: "https://i.imgur.com/JPpMYc5.png",
        isDesign: false
    },
    {
        title: "Shine Pressure Washing",
        link: "https://i.imgur.com/jKdWi6l.png",
        imgSrc: "https://i.imgur.com/kwGkc2a.png",
        isDesign: true
    },
    {
        title: "Superior Pressure Washing LLC",
        link: "https://superiorpressurewashing.github.io/newsite",
        imgSrc: "https://i.imgur.com/1AYL0v0.png",
        isDesign: false
    }
    
    
]

export default projectData