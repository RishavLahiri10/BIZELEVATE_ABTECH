import React from "react";
import siteConfig from "../config/siteConfig";
import Button from "./Button";

export default function Courses() {
  const { courses } = siteConfig;

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Courses &amp; Programs</span>
          <h2 className="section-heading mb-4">{courses.heading}</h2>
          <p className="text-slate-600">{courses.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.items.map((course) => (
            <div
              key={course.id}
              className="card-hover group rounded-xl2 overflow-hidden shadow-card border border-slate-100 bg-white"
            >
              <div className="aspect-video overflow-hidden">
                {/* REPLACE IMAGE: update the `image` path for this course in src/config/siteConfig.js */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{course.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{course.description}</p>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-secondary hover:text-secondary-700 inline-flex items-center gap-1"
                >
                  Enquire Now
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="#contact" variant="secondary">
            Ask About a Specific Course
          </Button>
        </div>
      </div>
    </section>
  );
}
