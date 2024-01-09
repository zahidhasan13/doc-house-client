import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
const ContactInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-20 my-5 px-4 md:px-0">
      <div className="grid md:grid-cols-3 gap-10 text-white">
        <div className="bg-[#07332F] flex justify-center items-center space-x-5 md:px-16 md:py-10 p-5 rounded-lg">
          <div className="md:text-5xl text-3xl">
            <FaClock></FaClock>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-bold">Opening Hours</p>
            <p className="text-xl">Open 9.00 am to 5.00pm Everyday</p>
          </div>
        </div>
        <div className="bg-[#F7A582] flex justify-center items-center space-x-5 md:px-16 md:py-10 p-5 rounded-lg">
          <div className="md:text-5xl text-3xl">
            <FaLocationDot></FaLocationDot>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-bold">Our Locations</p>
            <p className="text-xl">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
          </div>
        </div>
        <div className="bg-[#07332F] flex justify-center items-center space-x-5 md:px-16 md:py-10 p-5 rounded-lg">
          <div className="md:text-5xl text-3xl">
            <FaPhone></FaPhone>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-bold">Contact Us</p>
            <p className="text-xl">
              +88 01750 00 00 00 <br /> +88 01750 00 00 00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
