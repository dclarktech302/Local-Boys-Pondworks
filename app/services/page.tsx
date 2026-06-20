import Link from "next/link"

export const metadata = {
  title: "Services | Local Boys Pondworks",
  description:
    "Pond cleaning, monthly maintenance, new construction, and koi fish services in Laurel, DE.",
}

const services = [
  {
    number: "01",
    name: "Pond Cleaning",
    tag: "Annual & Seasonal",
    headline: "A clean pond is a healthy pond.",
    body: "Over time, sludge builds up, water chemistry shifts, and your fish pay the price. Our annual and seasonal cleanings break down the gunk, clear the water, and restore the balance your pond needs to thrive. We work around your fish — they stay in, we do the rest.",
    includes: [
      "Full debris removal",
      "Liner inspection",
      "Water chemistry check",
      "Filter cleaning",
      "Fish welfare check",
    ],
  },
  {
    number: "02",
    name: "Monthly Maintenance",
    tag: "Ongoing Plans",
    headline: "Set it and forget it.",
    body: "Ponds need consistent attention — water chemistry, pump performance, filtration. Our monthly plans mean you never have to worry about it. We visit on a regular schedule, log what we find, and handle whatever needs handling.",
    includes: [
      "Monthly or bi-monthly visits",
      "Water testing & treatment",
      "Pump & filter inspection",
      "Algae management",
      "Photo log of each visit",
    ],
  },
  {
    number: "03",
    name: "Pond Construction",
    tag: "New Builds",
    headline: "Your vision, built right.",
    body: "We handle every step of a new build — site evaluation, grading, liner installation, plumbing, filtration, planting, and stocking. You bring the idea, we bring the equipment and expertise to make it a reality.",
    includes: [
      "Site assessment & design",
      "Excavation & grading",
      "Liner & underlayment",
      "Pump & filtration system",
      "Plant & fish stocking",
    ],
  },
  {
    number: "04",
    name: "Koi & Goldfish",
    tag: "Fish & Filtration",
    headline: "Healthy fish need healthy water.",
    body: "We sell and introduce koi and goldfish, and make sure your filtration and aeration system can actually support them. A pond with the wrong setup leads to sick fish — we make sure you start right.",
    includes: [
      "Koi & goldfish for sale",
      "Safe fish introduction",
      "Filtration system sizing",
      "Aeration setup",
      "Ongoing fish health monitoring",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Header */}
      <div
        style={{
          padding: "5rem 5rem 3rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
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
          What We Do
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          Services
        </h1>
      </div>

      {/* Service detail sections */}
      {services.map((service, i) => (
        <div
          key={service.number}
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr 1fr",
            padding: "4rem 5rem",
            borderBottom: "1px solid var(--border)",
            gap: "3rem",
            alignItems: "start",
            backgroundColor: i % 2 === 1 ? "var(--surface)" : "transparent",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "4rem",
                fontWeight: 700,
                color: "var(--muted)",
                opacity: 0.25,
                lineHeight: 1,
              }}
            >
              {service.number}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                border: "1px solid oklch(0.537 0.081 178.4 / 0.35)",
                backgroundColor: "oklch(0.537 0.081 178.4 / 0.07)",
                padding: "0.25rem 0.75rem",
                borderRadius: "2px",
                width: "fit-content",
              }}
            >
              {service.tag}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {service.name}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.0625rem",
                fontStyle: "italic",
                color: "var(--accent)",
                margin: 0,
              }}
            >
              {service.headline}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.9375rem",
                color: "var(--foreground)",
                opacity: 0.65,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {service.body}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "oklch(0.368 0.071 154.9 / 0.08)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "1.75rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
                margin: "0 0 1rem 0",
              }}
            >
              Includes
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {service.includes.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                    opacity: 0.75,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontSize: "0.75rem" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* CTA */}
      <div
        style={{
          padding: "5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          Not sure what you need?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.9375rem",
            color: "var(--foreground)",
            opacity: 0.6,
            margin: 0,
            maxWidth: "360px",
            lineHeight: 1.7,
          }}
        >
          Reach out and describe your situation. We&apos;ll tell you exactly what
          we&apos;d recommend.
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: "var(--accent)",
            padding: "0.875rem 2rem",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Get a Free Consultation
        </Link>
      </div>
    </div>
  )
}
