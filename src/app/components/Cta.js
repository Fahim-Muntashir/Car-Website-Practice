"use client";

// next image
import Image from "next/image";

// framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-center pb-0 bg-[#b3b72c]/10"
      id="contact"
    >
      <div>
        {/* text */}

        <div></div>

        {/* image */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 flex justify-center order-1
        md:order-none "
        >
          <Image
            src={"/images/cta/phone.svg"}
            width={320}
            height={640}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
