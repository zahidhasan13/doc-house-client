import {
  FaCalendar,
  FaDollarSign,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import doctor1 from "../../../assets/doctor-1.png";
import doctor2 from "../../../assets/doctor-2.png";
import doctor3 from "../../../assets/doctoe-3.png";
const OurDoctors = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-20 my-10 px-4 md:px-0">
      <div className="text-center">
        <h2 className="md:text-[40px] text-2xl font-bold">
          Our Expert Doctors
        </h2>
        <p className="md:mx-32 md:my-10 my-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div
        className="grid md:grid-cols-3 grid-cols-1 gap-5
          "
      >
        <div className="p-5 border-2 rounded-lg">
          <img src={doctor1} alt="" className="w-full" />
          <p className="text-2xl font-bold mt-5">Karyen Anderson</p>
          <p className="text-[#6C6B6B] my-2">BTP - Senior Physiotherapist</p>
          <div className="flex items-center text-yellow-500 text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <div className="divider"></div>
          <div className="text-[#6C6B6B] space-y-4 mb-10">
            <div className="flex space-x-3 items-center">
              <FaLocationDot></FaLocationDot>
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available On Mon, 22 December</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaDollarSign></FaDollarSign>
              <p>$15</p>
            </div>
          </div>
          <button className=" btn btn-outline w-full border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
            Appointment
          </button>
        </div>
        <div className="p-5 border-2 rounded-lg">
          <img src={doctor2} alt="" className="w-full" />
          <p className="text-2xl font-bold mt-5">Karyen Anderson</p>
          <p className="text-[#6C6B6B] my-2">BTP - Senior Physiotherapist</p>
          <div className="flex items-center text-yellow-500 text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <div className="divider"></div>
          <div className="text-[#6C6B6B] space-y-4 mb-10">
            <div className="flex space-x-3 items-center">
              <FaLocationDot></FaLocationDot>
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available On Mon, 22 December</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaDollarSign></FaDollarSign>
              <p>$15</p>
            </div>
          </div>
          <button className=" btn btn-outline w-full border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
            Appointment
          </button>
        </div>
        <div className="p-5 border-2 rounded-lg">
          <img src={doctor3} alt="" className="w-full" />
          <p className="text-2xl font-bold mt-5">Karyen Anderson</p>
          <p className="text-[#6C6B6B] my-2">BTP - Senior Physiotherapist</p>
          <div className="flex items-center text-yellow-500 text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <div className="divider"></div>
          <div className="text-[#6C6B6B] space-y-4 mb-10">
            <div className="flex space-x-3 items-center">
              <FaLocationDot></FaLocationDot>
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available On Mon, 22 December</p>
            </div>
            <div className="flex space-x-3 items-center">
              <FaDollarSign></FaDollarSign>
              <p>$15</p>
            </div>
          </div>
          <button className=" btn btn-outline w-full border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
