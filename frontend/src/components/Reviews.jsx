import React from "react";
import siteConfig from "../config/siteConfig";

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="section-heading mb-4">Reviews</h2>
          <p className="text-slate-600">A reflection on the guidance and support received.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {siteConfig.reviews.map((review, index) => (
            <figure key={index} className="rounded-xl2 border border-slate-200 bg-primary-50/40 p-6 sm:p-10 shadow-card">
              <span aria-hidden="true" className="block text-5xl text-secondary font-serif leading-none mb-4">“</span>
              <blockquote className="text-base sm:text-lg leading-relaxed text-slate-700 whitespace-pre-line break-words">{review.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
