import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmail } from "@/components/emails/ContactEmail"
import type { ContactFormData } from "@/lib/types"
import * as React from "react"

const serviceValues = ["cleaning", "maintenance", "construction", "fish", "other"] as const

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()

    const { name, email, phone, message, service } = body as ContactFormData

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    if (!serviceValues.includes(service)) {
      return NextResponse.json({ error: "Invalid service value." }, { status: 400 })
    }

    const data: ContactFormData = { name, email, phone, message, service }

    const { error } = await resend.emails.send({
      from: "Local Boys Pondworks <onboarding@resend.dev>",
      to: ["localboyspondworks@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      react: React.createElement(ContactEmail, { data }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Server error." }, { status: 500 })
  }
}
