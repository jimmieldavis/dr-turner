'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Media', href: '/media' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#0D1B2A' }}
      className="sticky top-0 z-50"
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-5"
        style={{ maxWidth: '72rem' }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif font-semibold text-base tracking-tight"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.0625rem' }}
        >
          Dr. Shairi Turner
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Inquire CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block"
          style={{
            backgroundColor: '#C17A56',
            color: '#fff',
            padding: '0.625rem 1.5rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Inquire
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              transform: open ? 'rotate(45deg) translate(2px, 2px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              transform: open ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#0D1B2A' }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                display: 'block',
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: '0.5rem',
              backgroundColor: '#C17A56',
              color: '#fff',
              padding: '0.875rem 1.5rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
            onClick={() => setOpen(false)}
          >
            Inquire
          </Link>
        </nav>
      )}
    </header>
  )
}
