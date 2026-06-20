import Link from "next/link"

export const metadata = {
  title: "Our Work | Local Boys Pondworks",
  description:
    "See pond construction, cleaning, and maintenance projects by Local Boys Pondworks in Laurel, DE.",
}

const categories = ["All", "Construction", "Cleaning", "Maintenance", "Koi"]

const placeholderProjects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  category: categories[(i % 4) + 1],
  label: `Project ${i + 1}`,
}))

export default function OurWorkPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div
        style={{
          padding: "5rem 5rem 4rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
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
            Portfolio
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
            Our Work
          </h1>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.875rem",
            color: "var(--foreground)",
            opacity: 0.45,
            margin: 0,
            maxWidth: "260px",
            lineHeight: 1.6,
            textAlign: "right",
          }}
        >
          Photos coming soon as we document recent projects. Check back or follow
          us on social.
        </p>
      </div>

      <div
        style={{
          padding: "1.5rem 5rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat, i) => (
          <span
            key={cat}
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: i === 0 ? 1 : 0.5,
              border: "1px solid var(--border)",
              backgroundColor: i === 0 ? "oklch(0.368 0.071 154.9 / 0.15)" : "transparent",
              padding: "0.375rem 0.875rem",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          backgroundColor: "var(--border)",
        }}
      >
        {placeholderProjects.map((project) => (
          <div
            key={project.id}
            style={{
              aspectRatio: "4/3",
              backgroundColor: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.75rem",
                left: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  backgroundColor: "oklch(0.537 0.081 178.4 / 0.15)",
                  border: "1px solid oklch(0.537 0.081 178.4 / 0.3)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "2px",
                }}
              >
                {project.category}
              </span>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.75rem",
                color: "var(--foreground)",
                opacity: 0.25,
              }}
            >
              Photo coming soon
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          borderTop: "1px solid var(--border)",
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
          Want to be our next project?
        </h2>
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
