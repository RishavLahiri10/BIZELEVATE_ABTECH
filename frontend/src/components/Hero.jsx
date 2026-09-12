import React from "react";
import siteConfig from "../config/siteConfig";
import Button from "./Button";
import Icon from "./Icons";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 via-white to-white overflow-hidden"
    >
      {/* Decorative background shape */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="animate-fadeInUp">
          <span className="eyebrow">Admission &amp; Educational Guidance</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary font-heading leading-tight mb-5">
            {hero.headline}
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl">{hero.subheadline}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button href={hero.primaryButton.href} variant="primary">
              {hero.primaryButton.label}
            </Button>
            <Button href={hero.secondaryButton.href} variant="secondary">
              {hero.secondaryButton.label}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Icon name="check" className="w-5 h-5 text-secondary" />
              Personalised Counselling
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Icon name="check" className="w-5 h-5 text-secondary" />
              Trusted by 5000+ Students
            </div>
          </div>
        </div>

        {/* Image area - easily replaceable */}
        <div className="relative animate-fadeIn">
          <div className="absolute -inset-4 bg-secondary/10 rounded-xl2 rotate-2 hidden sm:block" aria-hidden="true" />
          <div className="relative rounded-xl2 overflow-hidden shadow-2xl aspect-[4/3]">
            {/*
              REPLACE IMAGE:
              Swap public/images/hero.jpg with your own image,
              or update the path in src/config/siteConfig.js -> hero.image
            */}
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Floating stat badge */}
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-4 items-center gap-3 max-w-[220px]">
            <div className="bg-primary/10 rounded-lg p-2.5">
              <Icon name="admission" className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-primary font-bold text-lg leading-none">10+ Yrs</p>
              <p className="text-xs text-slate-500 mt-1">Guidance Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
