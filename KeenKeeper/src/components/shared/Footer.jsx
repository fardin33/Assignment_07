import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import FooterLogo from "../../assets/images/logo-xl.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a3a32] text-gray-300 py-10 px-6 mt-25 md:mt-30 lg:mt-40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mt-3">
        {/* Logo Name */}
        <img
          src={FooterLogo}
          alt="KeenKeeper"
          className="h-7 md:h-8 lg:h-10 w-auto object-contain mb-5"
        />

        {/* description */}
        <p className="max-w-xl text-[12px] md:text-[14.5px] lg:text-[16px] mb-5 text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-10">
          <h3 className="text-white font-medium mb-4">Social Links</h3>
          <div className="flex gap-4 justify-center">
            {/* Instagram */}
            <a
              href="#"
              className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-black hover:text-white transition-all shadow-sm "
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              className="bg-white p-2.5 rounded-full text-[#1a3a32] hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="X"
            >
              <RiTwitterXFill size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-500/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-wider text-gray-400 font-medium">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <p className="mt-2 text-[10px] text-[#1a3a32]">Fardin Hassan</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
