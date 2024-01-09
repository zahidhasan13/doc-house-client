import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import ContactInfo from "./ContactInfo/ContactInfo";
import OurDoctors from "./OurDoctors/OurDoctors";
import OurService from "./OurService/OurService";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <ContactInfo></ContactInfo>
      <Testimonials></Testimonials>
      <OurDoctors></OurDoctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
