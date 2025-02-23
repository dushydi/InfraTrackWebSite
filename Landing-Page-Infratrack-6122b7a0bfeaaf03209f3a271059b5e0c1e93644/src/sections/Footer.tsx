import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={320} height={46} />
          </a>
          <p className="mt-2 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get your community ready for smoother roads. Report issues instantly
            with our app. Find your problem areas on the map in-app. Get
            real-time updates.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a href={icon.href}>
                <div
                  key={icon.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-[#008080] transition duration-200 ease-in-out cursor-pointer"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between max-lg:justify-normal lg:gap-10 gap-5 flex-wrap">
          <h4></h4>
          {footerLinks.map((section) => (
            <div key={section.id}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer transition duration-200 ease-in-out hover:text-[#008080]"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="text-white-400">Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
