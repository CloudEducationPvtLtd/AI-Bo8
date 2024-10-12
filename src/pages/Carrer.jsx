import ButtonGradient from "../assets/svg/ButtonGradient";
import { curve } from "../assets"
import ContactForm from "../componets/ContactForm";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Section from "../componets/Section";
import { career } from "../constant"
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from "../componets/design/Benefits"
import ClipPath from "../assets/svg/ClipPath"


const Carrer = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header /> 
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPadding id="events">
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <h1 className="h1 mb-6">
                Join Us in Shaping the Future of Robotics and AI : {' '}
                    <span className="relative inline-block"> Career <img src={curve} width={624} height={28} alt="Curve" className="absolute top-full left-0 w-full xl:-mt-2"/></span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg-mb-8">Explore Opportunities to Shape the Future of Robotics and AI with a Dynamic and Innovative Team. Join Us in Pushing the Boundaries of Technology and Creating Impactful Solutions for Tomorrows Challenges.</p>
            </div>
        </div>
    <Section id="features" crosses>
        <div className="container relative z-2">
            <div className="flex flex-wrap gap-10 mb-10">
                {career.map((item) => (
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border rounded-xl"  style={{
                        backgroundImage: `url(${item.backgroundUrl})`,
                    }} key={item.id}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{item.title}</h5>
                            <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            <div className="flex items-center mt-auto">
                                <img src={item.iconUrl} width={38} height={38} alt={item.title} />
                                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                                <Arrow />
                            </div>
                        </div>
                        {item.light && <GradientLight />}
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">{item.imageUrl && (<img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover"/>)}</div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div>
        </div>
    </Section>
        </Section>
        <ContactForm />
        <Footer />

      </div>
      <ButtonGradient />
    </>
  );
};

export default Carrer;
