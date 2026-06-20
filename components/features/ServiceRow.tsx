"use client"

export interface ServiceItem {
  index: string
  name: string
  tag: string
  description: string
}

export default function ServiceRow({
  service,
  isLast,
}: {
  service: ServiceItem
  isLast: boolean
}) {
  return (
    <li
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        padding: "2.5rem 5rem",
        borderTop: "1px solid var(--border)",
        borderBottom: isLast ? "1px solid var(--border)" : "none",
        cursor: "default",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.backgroundColor = "oklch(0.368 0.071 154.9 / 0.08)"
        const num = el.querySelector(".service-num") as HTMLElement
        if (num) {
          num.style.opacity = "1"
          num.style.color = "var(--accent)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.backgroundColor = "transparent"
        const num = el.querySelector(".service-num") as HTMLElement
        if (num) {
          num.style.opacity = "0.25"
          num.style.color = "var(--muted)"
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          paddingTop: "0.25rem",
        }}
      >
        <span
          className="service-num"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "5rem",
            lineHeight: 1,
            color: "var(--muted)",
            opacity: 0.25,
            fontWeight: 700,
            transition: "color 0.2s, opacity 0.2s",
          }}
        >
          {service.index}
        </span>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--foreground)",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {service.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "14px",
            color: "var(--foreground)",
            opacity: 0.6,
            maxWidth: "480px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {service.description}
        </p>
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
      </div>
    </li>
  )
}
