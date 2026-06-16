import Link from 'next/link'
import { FEATURED_MEDIA } from '@/data/media'

export const metadata = {
  title: 'Media | Dr. Shairi Turner',
  description:
    '217 media engagements. NBC, CBS, MLB Network, TIME, USA Today, NYT, Harvard, Axios, EBONY, Essence, Forbes.',
}

export default function Media() {
  const byYear = FEATURED_MEDIA.reduce<Record<number, typeof FEATURED_MEDIA>>((acc, entry) => {
    if (!acc[entry.year]) acc[entry.year] = []
    acc[entry.year].push(entry)
    return acc
  }, {})

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)

  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#1B2B4B', padding: '6rem 1.5rem 4rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Media
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: '#fff',
              maxWidth: '20ch',
              lineHeight: 1.1,
            }}
          >
            The record<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>speaks for itself.</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { num: '217', label: 'Catalogued engagements' },
              { num: '12.4M', label: 'Impressions, one 2024 tour' },
              { num: '49', label: 'Outlets, Live Free 999 SMT' },
              { num: '366', label: 'Secured airings, LF999' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-serif"
                  style={{ fontSize: '2.5rem', color: '#C17A56', lineHeight: 1, fontWeight: 700 }}
                >
                  {stat.num}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.375rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL ARCHIVE LINK */}
      <section style={{ backgroundColor: '#C17A56', padding: '1.25rem 1.5rem' }}>
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: '72rem' }}>
          <p style={{ color: '#fff', fontSize: '0.9375rem' }}>
            The interactive archive with all 217 entries, filters, and a geographic map is live at the media tracker.
          </p>
          <a
            href="https://jimmieldavis.github.io/dr-turner-media/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#C17A56',
              padding: '0.625rem 1.5rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Open Full Tracker
          </a>
        </div>
      </section>

      {/* FEATURED ENTRIES BY YEAR: dark background */}
      <section style={{ backgroundColor: '#0D1B2A', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>Selected Coverage</p>

          {years.map((year) => (
            <div key={year} className="mb-16">
              <h2
                className="font-serif mb-8"
                style={{
                  fontSize: '2rem',
                  color: 'rgba(255,255,255,0.2)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '1rem',
                }}
              >
                {year}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {byYear[year].map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(193,122,86,0.15)',
                          color: '#C17A56',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          padding: '0.2rem 0.625rem',
                          border: '1px solid rgba(193,122,86,0.3)',
                        }}
                      >
                        {entry.type}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)' }}>
                        {entry.city !== 'National' && entry.city !== 'Remote' ? entry.city : entry.date.slice(0, 7)}
                      </span>
                    </div>

                    <h3
                      className="font-serif"
                      style={{ fontSize: '1.0625rem', color: '#fff', lineHeight: 1.35 }}
                    >
                      {entry.outlet}
                    </h3>

                    <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', flex: 1 }}>
                      {entry.description}
                    </p>

                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.8125rem',
                          color: '#C17A56',
                          textDecoration: 'none',
                          fontWeight: 500,
                          marginTop: '0.25rem',
                        }}
                      >
                        View coverage &rarr;
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS KIT CTA */}
      <section style={{ backgroundColor: '#C17A56', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2
          className="font-serif mb-4"
          style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)', color: '#fff' }}
        >
          Covering Dr. Turner?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '2rem' }}>
          Submit a media request and her team will respond promptly.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          backgroundColor: '#1B2B4B',
          color: '#fff',
          padding: '1rem 2.25rem',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          Media Inquiry
        </Link>
      </section>
    </>
  )
}
