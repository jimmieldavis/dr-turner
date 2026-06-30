import Image from 'next/image'
import Link from 'next/link'
import { OUTLET_STRIP } from '@/data/media'
import BookingBanner from '@/components/BookingBanner'

export default function Home() {
  return (
    <>
      {/* ─── SHARED HEADSHOT BACKGROUND: hero + quote + speaking ─── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/drturner_headshot-2.jpg"
          alt="Dr. Shairi Turner"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
        />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(10,18,35,0.49)',
          }}
        />
        <div
          className="mx-auto"
          style={{
            maxWidth: '72rem',
            width: '100%',
            padding: '0 clamp(1.5rem, 6vw, 4rem) clamp(4rem, 7vw, 6rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <p className="eyebrow mb-4" style={{ color: '#C17A56' }}>
            Physician &nbsp;|&nbsp; Advocate &nbsp;|&nbsp; Author
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
            One of the most visible physician voices on youth mental health in national media.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
            <Link
              href="/about"
              style={{
                display: 'block',
                width: '220px',
                textAlign: 'center',
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
            <Link
              href="/speaking#spotlight"
              style={{
                display: 'block',
                width: '220px',
                textAlign: 'center',
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
              Zac Clark Clip
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK ─── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,18,35,0.49)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', textAlign: 'right' }}>
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)',
              color: '#fff',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.25,
              maxWidth: '22ch',
              marginLeft: 'auto',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;Uncertainty and hope<br />
            can coexist.&rdquo;
          </p>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', letterSpacing: '0.08em', fontWeight: 500 }}>
              Dr. Shairi Turner
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', letterSpacing: '0.04em', fontStyle: 'italic', marginTop: '0.2rem' }}>
              Author, Uncertainty and Hope Can Coexist
            </p>
          </div>
        </div>
      </section>

      </div>{/* end shared headshot background */}

      {/* ─── OUTLET STRIP: scrolling marquee ─── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem 0' }}>
        {/* Background image — scaled down to reduce head prominence */}
        <Image
          src="/images/speaking-audience.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        {/* Dark navy gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,18,35,0.88) 0%, rgba(10,18,35,0.78) 50%, rgba(10,18,35,0.88) 100%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '1.25rem' }}>
          Seen On. Heard On. Published In.
        </p>
        {(() => {
          const MARQUEE_LOGOS: { name: string; file: string; h: number }[] = [
            { name: 'NBC Meet the Press',  file: 'meet-the-press.png',      h: 38 },
            { name: 'CBS News',             file: 'cbs-news.png',             h: 30 },
            { name: 'MLB Network',          file: 'mlb-network.png',          h: 38 },
            { name: 'TIME',                 file: 'time-magazine.png',        h: 26 },
            { name: 'USA Today',            file: 'usa-today.png',            h: 38 },
            { name: 'New York Times',       file: 'the-new-york-times.png',   h: 30 },
            { name: 'Los Angeles Times',    file: 'los-angeles-times.png',    h: 26 },
            { name: 'WNYC',                 file: 'wnyc.png',                 h: 32 },
            { name: 'Harvard',              file: 'harvard-university.png',   h: 36 },
            { name: 'Axios',                file: 'axios.png',                h: 30 },
            { name: 'Forbes',               file: 'forbes-magazine.png',      h: 26 },
            { name: 'EBONY',                file: 'ebony.png',                h: 26 },
            { name: 'Essence',              file: 'essence.png',              h: 26 },
            { name: 'HLTH',                 file: 'hlth.svg',                 h: 32 },
            { name: 'Nike',                 file: 'nike.svg',                 h: 30 },
            { name: "Children's Miracle Network", file: 'cmn.svg',           h: 42 },
            { name: 'FAMU',                 file: 'famu.svg',                 h: 36 },
            { name: 'FSU',                  file: 'fsu.svg',                  h: 36 },
          ]
          const logoItem = (item: typeof MARQUEE_LOGOS[0], idx: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={`/images/logos/${item.file}`}
              alt={item.name}
              style={{
                height: `${item.h}px`,
                width: 'auto',
                maxWidth: '150px',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                opacity: 1,
                flexShrink: 0,
              }}
            />
          )
          return (
            <div style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', width: 'max-content', animation: 'marquee 32s linear infinite' }}>
                {MARQUEE_LOGOS.map((item, i) => logoItem(item, i))}
                {MARQUEE_LOGOS.map((item, i) => logoItem(item, i + MARQUEE_LOGOS.length))}
              </div>
            </div>
          )
        })()}
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <Link href="/media" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C17A56', textDecoration: 'none' }}>
            View Full Media Archive (217) &rarr;
          </Link>
        </div>
        </div>{/* /content */}
      </section>

      <BookingBanner />
    </>
  )
}
