import Section from "./Section";
import Button from "./Button";
import Heading from "./Heading";
import { stars } from "../assets"


const ContactForm = () => {
  return (
    <Section  crosses className="flex items-center justify-center">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                <div className="absolute top-1/2 left-1/2 w-[100rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img src={stars} alt="Stars" className="w-full "/>
                </div>
            </div>
      <div className="rounded-lg shadow-lg  max-w-lg">
      <Heading tag="We'd Love to Hear from You" title="Need Assistance? Get in Touch" />
        <form className="space-y-4" action="https://formspree.io/f/xwkdgbbp" method="post">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label><p className="body-2 text-n-2">Name</p></label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter Your Name" name="name"
              />
            </div>
            <div className="flex-1">
            <label><p className="body-2 text-n-2">Email</p></label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter Your Email" name="email"
              />
            </div>
          </div>
          <div>
          <label><p className="body-2 text-n-2">Messagef</p></label>
            <textarea
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
              rows="5"
              placeholder="Enter Your Message" name="message"
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full px-4 py-2 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
