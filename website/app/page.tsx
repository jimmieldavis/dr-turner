import Image from 'next/image'
import Link from 'next/link'
import { OUTLET_STRIP, FEATURED_MEDIA } from '@/data/media'

export default function Home() {
  return (
    <>
      {/* ─── HERO: untouched per Jimmie's instruction ─── */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: '#1B2B4B',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {/* Photo panel: left 55% */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '60%',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/half_body.png"
            alt="Dr. Shairi Turner"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'bottom center',
              mixBlendMode: 'luminosity',
              opacity: 0.92,
            }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(27,43,75,0) 40%, rgba(27,43,75,0.7) 70%, rgba(27,43,75,1) 100%)',
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(27,43,75,0.8) 0%, rgba(27,43,75,0) 40%)',
              zIndex: 2,
            }}
          />
        </div>

        {/* Text panel: right side */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            marginLeft: 'auto',
            width: '52%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6rem 4rem 6rem 2rem',
          }}
          className="hero-text-panel"
        >
          <p className="eyebrow" style={{ color: '#C17A56', marginBottom: '1.5rem' }}>
            Physician &nbsp;·&nbsp; Advocate &nbsp;·&nbsp; Author
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              color: '#fff',
              lineHeight: 1.0,
              fontWeight: 700,
              marginBottom: '0.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Dr. Shairi
          </h1>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              color: '#fff',
              lineHeight: 1.0,
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '2.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Turner
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
              lineHeight: '1.75',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '38ch',
              marginBottom: '3rem',
            }}
          >
            Chief Health Officer, Crisis Text Line. One of the most visible
            physician voices on youth mental health in national media.
            217 engagements. 12.4 million impressions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/speaking"
              style={{
                display: 'inline-block',
                backgroundColor: '#C17A56',
                color: '#fff',
                padding: '1rem 2.25rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Book Speaking
            </Link>
            <Link
              href="/about"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '1rem 2.25rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Her Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK: terracotta punch ─── */}
      <section
        style={{
          backgroundColor: '#C17A56',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)',
          textAlign: 'center',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.875rem, 4vw, 3.75rem)',
            color: '#fff',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.25,
            maxWidth: '22ch',
            margin: '0 auto',
            letterSpacing: '-0.01em',
          }}
        >
          &ldquo;Uncertainty and hope<br />
          can coexist.&rdquo;
        </p>
        <p
          style={{
            marginTop: '1.5rem',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Dr. Shairi Turner &nbsp;·&nbsp; Author, <em>Uncertainty and Hope Can Coexist</em>
        </p>
      </section>

      {/* ─── ABOUT SPLIT: second photo, full-height left panel ─── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '85vh',
          backgroundColor: '#F9F7F4',
        }}
        className="about-split"
      >
        <div style={{ position: 'relative', minHeight: '60vw' }}>
          <Image
            src="/images/headshot-2.jpg"
            alt="Dr. Shairi Turner"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(193,122,86,0.15) 0%, rgba(27,43,75,0.1) 100%)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(3rem, 6vw, 6rem)',
            backgroundColor: '#F9F7F4',
          }}
        >
          <p className="eyebrow mb-5" style={{ color: '#C17A56' }}>About</p>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
              color: '#1B2B4B',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}
          >
            She chose proximity<br />
            to the crisis she could<br />
            have avoided.
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: '1.8',
              color: '#3A3A3A',
              marginBottom: '1.5rem',
              maxWidth: '44ch',
            }}
          >
            Fieldston. Stanford. Case Western. Mass General. Harvard. She
            had access to every corridor that medicine opens. She chose the
            ones where the problems were hardest.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: '1.8',
              color: '#3A3A3A',
              marginBottom: '2.5rem',
              maxWidth: '44ch',
            }}
          >
            First to build Florida&apos;s juvenile justice healthcare system.
            Deputy Secretary for Health. Now Chief Health Officer at Crisis
            Text Line, where every data point represents a person in crisis
            who reached out.
          </p>
          <Link href="/about" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Full Story
          </Link>
        </div>
      </section>

      {/* ─── SPEAKING: audience photo background, navy overlay ─── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 9vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/speaking-audience.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          {/* Navy overlay: dark enough for text legibility, light enough to feel the photo */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(20,32,58,0.88)',
            }}
          />
        </div>

        {/* Ghost numeral watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(12rem, 25vw, 22rem)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          217
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 2 }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: '#C17A56' }}>Speaking</p>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '2rem',
                }}
              >
                She brings a room<br />
                to silence, then<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>gets them to act.</span>
              </h2>
              <Link
                href="/speaking"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#C17A56',
                  color: '#fff',
                  padding: '1rem 2.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Booking Inquiry
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  topic: 'Youth Mental Health',
                  detail: 'The data and the kid behind it. What parents, educators, and policymakers must do now.',
                },
                {
                  topic: 'Crisis Intervention',
                  detail: 'Why text reaches who voice lines cannot. What the numbers reveal.',
                },
                {
                  topic: 'Health Equity',
                  detail: 'From juvenile justice to corporate America. Naming the design failures that produced this outcome.',
                },
                {
                  topic: 'Parenting in the Crisis',
                  detail: 'No wellness clichés. Practical, evidence-grounded tools from a physician who is also a mother.',
                },
              ].map((item) => (
                <div
                  key={item.topic}
                  style={{ borderLeft: '2px solid rgba(193,122,86,0.5)', paddingLeft: '1.25rem' }}
                >
                  <p style={{ fontWeight: 600, color: '#fff', marginBottom: '0.25rem', fontSize: '0.9375rem' }}>
                    {item.topic}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDIA: broadcast control room background ─── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 9vw, 9rem) clamp(1.5rem, 6vw, 4rem)',
        }}
      >
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/media-control.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(15,22,40,0.92)',
            }}
          />
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 1 }}>
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            style={{ marginBottom: '3.5rem' }}
          >
            <div>
              <p className="eyebrow mb-4" style={{ color: '#C17A56' }}>Media</p>
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', lineHeight: 1.1 }}
              >
                The record speaks<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>for itself.</span>
              </h2>
            </div>
            <Link
              href="/media"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '0.875rem 2rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                alignSelf: 'flex-start',
              }}
            >
              Full Archive (217)
            </Link>
          </div>

          {/* Featured cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
              gap: '1px',
              backgroundColor: 'transparent',
            }}
          >
            {FEATURED_MEDIA.slice(0, 6).map((entry) => (
              <article
                key={entry.id}
                style={{
                  backgroundColor: 'rgba(10,18,35,0.35)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  position: 'relative',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#C17A56',
                    }}
                  >
                    {entry.type}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
                    {entry.year}
                  </span>
                </div>
                <p
                  className="font-serif"
                  style={{ fontSize: '1.0625rem', color: '#fff', lineHeight: 1.35, fontWeight: 600 }}
                >
                  {entry.outlet}
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', flex: 1 }}>
                  {entry.description.length > 110
                    ? entry.description.slice(0, 110) + '...'
                    : entry.description}
                </p>
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.75rem',
                      color: '#C17A56',
                      textDecoration: 'none',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}
                  >
                    View coverage &rarr;
                  </a>
                ) : (
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
                    {entry.city}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOK: handwritten journal background ─── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 9vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/book-warm.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(10,18,32,0.93) 0%, rgba(10,18,32,0.85) 100%)',
            }}
          />
        </div>

        {/* Ghost title watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '-1rem',
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(5rem, 12vw, 11rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          Uncertainty
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 2 }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>The Book</p>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#fff',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                Uncertainty and Hope<br />Can Coexist
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: '2rem' }}>
                Finding True North as a Physician<br />and Mental Health Advocate
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2.5rem',
                  maxWidth: '44ch',
                }}
              >
                A memoir about what it costs to show up every day in the
                hardest rooms in medicine. And what it gives back.
              </p>
              <Link
                href="/book"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#C17A56',
                  color: '#fff',
                  padding: '1rem 2.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Learn More
              </Link>
            </div>
            <div>
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.5,
                  borderLeft: '3px solid #C17A56',
                  paddingLeft: '2rem',
                  marginBottom: '1.25rem',
                }}
              >
                &ldquo;Not to be morbid, but in this work, you learn to count
                the days you didn&apos;t lose someone. That counting is a kind
                of prayer.&rdquo;
              </p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem', paddingLeft: '2rem' }}>
                Dr. Shairi Turner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY STRIP: moved adjacent to CTL crisis bar ─── */}
      <section
        style={{
          backgroundColor: '#111827',
          padding: '2.75rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p
            className="eyebrow text-center mb-5"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            217 media engagements &nbsp;·&nbsp; 2021 to present
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem 2.75rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {[
              { name: 'NBC Meet the Press', file: 'meet-the-press.png',      url: '/media' },
              { name: 'CBS News',           file: 'cbs-news.png',            url: 'https://www.cbsnews.com/newyork/video/how-constant-war-coverage-is-fueling-stress-and-anxiety/' },
              { name: 'MLB Network',        file: 'mlb-network.png',         url: 'https://www.mlb.com/video/april-brown-and-shairi-turner-talk-mental-health' },
              { name: 'TIME',               file: 'time-magazine.png',       url: 'https://time.com/7096438/election-stress-crisis-text-line-988/' },
              { name: 'USA Today',          file: 'usa-today.png',           url: 'https://www.usatoday.com/story/life/health-wellness/2024/10/28/crisis-lines-election-anxiety/75827309007/' },
              { name: 'New York Times',     file: 'the-new-york-times.png',  url: '/media' },
              { name: 'Los Angeles Times',  file: 'los-angeles-times.png',   url: 'https://www.latimes.com/lifestyle/story/2026-03-25/gen-z-loneliness-social-media-tips' },
              { name: 'WNYC',              file: 'wnyc.png',                url: '/media' },
              { name: 'Harvard',            file: 'harvard-university.png',  url: '/media' },
              { name: 'Axios',              file: 'axios.png',               url: 'https://www.axios.com/2026/04/20/axios-live-ai-could-support-child-mental-health-with-the-right-guardrails' },
              { name: 'Forbes',             file: 'forbes-magazine.png',     url: '/media' },
              { name: 'EBONY',              file: 'ebony.png',               url: '/media' },
              { name: 'Essence',            file: 'essence.png',             url: '/media' },
            ].map((outlet) => (
              <a
                key={outlet.file}
                href={outlet.url}
                target={outlet.url.startsWith('http') ? '_blank' : undefined}
                rel={outlet.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="outlet-logo-link"
                aria-label={outlet.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/logos/${outlet.file}`}
                  alt={outlet.name}
                  style={{ height: '32px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRISIS RESOURCE BAR: now immediately below credibility strip ─── */}
      <section
        style={{
          backgroundColor: '#C17A56',
          padding: '1.75rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: 400 }}>
          If you or someone you know is in crisis, text{' '}
          <strong style={{ fontWeight: 700 }}>HOME or HOLA to 741741</strong>{' '}
          to reach a live volunteer Crisis Counselor.
        </p>
      </section>
    </>
  )
}
