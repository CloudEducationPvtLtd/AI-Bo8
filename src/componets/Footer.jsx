import { location, mail, phone } from "../assets"
import { socials } from "../constant"
import Section from "./Section"

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
        {/* <div className="container relative z-2">
            <div className="flex flex-wrap gap-10 mb-10">
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">AI-Bo8</h5>
                <p className="body-2 mb-6 text-n-3">In our digital learning ecosystem, powered by Microsoft & AWS, students and educators unite to unlock new horizons, nurturing profound educational, professional, and social growth</p>
                </div>
            </div>
        </div> */}
{/* ================================================ */}
<div className="p-8">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="mb-8 lg:mb-0">
          <h3 className=" font-bold h3">AI BO8</h3>
          <h5 className="h5 text-n-2">by Cloud Education</h5>
          <p className="mt-4 text-n-3 body-2 md:max-w-[25rem]">
            In our digital learning ecosystem, powered by Microsoft & AWS, students and educators unite to unlock new horizons, nurturing profound educational, professional, and social growth.
          </p>
        </div>
        <div className="mb-8 lg:mb-0 lg:ml-[5rem]">
          <h5 className="h5 font-semibold mb-5">Get In Touch</h5>
          <address className="not-italic mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex">
            <img src={location} alt="location" height={30} width={30}/> <a href="https://www.google.com/maps?q=D-12,B,1st%20Floor,100Ft,Road,New%20Delhi-110074,%20India" className="ml-2">D-12, B, 1st Floor, 100Ft Road, New Delhi-110074</a>
          </address>
          <div>
          <p className="mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex"><img src={mail} alt="mail" height={30} width={30}/><a href="mailto:info@cloudeducation.co.in" className="ml-2"> info@cloudeducation.co.in</a></p>
          </div>
          <p className="mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex"><img src={phone} alt="phone" height={30} width={30}/><a href="tel:+01143634116"> <a href="tel:+01143634116" className="ml-2"></a>011 4363 4116</a></p>
        </div>
        <div className="lg:ml-[5rem]">
          <h5 className="h5 font-semibold">Popular Links</h5>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Home</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">About Us</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Our Services</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Latest Blog</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Feedback Form</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Contact Us</a></li>
            <li><a href="#" className="text-n-3 hover:underline hover:text-n-1">Brochure</a></li>
          </ul>
        </div>
      </div>
    </div>
{/* =================================================== */}

        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-4 lg:block">© Copyright Cloud Education {new Date().getFullYear()}. All Rights Reserved & <a className="hover:underline hover:text-n-1" href="https://aibot.cloudeducation.co.in/pvc_policy.html">Privacy Policy</a></p>
            <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                    <a href={item.url} key={item.id} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                        <img src={item.iconUrl} width={16} height={16} alt={item.title} className=""/>
                    </a>
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer