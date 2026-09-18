import React from "react";
import siteConfig from "../config/siteConfig";
import Icon from "./Icons";

export default function Footer() {
  const { footer, business, contact } = siteConfig;

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="section-container py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={business.logo}
              alt={`${business.shortName} logo`}
              className="h-20 w-20 rounded-lg object-contain flex-shrink-0 bg-white"
            />
            <p className="font-heading font-bold text-white text-sm leading-tight">{business.name}</p>
          </div>
          <p className="text-sm text-primary-200 leading-relaxed mb-5">{footer.about}</p>
          <div className="flex gap-3">
            {footer.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center text-xs font-bold transition-colors"
              >
                {s.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">{footer.servicesHeading}</h4>
          <ul className="space-y-3">
            {footer.services.map((service) => (
              <li key={service} className="flex items-start gap-2 text-sm text-primary-200">
                <Icon name="check" className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="font-semibold tracking-wide">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">{footer.quickLinksHeading}</h4>
          <ul className="space-y-2.5">
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-200 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-primary-200">
            <li><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: {contact.whatsapp}</a></li>
            <li className="flex items-start gap-2">
              <Icon name="phone" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <a href={contact.phoneHref} className="hover:text-white transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="mail" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <a href={contact.emailHref} className="hover:text-white transition-colors break-all">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="location" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-300 text-center sm:text-left">{footer.copyright}</p>
          <div className="flex gap-5">
            {footer.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-primary-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-primary-200">
          {footer.designCredit.logo && <img src={footer.designCredit.logo} alt="BizElevate logo" className="h-8 w-8 rounded-lg object-contain bg-white flex-shrink-0" loading="lazy" />}
          <p>{footer.designCredit.text}</p>
        </div>
      </div>
    </footer>
  );
}
