import Link from 'next/link'
import AiAboutMe from './AiAboutMe'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Media', href: '/media' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
]

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shairi-turner-md-mph',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/drshairituner',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer>
      {/* AI About Me block */}
      <AiAboutMe />

      {/* Main footer */}
      <div style={{ backgroundColor: '#1B2B4B' }} className="text-white">
        <div className="mx-auto px-6 py-16" style={{ maxWidth: '72rem' }}>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand column */}
            <div>
              <p
                className="font-serif font-semibold text-xl mb-3"
                style={{ color: '#fff' }}
              >
                Dr. Shairi Turner
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                Physician. Mental Health Advocate.<br />
                Chief Health Officer, Crisis Text Line.
              </p>
              <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                In crisis? Text HOME to 741741.
              </p>
            </div>

            {/* Nav column */}
            <div>
              <p
                className="eyebrow mb-4"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Pages
              </p>
              <nav className="flex flex-col gap-3">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    className="hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social + CTL column */}
            <div>
              <p
                className="eyebrow mb-4"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Connect
              </p>
              <div className="flex gap-4 items-center mb-6">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      transition: 'color 0.2s',
                    }}
                    className="hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
                <a
                  href="https://www.crisistextline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                    opacity: 0.65,
                  }}
                  className="hover:opacity-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logos/crisis-text-line.png"
                    alt="Crisis Text Line"
                    style={{ height: '18px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>
              &copy; {new Date().getFullYear()} Dr. Shairi Turner. All rights reserved.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>
              drshairi.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
