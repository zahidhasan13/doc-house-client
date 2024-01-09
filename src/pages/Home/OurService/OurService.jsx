import serviceImg from "../../../assets/doctor-rect.png";
import ServiceTabs from "../../../components/ServiceTabs";
const OurService = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:mr-3">
          <img src={serviceImg} alt="" className="w-full" />
        </div>
        <div className="space-y-2 md:mr-5 my-4 md:my-0 text-center md:text-left">
          <h3 className="md:text-[40px] text-3xl font-bold">Our Services</h3>
          <p className="text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div>
            <ServiceTabs></ServiceTabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
