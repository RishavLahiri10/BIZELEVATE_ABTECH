import React from "react";
import siteConfig from "../config/siteConfig";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary-50/40">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-heading mb-4">Our Educational Guidance Services</h2>
          <p className="text-slate-600">
            From admission counselling to career planning — explore the ways AB Tech Learning Educational
            Services can support your academic journey.
          </p>
        </div>

        {/*
          To add, remove or edit a service card, edit the `services` array
          in src/config/siteConfig.js — no changes needed here.
        */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
