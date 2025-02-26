// /* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Carousel() {
  return (
    <>
      <Swiper
        className=""
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        allowTouchMove={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className=" ">
        <div className="flex justify-center items-center">
        <p className="text-[#888E9B] text-[18px]  font-medium leading-[28px] w-[279px] text-center md:text-[#FFFFFF] md:text-[32px]  md:font-normal md:leading-[42px] md:w-[642px] xl:w-[746px]  ">
              {`“As a data analyst, I appreciate the power and accuracy of Bk-brand. It's become indispensable for marketing AI tool. `}
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <p className="text-[#888E9B] text-[18px]  font-medium leading-[28px] w-[279px] text-center md:text-[#FFFFFF] md:text-[32px]  md:font-normal md:leading-[42px] md:w-[642px] xl:w-[746px]  ">
              {`“As a data analyst, I appreciate the power and accuracy of Bk-brand. It's become indispensable for marketing AI tool. `}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <p className="text-[#888E9B] text-[18px]  font-medium leading-[28px] w-[279px] text-center md:text-[#FFFFFF] md:text-[32px]  md:font-normal md:leading-[42px] md:w-[642px] xl:w-[746px]  ">
              {`“As a data analyst, I appreciate the power and accuracy of Bk-brand. It's become indispensable for marketing AI tool. `}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <p className="text-[#888E9B] text-[18px]  font-medium leading-[28px] w-[279px] text-center md:text-[#FFFFFF] md:text-[32px]  md:font-normal md:leading-[42px] md:w-[642px] xl:w-[746px]  ">
              {`“As a data analyst, I appreciate the power and accuracy of Bk-brand. It's become indispensable for marketing AI tool. `}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
