import {service2,service3,check } from "../assets"
import { aibotCollaboration, brainwaveServicesIcons} from "../constant"
import Heading from "./Heading"
import Partnership from "./Lottie/Component/Partnership"
import Section from "./Section"
import Generating from "./design/Generating"
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services"

const Services = () => {
  return (
    <Section id="how-to-use">
        <div className="container ">
            <Heading title="Generative AI made for Creater." text="AI Bo8 unloack the potential of AI powered Application with"/>
            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8b border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                {/* <div className="absolute  w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                    {/* <img className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Smartest AI" /> */}
                    {/* <Partnership />
                </div> */}
                <div className="hidden sm:flex absolute w-full h-full pointer-events-none justify-center items-center md:w-3/5 xl:w-auto xl:ml-40">
                    {/* <img className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Smartest AI" /> */}
                     <Partnership />
                </div>
                <div className="relative z-1 max-w-[17rem] ml-auto">
                    <h4 className="h4 mb-4">Authorized Partner</h4>
                    <p className="body-2 mb-[3rem] text-n-3">We have official authorization as an education partner with</p>
                    <ul className="body-2">
                        {aibotCollaboration.map((item, index) => (
                            <li key={index} className="flex items-start py-4 border-t border-n-6">
                                <img src={check} height={24} width={24} alt="" />
                                <p className="ml-4">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Generating className='absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2  lg:bottom-8 lg:-translate-x-1/2' text="Start Working With Our Partners"/>
                </div>
                <div className="relative grid z-1 gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={service2} className="h-full w-full object-cover" height={750} width={630} alt="robot" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <h4 className="h4 mb-4">AI-Based Robotics</h4>
                    <p className="body-2 mb-[3rem] text-n-3">AI-BO8 is the Sound of the Future, and we want to make it a Melody for our Young Minds.</p>
                    </div>
                    {/* <PhotoChatMessage text="For More Information Connect Us! 🤖"/> */}
                    </div>

                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h[46rem]">
                        <div className="py-2 px-4 xl:px-8"></div>
                        <h4 className="h4 mb-4">Agenda of Ai-Bo8</h4>
                        <p className="body-2 mb-[2rem] text-n-3">Our Agenda is to convert Imagination into Reality with the help of Hands on Activities And Our “AI-BO8” started hands on Activities for Students and getting them ready for their Future.</p>
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
                        {/* <VideoChatMessage text="For More Information Connect Us! 🤖"/> */}
                        <VideoBar />
                    </div>
                    </div>
                </div>
                <Gradient />
            </div>
        </div>

    </Section>
    
  )
}

export default Services