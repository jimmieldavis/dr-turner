import { FEATURED_MEDIA, type MediaEntry } from '@/data/media'

// Maps outlet name fragments to logo files in public/images/logos/
const LOGO_MAP: Record<string, string> = {
  'CBS News':           'cbs-news.png',
  'TIME':               'time-magazine.png',
  'USA Today':          'usa-today.png',
  'MLB Network':        'mlb-network.png',
  'WNYC':               'wnyc.png',
  'Harvard':            'harvard-university.png',
  'Axios':              'axios.png',
  'Los Angeles Times':  'los-angeles-times.png',
  'EBONY':              'ebony.png',
  'Essence':            'essence.png',
  'Forbes':             'forbes-magazine.png',
  'NBC':                'meet-the-press.png',
  'NBC Meet the Press': 'meet-the-press.png',
  'New York Times':     'the-new-york-times.png',
  'Nike':               'nike.svg',
  'Florida State':      'fsu.svg',
  'Florida A&M':        'famu.svg',
  "Children's Miracle Network": 'cmn.svg',
  'HLTH':               'hlth.svg',
  'Live Free 999':      'livefree999.svg',
}

function getLogoFile(outlet: string): string | null {
  for (const [key, file] of Object.entries(LOGO_MAP)) {
    if (outlet.toLowerCase().includes(key.toLowerCase())) return file
  }
  return null
}

// Type color accents
const TYPE_COLORS: Record<string, string> = {
  'TV':         '#1B2B4B',
  'Article':    '#2D4A3E',
  'Radio':      '#4A2D3E',
  'Conference': '#3D3A2D',
  'Keynote':    '#2D3D4A',
  'Panel':      '#3A2D4A',
}

function MosaicCard({ entry }: { entry: MediaEntry }) {
  const logo = getLogoFile(entry.outlet)
  const typeColor = TYPE_COLORS[entry.type] ?? '#1B2B4B'
  const isTierPlus = entry.tier === 'Tier 1+'
  const snippet =
    entry.description.length > 120
      ? entry.description.slice(0, 120) + '…'
      : entry.description

  return (
    <article
      style={{
        breakInside: 'avoid',
        marginBottom: '1.25rem',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Tier 1+ accent bar */}
      {isTierPlus && (
        <div style={{ height: '3px', backgroundColor: '#C17A56', flexShrink: 0 }} />
      )}

      {/* Card header: logo or outlet name on colored bg */}
      <div
        style={{
          backgroundColor: logo ? '#F4F2EF' : typeColor,
          padding: logo ? '1.25rem 1.5rem 1rem' : '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          minHeight: logo ? '4rem' : '3rem',
          flexShrink: 0,
        }}
      >
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/images/logos/${logo}`}
            alt={entry.outlet}
            style={{ height: '22px', width: 'auto', maxWidth: '120px', objectFit: 'contain', filter: 'brightness(0)' }}
          />
        ) : (
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.3,
            }}
          >
            {entry.outlet}
          </p>
        )}
      </div>

      {/* Card body */}
      <div
        style={{
          padding: '1.25rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flex: 1,
        }}
      >
        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C17A56',
            }}
          >
            {entry.type}
          </span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.2)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.6875rem', color: 'rgba(0,0,0,0.4)' }}>
            {entry.year}
          </span>
          {entry.city && entry.city !== 'National' && (
            <>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.2)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.6875rem', color: 'rgba(0,0,0,0.4)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {entry.city}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#1B2B4B',
            lineHeight: 1.3,
          }}
        >
          {entry.title}
        </p>

        {/* Description */}
        <p style={{ fontSize: '0.8125rem', color: '#5A5A5A', lineHeight: '1.65', flex: 1 }}>
          {snippet}
        </p>

        {/* CTA */}
        {entry.url ? (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1B2B4B',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(27,43,75,0.25)',
              paddingBottom: '1px',
              alignSelf: 'flex-start',
              marginTop: '0.25rem',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            className="mosaic-link"
          >
            {entry.type === 'TV' || entry.type === 'Panel' ? 'Watch' : entry.type === 'Radio' ? 'Listen' : 'Read'} &rarr;
          </a>
        ) : (
          <span style={{ fontSize: '0.6875rem', color: 'rgba(0,0,0,0.25)', fontStyle: 'italic' }}>
            {entry.city}
          </span>
        )}
      </div>
    </article>
  )
}

export default function MosaicGrid() {
  return (
    <section
      style={{
        backgroundColor: '#F0EDE8',
        padding: 'clamp(4rem, 7vw, 6rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '72rem' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            paddingBottom: '1.5rem',
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: '#C17A56', marginBottom: '0.5rem' }}>
              Coverage
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#1B2B4B',
                lineHeight: 1.15,
                fontWeight: 600,
              }}
            >
              Where the conversation<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>finds her.</span>
            </h2>
          </div>
          <a
            href="https://jimmieldavis.github.io/dr-turner-media/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1B2B4B',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(27,43,75,0.3)',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
              alignSelf: 'flex-end',
            }}
          >
            Full archive (217) &rarr;
          </a>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="mosaic-columns">
          {FEATURED_MEDIA.map((entry) => (
            <MosaicCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
