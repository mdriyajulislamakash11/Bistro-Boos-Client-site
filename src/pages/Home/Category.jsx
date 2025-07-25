import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// slide category
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order Online'}
        ></SectionTitle>


      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-3xl text-white uppercase  pl-20 -mt-12">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-3xl text-white uppercase  pl-20 -mt-12">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-3xl text-white  uppercase  pl-20 -mt-12">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-3xl text-white uppercase  pl-20 -mt-12">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-3xl text-white uppercase  pl-20 -mt-12">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
