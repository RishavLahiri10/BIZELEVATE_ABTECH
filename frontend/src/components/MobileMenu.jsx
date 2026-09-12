import React from "react";
import siteConfig from "../config/siteConfig";
import Button from "./Button";

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-primary-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[78%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-heading font-bold text-primary">{siteConfig.business.shortName}</span>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="py-3 px-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <Button
              href={siteConfig.enquiryButton.href}
              variant="primary"
              onClick={onClose}
              className="w-full"
            >
              {siteConfig.enquiryButton.label}
            </Button>
            <p className="text-xs text-slate-400 mt-4 text-center">{siteConfig.business.tagline}</p>
          </div>
        </div>
      </div>
    </>
  );
}
