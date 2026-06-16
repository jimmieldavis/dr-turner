import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'The Book | Dr. Shairi Turner',
  description:
    'Uncertainty and Hope Can Coexist: Finding True North as a Physician and Mental Health Advocate. The memoir by Dr. Shairi Turner, MD, MPH.',
}

export default function Book() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#1B2B4B', padding: '6rem 1.5rem 5rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            The Book
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#fff',
              fontStyle: 'italic',
              fontWeight: 400,
              maxWidth: '18ch',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Uncertainty and Hope Can Coexist
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '3rem',
              fontStyle: 'italic',
            }}
          >
            Finding True North as a Physician and Mental Health Advocate
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '58ch',
            }}
          >
            A memoir about what it costs to show up, every day, in the hardest rooms
            in medicine. And what it gives back.
          </p>
        </div>
      </section>

      {/* SYNOPSIS: journal photo background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/book-journal.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8,15,28,0.88)' }} />
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 1 }}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Cover placeholder */}
            <div
              style={{
                backgroundColor: 'rgba(27,43,75,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                aspectRatio: '2/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '3rem',
                textAlign: 'center',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: '1.5rem',
                  color: '#fff',
                  fontStyle: 'italic',
                  lineHeight: '1.4',
                  marginBottom: '2rem',
                }}
              >
                Uncertainty and Hope Can Coexist
              </p>
              <div style={{ width: '3rem', height: '1px', backgroundColor: '#C17A56', marginBottom: '2rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', letterSpacing: '0.08em' }}>
                DR. SHAIRI TURNER, MD, MPH
              </p>
              <p
                style={{
                  marginTop: '3rem',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Cover art forthcoming
              </p>
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow mb-6" style={{ color: '#C17A56' }}>About the Book</p>

              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 300,
                  marginBottom: '1.75rem',
                }}
              >
                There is a particular kind of steadiness required when someone texts
                you at 2 a.m. because they have nowhere else to go. Dr. Shairi Turner
                has been building the infrastructure for that steadiness her entire career.
              </p>

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                This is a book about uncertainty, held honestly. About a Bronx-raised
                girl who went to Fieldston, Stanford, Mass General, and Harvard, and then
                chose the hardest rooms anyway. About building a healthcare system for
                incarcerated youth. About a close family friend dying by suicide in a cell.
                About watching a field she loves struggle to reach the people who need it most.
              </p>

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem' }}>
                And it is a book about hope, held with equal honesty. Because hope
                that pretends uncertainty does not exist is not hope. It is avoidance.
                Dr. Turner has spent her career refusing to look away. This book is
                the account of what she saw.
              </p>

              <blockquote
                className="font-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  color: '#fff',
                  borderLeft: '3px solid #C17A56',
                  paddingLeft: '1.5rem',
                  lineHeight: 1.5,
                  marginBottom: '2rem',
                }}
              >
                &ldquo;Not to be morbid, but in this work, you learn to count the days
                you didn&apos;t lose someone. That counting is a kind of prayer.&rdquo;
              </blockquote>

              <div
                style={{
                  backgroundColor: 'rgba(193,122,86,0.12)',
                  padding: '1.5rem 2rem',
                  borderLeft: '3px solid #C17A56',
                }}
              >
                <p style={{ fontSize: '0.9375rem', color: '#fff', fontWeight: 500, marginBottom: '0.25rem' }}>
                  Publication
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                  Manuscript complete. Publication timeline: [TBD]. Updates available by joining the mailing list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS BOOK IS FOR: navy */}
      <section style={{ backgroundColor: '#0D1B2A', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>Who This Book Is For</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                who: 'Parents',
                why:
                  'You know something is shifting in your child and you are not sure how to meet it. This book will help you stay present without panic.',
              },
              {
                who: 'Clinicians',
                why:
                  'You were trained to hold the line. This book asks what that line is actually costing you, and the people on the other side of it.',
              },
              {
                who: 'Policy leaders',
                why:
                  'You have the levers. This book makes the case for which ones to pull, and why the ones that look right often produce the wrong outcomes.',
              },
            ].map((item) => (
              <div
                key={item.who}
                style={{
                  borderTop: '2px solid #C17A56',
                  paddingTop: '1.5rem',
                }}
              >
                <h3 className="font-serif mb-3" style={{ fontSize: '1.25rem', color: '#fff' }}>
                  {item.who}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAILING LIST CTA */}
      <section style={{ backgroundColor: '#C17A56', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2
          className="font-serif mb-4"
          style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)', color: '#fff' }}
        >
          Publication news when it is ready.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '2rem' }}>
          Leave your name and email and you will hear directly from Dr. Turner when the book is available.
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
          Join the List
        </Link>
      </section>
    </>
  )
}
