"use client";

import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";

// import required modules
// import { EffectCoverflow, Navigation, Pagination } from "swiper";

// SwiperCore.use([Autoplay]);
export default function ImgSelider() {
  const images = [
    "/images/reveu.png",
    "/images/reveu2.png",
    "/images/reveu1.png",
    "/images/reveu.png",
    "/images/reveu2.png",
    "/images/reveu1.png",
    "/images/reveu2.png",
    "/images/reveu.png",
    "/images/reveu.png",
    "/images/reveu2.png",
    "/images/reveu1.png",
    "/images/reveu.png",
    "/images/reveu2.png",
    "/images/reveu1.png",
    "/images/reveu2.png",
    "/images/reveu.png",
  ];
  return (
    <>
      <section>
        <div className="main">
          <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={3}
            // loopFillGroupWithBlank={true}
            pagination={{
              clickable: false,
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            // navigation={true}
            allowTouchMove={false}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 110,
              modifier: 3,
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
            {images.map((src, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div>
                  <div className="testimonials-profile-circle">
                    <Image
                      src={src}
                      width={56}
                      height={56}
                      alt="testimonial-avatar"
                      className="testimonial-avatar"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide className=" ">
              <div>
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={70}
                    height={70}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div>
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={70}
                    height={70}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div>
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={70}
                    height={70}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div>
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={70}
                    height={70}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div>
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={70}
                    height={70}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
