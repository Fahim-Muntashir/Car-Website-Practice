"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// icons
import { FaQuoteLeft } from "react-icons/fa";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// next Image

import Image from "next/image";

// data
const testimonialData = [
  {
    message:
      "They truly exeeded mu expectetions and made my car rental expericane a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jhon Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exeeded mu expectetions and made my car rental expericane a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jhon Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exeeded mu expectetions and made my car rental expericane a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jhon Doe",
    job: "Photographer & Videographer",
  },
];

const TestimonialSlider = () => {
  return (
    <div>
      <Swiper>
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div>
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div>{message}</div>
                <Image
                  className="mb-4"
                  src={avatar}
                  width={64}
                  height={64}
                  alt=""
                ></Image>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
