import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_MEDIA } from '@/data/media'
import BookingBanner from '@/components/BookingBanner'

export const metadata = {
  title: 'Media | Dr. Shairi Turner',
  description:
    '217 media engagements. NBC, CBS, MLB Network, TIME, USA Today, NYT, Harvard, Axios, EBONY, Essence, Forbes.',
}

export default function Media() {
  return (
    <>
      {/* PAGE HEADER: full-bleed hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Image
          src="/images/mlb-frames/frame_015.png"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        <div
          className="mx-auto"
          style={{
            maxWidth: '72rem',
            width: '100%',
            padding: 'clamp(8rem, 14vw, 12rem) clamp(1.5rem, 6vw, 4rem) 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <p className="eyebrow mb-4" style={{ color: '#C17A56' }}>Media</p>
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
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#0D1B2A', padding: '2.5rem clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* FLAGSHIP APPEARANCES: broadcast control room background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '2.5rem clamp(1.5rem, 6vw, 4rem) 2.5rem',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/media-control.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(15,22,40,0.88)',
            }}
          />
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow mb-10" style={{ color: '#C17A56' }}>Flagship Appearances</p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
              gap: '1px',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          >
            {FEATURED_MEDIA.map((entry, idx) => {
              const LOGO_MAP: Record<string, string> = {
                'CBS News': 'cbs-news.png', 'TIME': 'time-magazine.png',
                'USA Today': 'usa-today.png', 'MLB Network': 'mlb-network.png',
                'WNYC': 'wnyc.png', 'Harvard': 'harvard-university.png',
                'Axios': 'axios.png', 'Los Angeles Times': 'los-angeles-times.png',
                'EBONY': 'ebony.png', 'Essence': 'essence.png',
                'Forbes': 'forbes-magazine.png', 'NBC': 'meet-the-press.png',
                'NBC Meet the Press': 'meet-the-press.png',
                'New York Times': 'the-new-york-times.png',
                'Nike': 'nike.svg',
                'Florida State': 'fsu.svg',
                'Florida A&M': 'famu.svg',
                'Children\'s Miracle Network': 'cmn.svg',
                'HLTH': 'hlth.svg',
                'Live Free 999': 'livefree999.svg',
              }
              const SOURCE_URLS: Record<string, string> = {
                'CBS News': 'https://www.cbsnews.com/newyork/video/how-constant-war-coverage-is-fueling-stress-and-anxiety/',
                'TIME': 'https://time.com/7096438/election-stress-crisis-text-line-988/',
                'USA Today': 'https://www.usatoday.com/story/life/health-wellness/2024/10/28/crisis-lines-election-anxiety/75827309007/',
                'MLB Network': 'https://www.mlb.com/video/april-brown-and-shairi-turner-talk-mental-health',
                'Los Angeles Times': 'https://www.latimes.com/lifestyle/story/2026-03-25/gen-z-loneliness-social-media-tips',
                'Harvard': 'https://cff.hms.harvard.edu',
                'Axios': 'https://www.axios.com/2026/04/20/axios-live-ai-could-support-child-mental-health-with-the-right-guardrails',
                'Forbes': 'https://www.forbes.com/health/mind/suicide-prevention-strategies/',
                'EBONY': 'https://www.ebony.com/nikes-podcast-no-off-season-mental-health/',
                'Essence': 'https://www.essence.com/lifestyle/nike-new-mental-health-podcast/',
                'NBC': 'https://www.nbcnews.com/meet-the-press/meet-press-december-31-2023-n1308240',
                'NBC Meet the Press': 'https://www.nbcnews.com/meet-the-press/meet-press-december-31-2023-n1308240',
              }
              const logoFile = Object.entries(LOGO_MAP).find(([k]) =>
                entry.outlet.toLowerCase().includes(k.toLowerCase())
              )?.[1] ?? null
              const logoUrl = entry.url || Object.entries(SOURCE_URLS).find(([k]) =>
                entry.outlet.toLowerCase().includes(k.toLowerCase())
              )?.[1] || null

              const LOGO_HEIGHTS: Record<string, number> = {
                'time-magazine.png': 16, 'cmn.svg': 32, 'nike.svg': 13, 'hlth.svg': 16,
                'usa-today.png': 34, 'mlb-network.png': 34, 'harvard-university.png': 27, 'cbs-news.png': 24,
                'famu.svg': 22, 'fsu.svg': 22,
                'forbes-magazine.png': 16, 'ebony.png': 16, 'essence.png': 16,
                'meet-the-press.png': 30, 'livefree999.svg': 48,
              }
              const logoHeight = logoFile ? (LOGO_HEIGHTS[logoFile] ?? 22) : 22

              const metaParts = [entry.type, entry.year, entry.city && entry.city !== 'National' ? entry.city : null].filter(Boolean)

              const logoImg = logoFile ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/images/logos/${logoFile}`}
                  alt={entry.outlet}
                  style={{
                    height: `${logoHeight}px`,
                    width: 'auto',
                    maxWidth: '120px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.6,
                    display: 'block',
                  }}
                />
              ) : null

              return (
                <article
                  key={entry.id}
                  style={{
                    backgroundColor: idx < 9 ? 'transparent' : 'rgba(10,18,35,0.35)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.875rem',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexWrap: 'wrap' }}>
                    {logoFile ? (
                      logoUrl ? (
                        <a
                          href={logoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="media-logo-link"
                          aria-label={`Visit ${entry.outlet}`}
                        >
                          {logoImg}
                        </a>
                      ) : (
                        <span className="media-logo-link">{logoImg}</span>
                      )
                    ) : (
                      <span
                        style={{
                          fontSize: '0.625rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.4)',
                          flexShrink: 0,
                        }}
                      >
                        {entry.outlet}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        color: 'rgba(255,255,255,0.3)',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {metaParts.join('  |  ')}
                    </span>
                  </div>

                  <p
                    className="font-serif"
                    style={{ fontSize: '1.0625rem', color: '#fff', lineHeight: 1.35, fontWeight: 600 }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: entry.title || entry.outlet }} />
                  </p>

                  <p style={{ fontSize: '0.875rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', flex: 1 }}>
                    {entry.description}
                  </p>

                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-card-link"
                    >
                      {entry.type === 'TV' || entry.type === 'Panel' ? 'Watch' : entry.type === 'Radio' ? 'Listen' : 'Read'} &rarr;
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
                      {entry.city}
                    </span>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <BookingBanner hideMediaPress />
    </>
  )
}
