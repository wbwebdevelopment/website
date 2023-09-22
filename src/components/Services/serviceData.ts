interface serviceType {
    title: string,
    desc: string,
    cardColor: string,
    iconSrc: string,
    price: string | number,

}

const serviceData: serviceType[] = [
    {
        title: "Website Design / Development",
        desc: `We will work with you to create the website you want. We will design, develop and get your website online so you can focus on other tasks.

We offer one-time invoices as well as subscription based plans that include maintenance`,
        cardColor: "#FF6767",
        iconSrc: "/img/icons/computer-icon.svg",
        price: 400,
    },
   
    {
        title: "Website Maintenance",
        desc: `Hire us to maintain your website. With unlimited revisions, domain handling, hosting configuration, error handling and more.

Available at an affordable monthly subscription.`,
        cardColor: "#67D1FF",
        iconSrc: "/img/icons/maintenance-icon.svg",
        price: "60/m",
    },
    {
        title: "Custom Scripts or Debugging",
        desc: `If you need a custom script made or debugged. We can get you exactly what you need at a very competitive price.

Languages supported are: NextJS, ReactJS, JavaScript, TypeScript, PHP, NodeJS, ExpressJS, CSS, HTML`,
        cardColor: "#FF9E67",
        iconSrc: "/img/icons/code-icon.svg",
        price: 20,
    }
]

export default serviceData