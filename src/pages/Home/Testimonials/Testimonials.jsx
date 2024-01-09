import { Swiper, SwiperSlide } from "swiper/react";
import review1 from "../../../assets/review-1.png";
import qoute from "../../../assets/qoute.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <div className="text-center">
        <h2 className="md:text-[40px] text-2xl font-bold">
          What Our Patients Says
        </h2>
        <p className="md:mx-32 md:my-10 my-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-2 md:p-10 p-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <img src={review1} alt="" />
                <div>
                  <p className="text-xl font-bold">Awlad Hossain</p>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={qoute} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknow printer tool a galley of type
                and scrambled it to make type specimen book has survived not
                only five centurines.
              </p>
            </div>
            <div className="md:hidden block mt-5">
              <img src={qoute} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 md:p-10 p-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <img src={review1} alt="" />
                <div>
                  <p className="text-xl font-bold">Awlad Hossain</p>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={qoute} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknow printer tool a galley of type
                and scrambled it to make type specimen book has survived not
                only five centurines.
              </p>
            </div>
            <div className="md:hidden block mt-5">
              <img src={qoute} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 md:p-10 p-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <img src={review1} alt="" />
                <div>
                  <p className="text-xl font-bold">Awlad Hossain</p>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={qoute} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknow printer tool a galley of type
                and scrambled it to make type specimen book has survived not
                only five centurines.
              </p>
            </div>
            <div className="md:hidden block mt-5">
              <img src={qoute} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 md:p-10 p-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <img src={review1} alt="" />
                <div>
                  <p className="text-xl font-bold">Awlad Hossain</p>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={qoute} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknow printer tool a galley of type
                and scrambled it to make type specimen book has survived not
                only five centurines.
              </p>
            </div>
            <div className="md:hidden block mt-5">
              <img src={qoute} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
