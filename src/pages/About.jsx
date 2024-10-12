import ButtonGradient from "../assets/svg/ButtonGradient";
import ContactForm from "../componets/ContactForm";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Section from "../componets/Section"
import { curve } from "../assets"
import { service1, service2,service3,check } from "../assets"
import { aboutServices, brainwaveServicesIcons} from "../constant"
import Generating from "../componets/design/Generating"
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "../componets/design/Services"
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header /> 
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPadding id="events">
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <h1 className="h1 mb-6">
                    Pioneering the Future of Robotics, AI, and ML : {' '}
                    <span className="relative inline-block"> About <img src={curve} width={624} height={28} alt="Curve" className="absolute top-full left-0 w-full xl:-mt-2"/></span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg-mb-8">Innovating the future with cutting-edge robotics, AI, and ML solutions. Our expertise drives advancements, transforming industries and enhancing lives through intelligent automation and state-of-the-art technology.</p>
            </div>
        </div>
        <div className="container ">
            <div className="relative">
                <Link to="/aboutus">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8b border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                    <img className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Smartest AI" />
                </div>
                <div className="relative z-1 max-w-[17rem] ml-auto">
                    <h4 className="h4 mb-4">About Us</h4>
                    <p className="body-2 mb-[3rem] text-n-3">Unlock AI Bo8 potential for smarter, engaging, efficient AI events.</p>
                    <ul className="body-2">
                        {aboutServices.map((item, index) => (
                            <li key={index} className="flex items-start py-4 border-t border-n-6">
                                <img src={check} height={24} width={24} alt="" />
                                <p className="ml-4">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Generating className='absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2  lg:bottom-8 lg:-translate-x-1/2' text="Click Here to Know More...."/>
                </div>
                </Link>
                <div className="relative grid z-1 gap-5 lg:grid-cols-2">
                    <Link to="/labsetup">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={service2} className="h-full w-full object-cover" height={750} width={630} alt="robot" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <h4 className="h4 mb-4">Lab Setup</h4>
                    <p className="body-2 mb-[3rem] text-n-3">AI Bo8 unloack the potential of AI powered Labs</p>
                    </div>
                    <PhotoChatMessage text="Hey Brainwave, enhance this photo"/>
                    </div>
                    </Link>

                   <Link to="/brochure">
                   <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h[46rem]">
                        <div className="py-2 px-4 xl:px-8"></div>
                        <h4 className="h4 mb-4">Brochure</h4>
                        <p className="body-2 mb-[2rem] text-n-3">Our company specializes in setting up state-of-the-art labs for AI, ML, Robotics, IoT, Coding, and Drones, providing innovative solutions to empower cutting-edge learning and research environments.</p>
                        <ul className="flex items-center justify-between mb-[2rem]">
                            {brainwaveServicesIcons.map((item, index) => (
                                <li key={index} className={`flex justify-center rounded-2xl items-center ${index === 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]' : 'flex w-10 h-10 bg-n-6 md:h-15 md:w-15'}`}>
                                    <div className={index === 2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : ""}>
                                        <img src={item} alt={item} height={24} width={24} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                        <img src={service3} alt="Scary Robot" className="w-full h-full object-cover" width={520} height={400}/>
                        <VideoChatMessage text="Hey Brainwave, enhance this pho"/>
                        <VideoBar />
                    </div>
                    </div>
                   </Link>
                </div>
                <Gradient />
            </div>
        </div>

    </Section>
        <ContactForm />
        <Footer />

      </div>
      <ButtonGradient />
    </>
  );
};

export default About;
