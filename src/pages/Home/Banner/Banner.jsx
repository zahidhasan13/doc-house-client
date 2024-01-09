import heroImage from "../../../assets/hero-image.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner md:py-20 xl:max-w-screen-2xl xl:mx-auto">
      <div className="md:max-w-screen-xl mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-white md:py-40 pt-20 text-center md:text-left">
            <h2 className="md:text-[75px] text-3xl font-semibold md:leading-[80px]">
              Your Best Medical Help Center
            </h2>
            <p className="text-sm my-4">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <button className="btn bg-[#F7A582] py-2 px-4 rounded text-white">
              All Services
            </button>
          </div>
          <div className="py-10 md:py-0">
            <img src={heroImage} alt="Hero-Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
