import React, { useId, useState } from "react";
import siteConfig from "../config/siteConfig";

export default function EnquiryForm({ initialService = "", admission = false }) {
  const id = useId();
  // Map the four website services to the six admission dropdown choices.
  const serviceMap = { admission: "college-admissions", "open-school": "nios", career: "career-counselling", "student-support": "general-guidance" };
  const selectedService = admission ? (serviceMap[initialService] || initialService || "nios") : initialService;
  const options = admission ? siteConfig.admissionOptions : siteConfig.services;
  const [status, setStatus] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.name = data.name.trim();
    data.email = data.email.trim();
    data.phone = data.phone.replace(/[\s()-]/g, "");
    data.consent = data.consent === "on";
    if (data.name.length < 2 || !/^(?:\+91|91)?[6-9]\d{9}$/.test(data.phone)) {
      setStatus({ type: "error", text: "Enter your full name and a valid 10-digit Indian mobile number, optionally with +91." });
      return;
    }
    // VITE variables are public. Use a backend URL here, never an API secret.
    const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;
    // Do not claim delivery when this frontend has no submission endpoint.
    if (!endpoint) {
      setStatus({ type: "error", text: "Your details have not been sent. Online enquiry submission is not available yet." });
      return;
    }
    setBusy(true);
    setStatus({ type: "", text: "" });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), signal: controller.signal,
      });
      const result = await response.json();
      // The backend must acknowledge storage/delivery explicitly; an HTML fallback is not success.
      if (!response.ok || result.success !== true) throw new Error("Not accepted");
      form.reset();
      setStatus({ type: "success", text: "Your enquiry has been received. Thank you for contacting us." });
    } catch {
      setStatus({ type: "error", text: "We could not confirm delivery. Your details are still here; please try again later." });
    } finally {
      clearTimeout(timeout);
      setBusy(false);
    }
  }
  return (
    <form onSubmit={submit} className={`enquiry-form${admission ? " admission-form" : ""}`}>
      <label htmlFor={`${id}-name`}>Full Name *<input id={`${id}-name`} name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Enter your student or guardian name" /></label>
      <div className="enquiry-fields">
        <label htmlFor={`${id}-phone`}>Phone Number *<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required maxLength={20} placeholder="+91 9876543210" /></label>
        <label htmlFor={`${id}-email`}>Email Address *<input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="name@example.com" /></label>
      </div>
      <label htmlFor={`${id}-service`}>{admission ? "Service / Course of Interest *" : "Interested service *"}<select id={`${id}-service`} name="service" defaultValue={selectedService} required>{!admission && <option value="">Choose a service</option>}{options.map(service => <option key={service.id} value={service.id}>{service.title}</option>)}</select></label>
      {!admission && <label htmlFor={`${id}-message`}>Message (optional)<textarea id={`${id}-message`} name="message" rows={3} maxLength={2000} placeholder="Tell us what guidance you need" /></label>}
      <label className="enquiry-consent"><input name="consent" type="checkbox" required /> <span>I agree to be contacted about this enquiry using the details above.</span></label>
      <p className="text-xs text-slate-500">This is an enquiry, not a confirmed admission.</p>
      {status.text && <p role={status.type === "error" ? "alert" : "status"} className={`enquiry-status ${status.type}`}>{status.text}</p>}
      <button type="submit" className="btn-primary w-full" disabled={busy}>{busy ? "Sending…" : "Submit enquiry"}</button>
    </form>
  );
}
