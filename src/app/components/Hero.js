"use client";

import Image from "next/image";

// motion
import { motion } from "framer-motion";
//icons
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";

// varients
import { fadeIn } from "../../../variants";

const Hero = () => {
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Hello I am <span className="text-accent">Mahmudul Hasan </span>
              <br />
              Reseachercer
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal roide for any adventure with our diverse range of
              affordable and dependable car rentals.
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <BsFacebook></BsFacebook>
              <BsInstagram />
              <BsLinkedin />
              <SiGooglescholar />
            </motion.div>
          </div>
          {/* img  car*/}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:right-0 flex justify-center items-center"
          >
            <Image
              src={"/images/hero/hero.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
