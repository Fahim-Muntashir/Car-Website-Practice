"use client";

// next image
import Image from "next/image";

// incons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// react count up
import CountUp from "react-countup";

// react intersection observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "/variants";

const About = () => {
  const [ref, inView] = useInView({
    treshold: 0.5,
  });

  return (
    <section className="section flex items-center my-44" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb--"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/about.png"}
              width={600}
              height={448}
              alt=""
            ></Image>
          </motion.div>

          {/* text and states */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Discover the Inspiring Story of My Journey{" "}
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Life's brevity serves as a powerful reminder: cherish every
                moment with a positive outlook, for each fleeting second holds
                the potential to infuse our lives with joy and meaning.
              </motion.p>
              {/* States*/}

              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=" xl:block bg-accent hover:bg-accent-hover rounded w-full h-16 uppercase font font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See More in Details
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
