import React, { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.message.trim()) return "Please enter a short message.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ state: "error", error });
      return;
    }

    setStatus({ state: "loading", error: "" });

    try {
      // -----------------------------------------------------------------
      // BACKEND INTEGRATION POINT
      // Replace this fetch URL with your deployed FastAPI backend endpoint
      // e.g. `${import.meta.env.VITE_API_URL}/api/contact`
      // See /backend/main.py for the reference FastAPI implementation.
      // -----------------------------------------------------------------
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus({ state: "success", error: "" });
      setForm(initialState);
    } catch (err) {
      // Graceful fallback message since no backend may be connected yet
      setStatus({
        state: "error",
        error:
          "We couldn't send your message right now. Please call or WhatsApp us directly, or try again shortly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what guidance you're looking for..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
        />
      </div>

      {status.state === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {status.error}
        </p>
      )}
      {status.state === "success" && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
          Thank you! Your message has been sent. Our counsellors will get back to you shortly.
        </p>
      )}

      <button type="submit" disabled={status.state === "loading"} className="btn-primary w-full sm:w-auto">
        {status.state === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
