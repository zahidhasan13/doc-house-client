import heroImage from "../../../assets/hero-image.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner md:py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-white py-40">
            <h2 className="text-[75px] font-semibold leading-[80px]">
              Your Best Medical Help Center
            </h2>
            <p className="text-lg my-4">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <button className="btn bg-[#F7A582] py-2 px-4 rounded">
              All Services
            </button>
          </div>
          <div>
            <img src={heroImage} alt="Hero-Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
