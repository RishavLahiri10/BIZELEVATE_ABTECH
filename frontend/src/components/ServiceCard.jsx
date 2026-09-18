import React from "react";
import Icon from "./Icons";
import Button from "./Button";

export default function ServiceCard({ service }) {
  return (
    <div className="card-hover bg-white rounded-xl2 overflow-hidden shadow-card border border-slate-100 h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon name={service.icon} className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">{service.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.description}</p>
        <Button href="#admission" serviceId={service.id} variant="secondary" className="mt-5 w-full" aria-label={`Enquire about ${service.title}`}>
          Enquire Now
        </Button>
      </div>
    </div>
  );
}
