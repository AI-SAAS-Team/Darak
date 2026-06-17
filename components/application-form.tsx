"use client";

import { useState } from "react";
import { Icon } from "./icons";

const ENVIRONMENTS = [
  "Private Residence",
  "Performance Center",
  "Hotel / Airbnb",
  "Yacht / Travel",
  "Professional Athlete",
  "Other",
];

const INTERESTS = ["DARAK Upgrade", "DARAK Placement", "Not sure yet"];

const field =
  "w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none transition-colors";
const label = "text-[0.66rem] uppercase tracking-[0.2em] text-muted";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-charcoal/15 bg-warm-white px-8 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="display mt-6 text-3xl text-charcoal">Application received.</h3>
        <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
          Thank you. Our team reviews every enquiry personally and will be in touch
          discreetly. Engagements are limited and by application only.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" placeholder="+971 …" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="location">
            Location
          </label>
          <input
            id="location"
            name="location"
            placeholder="City / Country"
            className={field}
          />
        </div>
      </div>

      <div>
        <p className={label}>Environment</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {ENVIRONMENTS.map((e) => (
            <label
              key={e}
              className="cursor-pointer border border-charcoal/15 px-4 py-2 text-[0.74rem] uppercase tracking-[0.12em] text-charcoal/70 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-warm-white"
            >
              <input type="radio" name="environment" value={e} className="sr-only" />
              {e}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className={label}>I&apos;m interested in</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {INTERESTS.map((e) => (
            <label
              key={e}
              className="cursor-pointer border border-charcoal/15 px-4 py-2 text-[0.74rem] uppercase tracking-[0.12em] text-charcoal/70 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-warm-white"
            >
              <input type="radio" name="interest" value={e} className="sr-only" />
              {e}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your current setup, your goals, what consistency would mean for you…"
          className={`${field} resize-none`}
        />
      </div>

      <div className="flex flex-col items-start gap-4 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 bg-charcoal px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-warm-white transition-colors hover:bg-gold"
        >
          Submit Application
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted">
          Private · Confidential · By application only
        </p>
      </div>
    </form>
  );
}
