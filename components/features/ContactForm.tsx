"use client"

import { useState } from "react"
import type { ContactFormData } from "@/lib/types"

const inputStyle: React.CSSProperties = {
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

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontSize: "0.75rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "var(--foreground)",
  opacity: 0.5,
  display: "block",
  marginBottom: "0.4rem",
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const body: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      message: formData.get("message") as string,
      service: formData.get("service") as ContactFormData["service"],
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Something went wrong.")
      }

      setStatus("success")
      form.reset()
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "2.5rem",
          backgroundColor: "oklch(0.368 0.071 154.9 / 0.12)",
          border: "1px solid oklch(0.368 0.071 154.9 / 0.3)",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--foreground)",
            margin: "0 0 0.75rem 0",
          }}
        >
          Message sent!
        </p>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.9375rem",
            color: "var(--foreground)",
            opacity: 0.6,
            margin: 0,
          }}
        >
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle} htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            style={inputStyle}
            placeholder="302-000-0000"
          />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          style={inputStyle}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="service">Service *</label>
        <select
          id="service"
          name="service"
          required
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
        <label style={labelStyle} htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Tell us about your pond — size, condition, what you need…"
        />
      </div>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "0.875rem",
            color: "oklch(0.652 0.147 52.4)",
            margin: 0,
          }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "#fff",
          backgroundColor: "var(--accent)",
          border: "none",
          borderRadius: "4px",
          padding: "0.875rem 1.5rem",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
          width: "100%",
          transition: "opacity 0.2s",
        }}
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
