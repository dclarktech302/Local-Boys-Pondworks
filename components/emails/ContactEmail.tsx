import * as React from "react"
import type { ContactFormData } from "@/lib/types"

const serviceLabels: Record<ContactFormData["service"], string> = {
  cleaning: "Pond Cleaning",
  maintenance: "Monthly Maintenance",
  construction: "Pond Construction",
  fish: "Koi & Goldfish",
  other: "Other",
}

export function ContactEmail({ data }: { data: ContactFormData }) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#1a4a2e",
          marginBottom: "8px",
        }}
      >
        New Contact Form Submission
      </h1>
      <p style={{ color: "#555", fontSize: "14px", marginBottom: "24px" }}>
        Local Boys Pondworks · localboyspondworks@gmail.com
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <tbody>
          <Row label="Name" value={data.name} />
          <Row label="Email" value={data.email} />
          {data.phone && <Row label="Phone" value={data.phone} />}
          <Row label="Service" value={serviceLabels[data.service]} />
          <Row label="Message" value={data.message} multiline />
        </tbody>
      </table>

      <p
        style={{
          fontSize: "12px",
          color: "#999",
          marginTop: "24px",
          textAlign: "center",
        }}
      >
        Sent from the Local Boys Pondworks website contact form.
      </p>
    </div>
  )
}

function Row({
  label,
  value,
  multiline,
}: {
  label: string
  value: string
  multiline?: boolean
}) {
  return (
    <tr>
      <td
        style={{
          padding: "12px 16px",
          fontSize: "12px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#888",
          borderBottom: "1px solid #eee",
          verticalAlign: "top",
          width: "120px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "12px 16px",
          fontSize: "14px",
          color: "#333",
          borderBottom: "1px solid #eee",
          whiteSpace: multiline ? "pre-wrap" : "normal",
        }}
      >
        {value}
      </td>
    </tr>
  )
}
