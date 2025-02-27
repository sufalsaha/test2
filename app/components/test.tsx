/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerGroup={1}
        spaceBetween={30}
        slidesPerView={4}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        // { delay: 2000, disableOnInteraction: false }
        autoplay={false}
        // navigation={false}
        allowTouchMove={false}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper  box-shadow: none;"
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 110,
          modifier: 1,
          slideShadows: true,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 30,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 150,
        //   },
        // }}
      >
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar object-fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/reveu2.png"}
            width={56}
            height={56}
            alt="testimonial-avatar"
            className="testimonial-avatar"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
