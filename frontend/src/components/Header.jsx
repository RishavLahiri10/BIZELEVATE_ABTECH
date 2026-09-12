import React, { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig";
import Icon from "./Icons";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-white/90 backdrop-blur py-3"
      }`}
    >
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <div className="section-container flex items-center justify-between">
        {/* Logo + Business Name */}
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <img
            src={siteConfig.business.logo}
            alt={`${siteConfig.business.shortName} logo`}
            className="h-11 w-11 md:h-12 md:w-12 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0 leading-tight">
            <p className="font-heading font-bold text-primary text-sm sm:text-base md:text-lg truncate">
              {siteConfig.business.name}
            </p>
            <p className="hidden sm:block text-xs text-secondary font-medium truncate">
              {siteConfig.business.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={siteConfig.enquiryButton.href} variant="primary" className="hidden md:inline-flex">
            {siteConfig.enquiryButton.label}
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-primary hover:bg-primary-50 transition-colors"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="w-7 h-7" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
