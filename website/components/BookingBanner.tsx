import Link from 'next/link'

export default function BookingBanner({ hideMediaPress = false }: { hideMediaPress?: boolean }) {
  return (
    <section style={{ backgroundColor: '#C17A56', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h2
        className="font-serif mb-5"
        style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', color: '#fff' }}
      >
        Bring Dr. Shairi to Your Audience
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#1B2B4B',
            color: '#fff',
            padding: '1rem 2.25rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Inquire
        </Link>
        {!hideMediaPress && (
          <Link
            href="/media"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#fff',
              padding: '1rem 2.25rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Media &amp; Press
          </Link>
        )}
      </div>
    </section>
  )
}
