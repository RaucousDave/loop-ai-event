import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
          <img src="/logos/logo-3.png" alt="Loop AI" className="w-12 mb-2" />
          <p className="text-sm text-white/70">
            Built for Africa’s boldest creators.
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center space-x-8 font-medium">
          <a href="#" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            Register
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end space-x-4">
          <a href="#" className="hover:text-purple-400 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@loop.ai"
            className="hover:text-purple-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-sm text-white/40">
        © {new Date().getFullYear()} Loop.AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
