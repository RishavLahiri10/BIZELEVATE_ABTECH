import React from "react";
import siteConfig from "../config/siteConfig";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">

        <div className="relative order-2 lg:order-1">
          <div className="rounded-xl2 overflow-hidden shadow-card aspect-[4/3]">

            <img src={about.image} alt={about.imageAlt} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary text-white rounded-xl2 p-5 shadow-xl max-w-[200px]">
            <p className="text-2xl font-bold font-heading">{about.highlights[0].value}</p>
            <p className="text-xs text-primary-100 mt-1">{about.highlights[0].label}</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">{about.subheading}</span>
          <h2 className="section-heading mb-6">{about.heading}</h2>

          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-slate-600 mb-4 leading-relaxed">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {about.highlights.map((h) => (
              <div key={h.label} className="text-center p-4 rounded-xl bg-primary-50">
                <p className="text-xl md:text-2xl font-bold text-primary font-heading">{h.value}</p>
                <p className="text-xs text-slate-500 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
