"use client";

//next image
import Image from "next/image";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// components
import Copyright from "./Copyright";

// motion
import { motion } from "framer-motion";

// variats
import { fadeIn } from "../../../variants";

// Link / React Scroll
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg-justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* {logo} */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Life is too short, So, enjoy every moment positively......
            </div>
            {/* phone and email */}
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone></FaPhone>
                <div className="font-medium">+614 8036 3038</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">mahmudulmoon123@gmail.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Website</h3>
              <ul className="flex flex-col gap-y-4 ">
                <li>
                  {" "}
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Certificate</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>{" "}
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Quick Link</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Whatsapp</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Facebook</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Instagram</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Youtube</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Linkedin</div>
              </div>
            </div>
          </div>
          {/* news letter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">
              Explore my latest Blog for fresh insights and updates !
            </div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your email"
                className="outline-none bg-white h-full border rounded pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-accent btn-sm w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
