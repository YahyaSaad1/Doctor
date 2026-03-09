import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router"

export default function Footer(){
    const footerLinks=[
        {title: 'Explore',
        links: [
            {name: "Home", path: "/"},
            { name: "Surgery", path: "/surgery" },
            { name: "OPD", path: "/opd" },
            { name: "Speciality", path: "/speciality" },
            { name: "Consultation", path: "/consultation" }]
        },
        {title: 'About Us',
        links: [
            { name: "Who we are", path: "/about" },
            { name: "Our Vision", path: "/vision" },
            { name: "Our Team", path: "/team" },
            { name: "Terms & Conditions", path: "/terms" },
            { name: "FAQs", path: "/faqs" },]
        },
    ]
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-footer-color text-white">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">MuhirisDoctor</h3>
                    <Link to={'/#'} className="flex flex-col font-semibold text-p-color hover:text-btn-color duration-200">The ultimate destination for all of your medical needs</Link>
                    <div className="flex gap-2 mt-4">
                        <a href={'https://www.facebook.com/yahyasaad24'} target="_blank" className="w-10 h-10 p-3 flex justify-center items-center rounded-full bg-[#183b5c] hover:bg-text-color duration-200 hover:scale-105">
                            <FontAwesomeIcon size={'lg'} icon={faFacebookF} />
                        </a>
                        <a href="mailto:yahyasaad2040@gmail.com" className="w-10 h-10 p-3 flex justify-center items-center rounded-full bg-[#183b5c] hover:bg-text-color duration-200 hover:scale-105">
                            <FontAwesomeIcon size={'lg'} icon={faEnvelope} />
                        </a>
                        <a href="https://wa.me/201127471188" target="_blank" className="w-10 h-10 p-3 flex justify-center items-center rounded-full bg-[#183b5c] hover:bg-text-color duration-200 hover:scale-105">
                            <FontAwesomeIcon size={'lg'} icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
                {footerLinks.map((item)=>{
                    return(
                        <div key={item.title} className="flex flex-col gap-2">
                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            {item.links.map((link)=>{
                                return(
                                    <Link to={link.path} key={link.path} className="hover:scale-105 flex flex-col font-semibold text-p-color hover:text-btn-color duration-200">{link.name}</Link>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">Contact</h3>
                    <a href="tel:+201127471188" className="hover:scale-105 flex flex-col font-semibold text-p-color hover:text-btn-color duration-200">+201127471188</a>
                    <a href="mailto:yahyasaad2040@gmail.com" className="hover:scale-105 flex flex-col font-semibold text-p-color hover:text-btn-color duration-200">yahyasaad2040@gmail.com</a>
                    <Link to={'/#'} className="hover:scale-105 flex flex-col font-semibold text-p-color hover:text-btn-color duration-200">Glassplace, Near Cool Avenue, Boson</Link>
                </div>
            </div>
            <div className="text-center p-4 bg-[#183b5c] text-white">
                <span>yahyasaad2040@gmail.com</span>
            </div>
        </>
    )
}