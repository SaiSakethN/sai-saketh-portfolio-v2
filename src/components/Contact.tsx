import { useRef, useState, useEffect } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Copy, Check, Phone, MapPin } from "lucide-react";
import { profile, gmailCompose } from "../data/portfolio";
import { SectionLabel, SocialLinks } from "./Shared";
export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const [draftUrl, setDraftUrl] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      if (navigator.clipboard && window.isSecureContext)
        await navigator.clipboard.writeText(profile.email);
      else {
        const field = document.createElement("textarea");
        const previousFocus = document.activeElement as HTMLElement | null;
        field.value = profile.email;
        field.setAttribute("aria-hidden", "true");
        field.style.cssText = "position:fixed;opacity:0;pointer-events:none";
        document.body.appendChild(field);
        field.select();
        const success = document.execCommand("copy");
        field.remove();
        previousFocus?.focus({ preventScroll: true });
        if (!success) throw new Error("Clipboard unavailable");
      }
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setStatus("Please select and copy the email address shown on this page.");
    }
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim(),
      email = String(data.get("email") || "").trim(),
      subject = String(data.get("subject") || "").trim(),
      message = String(data.get("message") || "").trim();
    if (!name || !email || !subject || !message) {
      setStatus("Please complete every field.");
      return;
    }
    const url = gmailCompose(
      subject,
      `Hi Sai Saketh,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );
    setDraftUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus(
      "Gmail was requested in a new tab. Sign in if needed, review the draft, and send it there. If it didn’t open, use the draft link below.",
    );
  }
  return (
    <section
      id="contact"
      className="section container contact-section"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="split-section">
        <SectionLabel number="06">Let’s connect</SectionLabel>
        <div className="section-content">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h3 id="contact-heading">
            Good work starts
            <br />
            with a conversation<span className="accent">.</span>
          </h3>
          <p>
            Have an AI problem to solve, a role to discuss, or an idea to
            explore? I’d like to hear from you.
          </p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <span className="eyebrow">SAY HELLO</span>
          <a
            className="email-link"
            href={gmailCompose()}
            target="_blank"
            rel="noreferrer"
          >
            {profile.email}
            <ArrowUpRight size={19} />
          </a>
          <button className="copy-button" onClick={copy}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" role="status">
            {copied ? "Email address copied to clipboard." : ""}
          </span>
          <a className="phone-link" href={profile.phoneHref}>
            <Phone size={17} />
            {profile.phone}
          </a>
          <p className="location-line">
            <MapPin size={17} />
            {profile.location}, USA
          </p>
          <SocialLinks />
          <p className="contact-note">
            For introductions, opportunities,
            <br />
            and interesting problems.
          </p>
        </div>
        <div className="contact-form-area">
          <h4>Start a conversation</h4>
          <p id="form-help">
            This form opens a Gmail draft for you to review and send. The
            website does not send email.
          </p>
          <form onSubmit={submit} aria-describedby="form-help">
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label>
              Subject
              <input
                name="subject"
                required
                maxLength={200}
                placeholder="Let’s talk about an opportunity"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={4}
                placeholder="Tell me what you have in mind…"
              />
            </label>
            <button className="button primary" type="submit">
              Open Gmail draft
              <ArrowUpRight size={17} />
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
            {draftUrl && (
              <a
                className="text-link"
                href={draftUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open your prepared Gmail draft
                <ArrowUpRight size={15} />
              </a>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
