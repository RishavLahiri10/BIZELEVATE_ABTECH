import React from "react";
import siteConfig from "../config/siteConfig";
import Icon from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
    >
      <Icon name="whatsapp" className="w-7 h-7" />
    </a>
  );
}
