import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            Local Boys Pondworks
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: 0.5,
              margin: 0,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Laurel, DE · 25-mile radius
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="tel:3022658062"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--foreground)",
                opacity: 0.7,
                textDecoration: "none",
              }}
            >
              302-265-8062
            </a>
            <a
              href="mailto:localboyspondworks@gmail.com"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--foreground)",
                opacity: 0.7,
                textDecoration: "none",
              }}
            >
              localboyspondworks@gmail.com
            </a>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.25rem" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: 0.5,
              textDecoration: "none",
            }}
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "var(--foreground)",
              opacity: 0.5,
              textDecoration: "none",
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
