import React, { useState } from "react";
import { images } from "../utilities";
import { CtaButton } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menulink=[
    {
      name:"Internship",
      link:"https://internee.pk/internship.html"
    },
    {
      name:"Company Collaborations",
      link:"https://internee.pk/company.html"
    },
    {
      name:"Contact Us",
      link:"https://internee.pk/contact.html"
    },
  ]

  return (
    <div className="w-full flex items-center justify-center py-6 fixed shadow-md z-50 bg-white ">
      <div className="flex items-center justify-between screenlimit ">
        {/* logo */}
        <div>
          <img src={images.logo} alt="" />
        </div>
        {/* menu */}
        <ul className="hidden lg:flex items-center justify-between gap-6 ">
          {menulink.map(
            (item, index) => {
              return (
                <li key={item.name + index} className="menutext cursor-pointer">
                  <a href={item.link}> {item.name}</a>
                </li>
              );
            }
          )}
        </ul>
        {/* cta buttons */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <CtaButton type="primary" text={" job portal"} />
          <CtaButton link="https://portal.internee.pk/login.php"  type="secondary" text={" internee's login"} />
        </div>

        {/* mobile-menu */}
        <div className="flex lg:hidden items-center justify-center w-12 h-12 bg-darkGreen rounded-full">

          {!toggle && (
           
              <HiMenuAlt4
                onClick={() => setToggle(true)}
                className="text-2xl text-white"
              />
         
          )}

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="bg-white h-screen fixed right-0 bottom-0 top-0 w-[60%] flex flex-col gap-6 items-end justify-start px-3  py-2 pt-6 shadow-[0_0_20px_0_rgba(0,0,0,0.1)]"
              >
                <HiX
                  onClick={() => setToggle(false)}
                  className="text-4xl text-darkGreen "
                />
                <ul className="flex-1 flex justify-start flex-col w-full gap-6">
                  {["Internship", "Company Collaborations", "Contact Us"].map(
                    (item) => (
                      <li key={item} className="flex ">
                        <a className="whitespace-nowrap flex-1" href={`#`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
                <a
                  href="#"
                  className={` w-full border font-semibold text-sm rounded-full px-4 py-3 text-center 
                  bg-darkGreen text-white
                 capitalize`}
                >
                  Job Portal
                </a>
                <a
                  href="#"
                  className={` w-full border font-semibold text-sm rounded-full px-4 py-3 text-center 
                  border-darkGreen text-darkGreen
                 capitalize`}
                >
                 Internee's Login
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
