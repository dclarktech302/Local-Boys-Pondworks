import type { CSSProperties } from "react"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import ServiceRow from "@/components/features/ServiceRow"

const services = [
  {
    index: "01",
    name: "Pond Cleaning",
    tag: "Annual & Seasonal",
    description:
      "Annual and seasonal cleanings to preserve your liner, clear the water, and keep your fish in peak health. Every pond is different — we tailor the approach to yours.",
  },
  {
    index: "02",
    name: "Monthly Maintenance",
    tag: "Ongoing Plans",
    description:
      "Regular visits so your pond stays balanced year-round without you lifting a finger. Pumps, filtration, water chemistry — handled.",
  },
  {
    index: "03",
    name: "Pond Construction",
    tag: "New Builds",
    description:
      "New builds from design to fill. We handle grading, liner, filtration, planting, and stocking. You describe what you want — we make it.",
  },
  {
    index: "04",
    name: "Koi & Goldfish",
    tag: "Fish & Filtration",
    description:
      "We sell and introduce fish, and configure proper filtration and aeration so they thrive. Healthy water, healthy fish — we know the difference.",
  },
]

export default function Home() {
  return (
    <>
      {/* SECTION 1 — SPLIT HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          paddingTop: "64px",
        }}
      >
        {/* Left: Sticky Photo Panel */}
        <div
          style={{
            position: "sticky",
            top: "64px",
            height: "calc(100vh - 64px)",
            backgroundColor: "var(--primary)",
            overflow: "hidden",
          }}
        >
          <div className="ripple-ring" />
          <div className="ripple-ring" />
          <div className="ripple-ring" />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, oklch(0.165 0.011 163.3 / 0.3) 0%, oklch(0.165 0.011 163.3 / 0.6) 100%)",
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "200px",
                aspectRatio: "1",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                backgroundColor: "oklch(0.368 0.071 154.9 / 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--foreground)",
                  opacity: 0.4,
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                Client photo
              </span>
            </div>
          </div>
        </div>

        {/* Right: Scrollable Content */}
        <div
          style={{
            padding: "6rem 4rem 6rem 5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              borderLeft: "2px solid var(--accent)",
              paddingLeft: "0.75rem",
              margin: "0 0 1.75rem 0",
            }}
          >
            Pond Construction &amp; Maintenance · Laurel, DE
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
              margin: "0 0 1.75rem 0",
            }}
          >
            Your Pond.
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Taken Care Of.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "15px",
              color: "var(--foreground)",
              opacity: 0.6,
              maxWidth: "380px",
              lineHeight: 1.7,
              margin: "0 0 2.5rem 0",
            }}
          >
            We handle pond cleanings, construction, koi fish, and monthly
            maintenance so you never have to think about it.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              maxWidth: "280px",
            }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "var(--accent)",
                padding: "0.875rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/our-work"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--foreground)",
                border: "1px solid oklch(0.905 0.032 89.2 / 0.3)",
                padding: "0.875rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                backgroundColor: "transparent",
              }}
            >
              See Our Work
            </Link>
          </div>

          <a
            href="tel:3022658062"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: 0.45,
              textDecoration: "none",
              marginTop: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Phone size={12} />
            Or call 302-265-8062
          </a>
        </div>
      </section>

      {/* SECTION 2 — EDITORIAL SERVICES LIST */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div style={{ padding: "0 5rem 3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 1rem 0",
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Every pond. Every problem.
          </h2>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {services.map((service, i) => (
            <ServiceRow
              key={service.index}
              service={service}
              isLast={i === services.length - 1}
            />
          ))}
        </ul>
      </section>

      {/* SECTION 3 — HORIZONTAL GALLERY TRACK */}
      <section
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 5rem 2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Our Work
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: 0.4,
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            Scroll to browse <ArrowRight size={12} />
          </p>
        </div>

        <div style={{ display: "flex", gap: "0" }}>
          <div
            style={{
              width: "48px",
              flexShrink: 0,
              borderRight: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "220px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                opacity: 0.3,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Our Work
            </span>
          </div>

          <div
            className="hide-scrollbar"
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 2rem",
              flex: 1,
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  width: "380px",
                  minWidth: "380px",
                  aspectRatio: "16/9",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--foreground)",
                    opacity: 0.3,
                  }}
                >
                  Photo coming soon
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              width: "48px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1px solid var(--border)",
            }}
          >
            <ArrowRight
              size={14}
              style={{ color: "var(--foreground)", opacity: 0.3 }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICE AREA CALLOUT */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "5rem",
          borderTop: "1px solid var(--border)",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            25-Mile Radius.
            <br />
            <span style={{ color: "var(--accent)" }}>No Travel Fee.</span>
          </h2>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <div
            style={{
              position: "relative",
              width: "220px",
              height: "220px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "1px solid oklch(0.537 0.081 178.4 / 0.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: "1px dashed oklch(0.537 0.081 178.4 / 0.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1px solid oklch(0.537 0.081 178.4 / 0.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 12px oklch(0.652 0.147 52.4 / 0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "calc(50% + 16px)",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Laurel, DE
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.9375rem",
              color: "var(--foreground)",
              opacity: 0.6,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "380px",
            }}
          >
            Based in Laurel, DE. We serve all surrounding areas within 25 miles
            at no extra charge. Outside that radius? Reach out — we&apos;re happy
            to talk.
          </p>

          <a
            href="tel:3022658062"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "var(--accent)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            302-265-8062
          </a>
        </div>
      </section>

      {/* SECTION 5 — CTA + INLINE CONTACT FORM */}
      <InlineContactSection />
    </>
  )
}

function InlineContactSection() {
  const inputStyle: CSSProperties = {
    fontFamily: "var(--font-body), system-ui, sans-serif",
    fontSize: "0.875rem",
    color: "var(--foreground)",
    backgroundColor: "var(--background)",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
  }

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-body), system-ui, sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--foreground)",
    opacity: 0.5,
    display: "block",
    marginBottom: "0.4rem",
  }

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "6rem 5rem",
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        gap: "5rem",
        alignItems: "start",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          Ready for a{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            cleaner
          </em>{" "}
          pond?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.9375rem",
            color: "var(--foreground)",
            opacity: 0.6,
            lineHeight: 1.7,
            margin: 0,
            maxWidth: "340px",
          }}
        >
          Tell us about your pond and we&apos;ll get back to you within 24 hours.
          No pressure, no commitment — just a conversation.
        </p>
        <a
          href="tel:3022658062"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            color: "var(--accent)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Phone size={14} />
          302-265-8062
        </a>
      </div>

      <form
        action="/api/contact"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        <div>
          <label style={labelStyle} htmlFor="inline-name">
            Name
          </label>
          <input
            id="inline-name"
            name="name"
            type="text"
            required
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="inline-email">
            Email
          </label>
          <input
            id="inline-email"
            name="email"
            type="email"
            required
            style={inputStyle}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="inline-service">
            Service
          </label>
          <select
            id="inline-service"
            name="service"
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="">Select a service…</option>
            <option value="cleaning">Pond Cleaning</option>
            <option value="maintenance">Monthly Maintenance</option>
            <option value="construction">Pond Construction</option>
            <option value="fish">Koi &amp; Goldfish</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="inline-message">
            Message
          </label>
          <textarea
            id="inline-message"
            name="message"
            rows={4}
            required
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Tell us about your pond…"
          />
        </div>
        <button
          type="submit"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: "var(--accent)",
            border: "none",
            borderRadius: "4px",
            padding: "0.875rem 1.5rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
