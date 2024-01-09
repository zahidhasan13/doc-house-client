import footerLogo from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <div className="bg-[#F3F3F3] py-10 xl:max-w-screen-2xl xl:mx-auto px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <div className="space-y-5 justify-self-center text-center md:text-left">
            <img src={footerLogo} alt="Footer Logo" />
            <p className="text-[#3B3A3A]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been since the printer took.
            </p>
            <button className=" btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-0">
              Appointment
            </button>
          </div>
          <div className="justify-self-center">
            <h4 className="text-2xl font-bold text-black mb-5">Quick Links</h4>
            <ul className="text-black space-y-3 md:text-left text-center">
              <li>About Us</li>
              <li>Service</li>
              <li>Doctors</li>
              <li>Departments</li>
              <li>Online Payment</li>
              <li>Contact Us</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className="justify-self-center">
            <h4 className="text-2xl font-bold text-black mb-5">
              Doc House Services
            </h4>
            <ul className="text-black space-y-3 md:text-left text-center">
              <li>Pediatric Clinic</li>
              <li>Diagnosis Clinic</li>
              <li>Cardiac Clinic</li>
              <li>Laboratory Analysis</li>
              <li>Gynecological Clinic</li>
              <li>Personal Counseling</li>
              <li>Dental Clinic</li>
            </ul>
          </div>
          <div className="justify-self-center">
            <h4 className="text-2xl font-bold text-black mb-5">
              Working Hours
            </h4>
            <ul className="text-black space-y-3 md:text-left text-center">
              <li>Monday - 10 am to 7 pm</li>
              <li>Tuesday - 10 am to 7 pm</li>
              <li>Wednesday - 10 am to 7 pm</li>
              <li>Thursday - 10 am to 7 pm</li>
              <li>Friday - 10 am to 7 pm</li>
              <li>Saturday - 10 am to 7 pm</li>
              <li>Sunday - 10 am to 7 pm</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-center text-lg text-[#6C6B6B]">
          <p>Copyright © 2024 - All right reserved by Doc House Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
