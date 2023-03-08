import React from "react";

//import social data
import { social } from "../data";

//import logo
import Logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* Social icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { icon, href } = item;
              return (
                <a className="text-accent text-base" key={index} href={href}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            <img src={Logo} alt="/" />
          </div>
          <p>&copy; Copyright <strong>DACRIMA <span className="text-accent ">STUDIOS</span></strong>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
