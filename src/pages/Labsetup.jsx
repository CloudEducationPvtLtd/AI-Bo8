import ButtonGradient from "../assets/svg/ButtonGradient";
import ContactForm from "../componets/ContactForm";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Section from "../componets/Section";
import { labSetup } from "../constant";


const Labsetup = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header /> 
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPadding id="events">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
            {labSetup.map((item, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg flex justify-center">
                <img className="w-full max-w-xs md:max-w-xl" src={item.imageUrl} alt="Sunset in the mountains" />
              </div>
            ))}
          </div>
        </Section>
        <ContactForm />
        <Footer />

      </div>
      <ButtonGradient />
    </>
  );
};

export default Labsetup;

