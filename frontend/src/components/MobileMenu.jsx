import React from "react";
import siteConfig from "../config/siteConfig";
import Button from "./Button";
export default function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return <nav id="mobile-navigation" className="mobile-navigation xl:hidden" aria-label="Mobile navigation">
    {siteConfig.nav.map(item => <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>)}
    <Button href="#admission" onClick={onClose}>{siteConfig.enquiryButton.label}</Button>
  </nav>;
}
