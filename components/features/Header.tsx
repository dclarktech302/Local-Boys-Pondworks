"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "64px",
        backgroundColor: "var(--background)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--foreground)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Local Boys Pondworks
        </Link>

        <nav
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--foreground)",
                opacity: 0.7,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.7")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "var(--accent)",
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Free Consultation
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--foreground)",
              padding: "0.5rem",
            }}
          >
            <Menu size={22} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <div style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: "0.5rem",
                }}
              >
                Local Boys Pondworks
              </p>
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: "1.125rem",
                      color: "var(--foreground)",
                      opacity: 0.8,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link
                  href="/contact"
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#fff",
                    backgroundColor: "var(--accent)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "4px",
                    textDecoration: "none",
                    textAlign: "center",
                    marginTop: "0.5rem",
                  }}
                >
                  Free Consultation
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
