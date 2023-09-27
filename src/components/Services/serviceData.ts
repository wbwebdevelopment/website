interface serviceType {
    title: string,
    desc: string,
    cardColor: string,
    iconSrc: string,
    price: string | number,

}

const serviceData: serviceType[] = [
    {
        title: "Full Website Package",
        desc: `Let us build and manage your website so you never even have to touch it. With unlimited revisions, domain registration, hosting configuration, error handling and more.

Available at an affordable monthly subscription.`,
        
        cardColor: "#FF6767",
        iconSrc: "/img/icons/maintenance-icon.svg",
        price: "80/m",
    },
    {
        title: "Website Design / Development",
        desc: `We will work with you to create the website you want, and then hand the assets over to you.
        
We do offer domain registration, hosting configuration, maintenance, and other services. Contact us so we can get something that suits your needs perfectly`,
        cardColor: "#67D1FF",
        iconSrc: "/img/icons/computer-icon.svg",
        price: "400",
    },
    {
        title: "Custom Code or Debugging",
        desc: `If you need a custom script made or debugged. We can get you exactly what you need at a very competitive price.

Languages supported are: NextJS, ReactJS, JavaScript, TypeScript, PHP, NodeJS, ExpressJS, CSS, HTML`,
        cardColor: "#FF9E67",
        iconSrc: "/img/icons/code-icon.svg",
        price: 20,
    }
]

export default serviceData