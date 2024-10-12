import { brochure9, brochure10, brochure11,brochure13, brochure14 } from "../assets";
import ButtonGradient from "../assets/svg/ButtonGradient";
import ContactForm from "../componets/ContactForm";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import Section from "../componets/Section";


const Labsetup = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header /> 
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPadding id="events">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={brochure9}
        alt="Sunset in the mountains"
      />
      {/* <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={brochure10}
        alt="Sunset in the mountains"
      />
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={brochure11}
        alt="Sunset in the mountains"
      />
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={brochure13}
        alt="Sunset in the mountains"
      />
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={brochure14}
        alt="Sunset in the mountains"
      />
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

