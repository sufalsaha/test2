"use client";


import React from "react";
import Image from "next/image";
// import avatarIImg from "./assets/1.jpg";
// import avatarIIImg from "./assets/2.jpg";
// import avatarIIIImg from "./assets/3.jpg";
// import avatarIVImg from "./assets/4.png";
// import avatarVImg from "./assets/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./App.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// import required modules
// import { EffectCoverflow, Navigation, Pagination } from "swiper";

// SwiperCore.use([Autoplay]);
export default function ImgSelider() {
  return (
    <>
      <section>
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }}>GET AN </span>
            <span style={{ color: "#1D8BA0" }}> OPINION</span>
          </div>
          <div className="head">TESTIMONIALS</div>
          <Swiper
            loop={true}
            // loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu2.png"}
                    width={56}
                    height={56}
                    alt="testimonial-avatar"
                    className="testimonial-avatar object-fill"
                  />
                </div>
                
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={56}
                    height={56}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                </div>
                
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu2.png"}
                    width={56}
                    height={56}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                
              </div>
            </SwiperSlide>

            <SwiperSlide className=" ">
              <div
                style={{
                  paddingRight: 20,

                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu1.png"}
                    width={56}
                    height={56}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <Image
                    src={"/images/reveu.png"}
                    width={56}
                    height={56}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
               
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}









// import React from "react";
// // import Image from "next/image";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import { Autoplay, EffectCoverflow } from "swiper/modules";

// // import required modules
// // import { EffectCoverflow, Navigation, Pagination } from "swiper";

// // SwiperCore.use([Autoplay]);
// export default function ImgSelider() {
//   const images = [
//     "/images/reveu.png",
//     "/images/reveu2.png",
//     "/images/reveu1.png",
//     "/images/reveu.png",
//     "/images/reveu2.png",
//     "/images/reveu1.png",
//     "/images/reveu2.png",
//     "/images/reveu.png",
//     "/images/reveu.png",
//     "/images/reveu2.png",
//     // "/images/reveu1.png",
//     // "/images/reveu.png",
//     // "/images/reveu2.png",
//     // "/images/reveu1.png",
//     // "/images/reveu2.png",
//     // "/images/reveu.png",
//   ];
//   return (
//     <>
//       <section className="bg-[#fff]  box-shadow: none;">
//         <div className="main  box-shadow: none;">
//           <Swiper
//             loop={true}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerGroup={1}
//             spaceBetween={0}
//             slidesPerView={4}
//             // loopFillGroupWithBlank={true}
//             pagination={{
//               clickable: false,
//             }}
//             // { delay: 2000, disableOnInteraction: false }
//             autoplay={false}
//             // navigation={false}
//             allowTouchMove={false}
//             modules={[EffectCoverflow, Autoplay]}
//             className="mySwiper  box-shadow: none;"
//             effect={"coverflow"}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 110,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             // breakpoints={{
//             //   640: {
//             //     slidesPerView: 1,
//             //     spaceBetween: 20,
//             //   },
//             //   768: {
//             //     slidesPerView: 2,
//             //     spaceBetween: 30,
//             //   },
//             //   1024: {
//             //     slidesPerView: 3,
//             //     spaceBetween: 150,
//             //   },
//             // }}
//           >
//             <div className="sk ">
//               {images.map((src, index) => (
//                 <SwiperSlide key={index} className="swiper-slide ">
//                   <div>
//                     <div>hi</div>
//                    <div className="testimonials-profile-circle text-amber-900">
//                       <div>sss</div>
//                       <Image
//                         src={src}
//                         width={56}
//                         height={56}
//                         alt="testimonial-avatar"
//                         className="testimonial-avatar"
//                       />
//                     </div> 
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </div>
//           </Swiper>
//         </div>
//       </section>
//     </>
//   );
// }
