import Link from "next/link"
import { Phone } from "lucide-react"

export const metadata = {
  title: "About | Local Boys Pondworks",
  description:
    "Local Boys Pondworks is a pond construction and maintenance company based in Laurel, DE.",
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "60vh",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            padding: "5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
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
            About Us
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
            Local guys.
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Real work.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1rem",
              color: "var(--foreground)",
              opacity: 0.65,
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "380px",
            }}
          >
            We&apos;re a small, owner-operated pond company based in Laurel, Delaware.
            When you call us, you&apos;re talking to the people who show up and do the
            work — not a call center.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
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
              }}
            >
              Team photo
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          padding: "5rem",
          borderBottom: "1px solid var(--border)",
          gap: "5rem",
          alignItems: "start",
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
              margin: "0 0 1rem 0",
            }}
          >
            Our Story
          </p>
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
            Started with a shovel
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              and a plan.
            </em>
          </h2>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {[
            "Local Boys Pondworks started the way most good things do — someone needed a pond built, nobody around did it right, so we figured it out ourselves. From that first build, word spread. Neighbors, friends, people down the road — they all wanted the same thing: a pond that looked good and actually worked.",
            "We've spent years digging, designing, cleaning, and maintaining ponds across Sussex County and beyond. We know what a healthy liner looks like after five years. We know which filtration systems hold up and which ones don't. We know how to read water chemistry and what it means for your fish.",
            "We're not a franchise. We don't subcontract. When you hire Local Boys, you get us — the same people, every time, who care about the outcome.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.9375rem",
                color: "var(--foreground)",
                opacity: 0.65,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      <div style={{ padding: "5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: "0 0 3rem 0",
          }}
        >
          How We Work
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            backgroundColor: "var(--border)",
          }}
        >
          {[
            {
              label: "We show up.",
              body: "No-shows and excuses don't build a reputation. We schedule, we arrive, we finish.",
            },
            {
              label: "We tell you the truth.",
              body: "If your pond has a real problem, we'll say so. If it doesn't need work, we'll say that too.",
            },
            {
              label: "We stand behind the work.",
              body: "If something we built or fixed isn't right, we come back and make it right. Simple.",
            },
          ].map((val) => (
            <div
              key={val.label}
              style={{
                padding: "2.5rem",
                backgroundColor: "var(--surface)",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {val.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--foreground)",
                  opacity: 0.6,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {val.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "5rem",
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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
          Ready to work together?
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
          <a
            href="tel:3022658062"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--foreground)",
              border: "1px solid var(--border)",
              padding: "0.875rem 2rem",
              borderRadius: "4px",
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
      </div>
    </div>
  )
}
