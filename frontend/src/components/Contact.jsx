import React from "react";
import siteConfig from "../config/siteConfig";
import Icon from "./Icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="section-padding bg-primary-50/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-heading mb-4">{contact.heading}</h2>
          <p className="text-slate-600">{contact.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl2 shadow-card p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="phone" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call Us</p>
                <a href={contact.phoneHref} className="font-semibold text-primary hover:underline">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl2 shadow-card p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="mail" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Us</p>
                <a href={contact.emailHref} className="font-semibold text-primary hover:underline break-all">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl2 shadow-card p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="location" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Visit Us</p>
                <p className="font-semibold text-primary">{contact.address}</p>
              </div>
            </div>

            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl2 bg-[#25D366] text-white font-semibold px-6 py-4 shadow-card hover:brightness-95 transition"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp: {contact.whatsapp}
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl2 bg-white border border-slate-200 p-6 text-primary font-semibold hover:underline"
            >
              Find this address on Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl2 shadow-card p-6 md:p-8">
            <h3 className="font-heading font-semibold text-xl text-primary mb-1">Send Us a Message</h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill out the form below and our counselling team will contact you soon.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
