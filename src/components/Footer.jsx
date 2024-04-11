// Footter seciton describing all social media contacts
import {  socialMedia } from "../constants";

const Footer = () => {
  return (
    <div id="contact" className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-blank">
        Copyright Ⓒ 2024 Gebakoo. All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[18px] leading-[100px] text-blank">
        Feel free to contact me via
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer