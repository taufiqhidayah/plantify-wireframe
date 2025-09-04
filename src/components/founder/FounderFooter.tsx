"use client";

import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail
} from "lucide-react";

const FounderFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/plantify", label: "Twitter" },
    { icon: Github, href: "https://github.com/plantify", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/plantify", label: "LinkedIn" },
    { icon: Mail, href: "mailto:founders@plantify.com", label: "Email" },
  ];

  return (
    <footer className="bg-white border-t-2 border-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold border-2 border-black px-4 py-2 text-black mb-4 inline-block">
              PLANTIFY
            </div>
            <p className="text-sm text-gray-600 mb-4">
              The decentralized platform connecting founders with investors.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-black hover:bg-gray-100 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 text-black" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {currentYear} Plantify. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FounderFooter;
