import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:mb-20 mb-5 px-4 md:px-0">
      <div className="grid md:grid-cols-3 bg-[#07332F] rounded-md text-white md:p-20 p-5">
        <div className="col-span-1 space-y-7 text-center">
          <h3 className="md:text-4xl text-2xl font-bold">Contact With Us</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className="flex space-x-3 items-center">
            <FaPhone></FaPhone>
            <p className="text-sm md:text-[16px]">+88 01750 14 14 14</p>
          </div>
          <div className="flex space-x-3 items-center">
            <FaLocationDot></FaLocationDot>
            <p className="text-sm md:text-[16px]">
              Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="col-span-2 mt-10 md:mt-0">
          <form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
              <input
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
              <input
                type="time"
                placeholder="Time"
                className="input input-bordered w-full max-w-xs bg-opacity-5"
              />
            </div>
            <button className="btn bg-[#F7A582] py-2 px-4 rounded text-white mt-10 w-full border-0">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
