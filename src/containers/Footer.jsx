import React from "react";
import { images } from "../utilities";
import { FaTwitter,FaFacebook,FaInstagram,FaYoutube,FaEnvelope,FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center pt-16 gap-16" >
      <div className="flex justify-between gap-4 screenlimit">
        {/* Column 1 */}
        <div className="flex-[1.5]  flex flex-col items-start justify-start gap-4">
          <img src={images.logo} alt="" />
          <p className="paraFooterTypo">
            Internee.pk kickstart student's tech careers with first internships,
            providing industry exposure, practical skills, and networking
            opportunities, paving the way for their success in the tech
            industry.
          </p>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-InactiveGreen hover:shadow-md bgGradienthover"><FaTwitter className="text-white text-lg"/></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-InactiveGreen hover:shadow-md bgGradienthover"><FaFacebook className="text-white text-lg"/></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-InactiveGreen hover:shadow-md bgGradienthover"><FaInstagram className="text-white text-lg"/></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-InactiveGreen hover:shadow-md bgGradienthover"><FaYoutube className="text-white text-lg"/></div>
          </div>
        </div>
        {/* Column 2 */}
        <ul className="flex-1  flex flex-col items-start justify-start gap-2">
           <li className="headFooterTypo">Company</li>
           {
            ['Contact Us','Privacy Policy', 'Terms and Conditions'].map(
              (item,index)=>{
                  return <li key={item+index} className="paraFooterTypo">{item}</li>
              }
            )
           }
        </ul>
        {/* Column 3 */}
        <ul className="flex-1  flex flex-col items-start justify-start gap-2">
           <li className="headFooterTypo">Get help</li>
           {
            ['Training Videos','Request help'].map(
              (item,index)=>{
                  return <li key={item+index} className="paraFooterTypo">{item}</li>
              }
            )
           }
        </ul>
        {/* Column 4 */}
        <ul className="flex-1  flex flex-col items-start justify-start gap-2">
           <li className="headFooterTypo">Get in touch</li>
           {
            ['+92-345-3191465','info@internee.pk'].map(
              (item,index)=>{
                  return <li key={item+index} className="paraFooterTypo flex items-center justify-center gap-2">{index===1?<FaEnvelope/>:<FaPhone/>}{item}</li>
              }
            )
           }
           <li className="paraFooterTypo">Copyright &copy; 2024 intenee.pk Pvt. Ltd.<br/>All Rights Reserved</li>
        </ul>
      </div>
      <div className="w-full bg-lightGray text-darkGray flex items-center justify-center py-6">
      Copyright &copy; 2024 intenee.pk Pvt. Ltd. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
