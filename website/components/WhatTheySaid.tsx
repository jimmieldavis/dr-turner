const HERO_QUOTE = {
  quote:
    'Thank you so much for making us smarter and better on this really important topic.',
  name: 'Kristen Welker',
  role: 'Host, Meet the Press',
  outlet: 'NBC News',
  logo: 'meet-the-press.png',
}

const SECONDARY_QUOTES = [
  {
    id: 2,
    quote:
      "We really strive to get guests on this podcast that are much smarter than me and we have 100% achieved that today. A better person.",
    name: 'Zac Clark',
    role: 'Host, The Zac Clark Show',
  },
  {
    id: 3,
    quote:
      'I really think that brought a big impact on how you shaped the different teams within the organization.',
    name: 'Shaniqua Staples',
    role: 'Former Director of Student Learning, Crisis Text Line',
  },
  {
    id: 4,
    quote:
      'Very quickly becoming one of the favorite people in my world. I decided it made a whole lot of sense to tap into her wisdom.',
    name: 'Chantra Powell',
    role: 'Host, Proven Not Perfect',
  },
  {
    id: 5,
    quote:
      'She has an incredible background. Incredible history, incredible background, so much knowledge.',
    name: 'Sadie Sutton',
    role: 'Host, She Persisted',
  },
]

export default function WhatTheySaid() {
  return (
    <section
      style={{
        backgroundColor: '#0D1B2A',
        padding: 'clamp(5rem, 9vw, 9rem) clamp(1.5rem, 6vw, 4rem)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '72rem' }}>
        <p className="eyebrow mb-12" style={{ color: '#C17A56' }}>
          What They Said
        </p>

        {/* Hero quote */}
        <div
          style={{
            borderLeft: '3px solid #C17A56',
            paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.45,
              fontWeight: 400,
              maxWidth: '36ch',
              marginBottom: '2rem',
            }}
          >
            &ldquo;{HERO_QUOTE.quote}&rdquo;
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/logos/${HERO_QUOTE.logo}`}
              alt={HERO_QUOTE.outlet}
              style={{
                height: '22px',
                width: 'auto',
                maxWidth: '100px',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                {HERO_QUOTE.name}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.125rem' }}>
                {HERO_QUOTE.role}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }} />

        {/* Secondary quotes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem)',
          }}
        >
          {SECONDARY_QUOTES.map((q) => (
            <div key={q.id}>
              <p
                className="font-serif"
                style={{
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
                {q.name}
              </p>
              <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.125rem' }}>
                {q.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
