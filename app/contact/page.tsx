import { Phone, Mail } from "lucide-react"
import ContactForm from "@/components/features/ContactForm"

export const metadata = {
  title: "Contact | Local Boys Pondworks",
  description:
    "Get a free consultation for pond cleaning, construction, or maintenance in Laurel, DE.",
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Left — Info */}
        <div
          style={{
            padding: "5rem 4rem",
            backgroundColor: "var(--surface)",
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                margin: "0 0 1.25rem 0",
              }}
            >
              Get in Touch
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              Let&apos;s talk
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                about your pond.
              </em>
            </h1>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.9375rem",
              color: "var(--foreground)",
              opacity: 0.6,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "320px",
            }}
          >
            We&apos;re a small, local team — when you reach out you&apos;re talking to
            the people who actually do the work. Free consultation, no pressure.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <a
              href="tel:3022658062"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "1rem",
                color: "var(--foreground)",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              <Phone size={16} style={{ color: "var(--accent)" }} />
              302-265-8062
            </a>
            <a
              href="mailto:localboyspondworks@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.9375rem",
                color: "var(--foreground)",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              <Mail size={16} style={{ color: "var(--accent)" }} />
              localboyspondworks@gmail.com
            </a>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                opacity: 0.4,
                margin: "0 0 0.75rem 0",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  opacity: 0.6,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  opacity: 0.6,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.8125rem",
                color: "var(--foreground)",
                opacity: 0.45,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Laurel, DE · Serving a 25-mile radius at no travel fee
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div
          style={{
            padding: "5rem 4rem 5rem 5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--foreground)",
              margin: "0 0 2rem 0",
              letterSpacing: "-0.02em",
            }}
          >
            Send us a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
