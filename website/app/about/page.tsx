import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About | Dr. Shairi Turner',
  description:
    'The career arc, the conviction, and the work of Dr. Shairi Turner, MD, MPH. Chief Health Officer, Crisis Text Line.',
}

const CAREER = [
  {
    role: 'Chief Health Officer',
    org: 'Crisis Text Line',
    period: '2021 to present',
    note:
      "Oversees Clinical Supervision, Public Policy, and co-leads U.S. Services. CTL's primary external spokesperson. 12.4 million media impressions in a single 2024 satellite media tour.",
  },
  {
    role: 'Deputy Secretary for Health',
    org: 'Florida Department of Health',
    period: 'Prior',
    note:
      "State-level health leadership with broad jurisdiction over Florida's public health infrastructure.",
  },
  {
    role: 'Director, Juvenile Justice Health Services',
    org: 'Florida Department of Juvenile Justice',
    period: 'Prior',
    note:
      'First person to hold this role in Florida history. Built the healthcare system for incarcerated youth from the ground up.',
  },
]

const EDUCATION = [
  { degree: 'MPH', school: 'Harvard School of Public Health' },
  { degree: 'Residency, Internal Medicine', school: 'Massachusetts General Hospital / Harvard' },
  { degree: 'MD', school: 'Case Western Reserve University School of Medicine' },
  { degree: 'BS, Biology', school: 'Stanford University' },
  { degree: 'K-12', school: 'The Fieldston School, New York City' },
]

const TOPICS = [
  'Youth mental health crisis',
  'Suicide prevention and crisis intervention',
  'Trauma-informed care',
  'Mental health in juvenile justice',
  'Black physician experience and health equity',
  'Parenting and family resilience',
  "Social media's impact on youth",
  'Athlete mental health',
  'Holiday and seasonal stress',
  'Bullying, doomscrolling, war-news anxiety',
]

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#1B2B4B', padding: '6rem 1.5rem 4rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            About
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
            She didn&apos;t plan this career.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>She followed it.</span>
          </h1>
        </div>
      </section>

      {/* BIO SPLIT: photo left, text right — dark background */}
      <section style={{ backgroundColor: '#0D1B2A', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <div
                style={{
                  top: '7rem',
                  aspectRatio: '3/4',
                  position: 'sticky',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/headshot-2.jpg"
                  alt="Dr. Shairi Turner"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', mixBlendMode: 'luminosity' }}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow mb-6" style={{ color: '#C17A56' }}>Who she is</p>

              <p
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.75',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                There was no five-year plan. A dog bite as a child planted a seed
                that eventually led her to medicine. A phone call about a young
                man dying in a Florida jail cell redirected a clinical career into
                systems reform. An email from Crisis Text Line arrived at exactly
                the right moment.
              </p>

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                Dr. Shairi Turner grew up in the Bronx, the daughter of Black theater
                artists. She attended Fieldston, Stanford, Case Western,
                Massachusetts General Hospital, and Harvard. She had access to every
                corridor that medicine opens. She chose the ones where the problems
                were hardest.
              </p>

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                As Florida&apos;s first Director of Juvenile Justice Health Services, she
                built a healthcare system for incarcerated youth that did not exist when
                she arrived. As Deputy Secretary for Health at the Florida Department of
                Health, she operated at the intersection of policy, clinical care, and
                political reality. As Chief Health Officer at Crisis Text Line, she
                oversees Clinical Supervision, Public Policy, and co-leads U.S.
                Services, while serving as CTL&apos;s primary voice in national media.
              </p>

              <blockquote
                className="font-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  color: '#fff',
                  borderLeft: '3px solid #C17A56',
                  paddingLeft: '1.5rem',
                  margin: '2.5rem 0',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;I recognize that I come from a community that&apos;s in crisis.
                I come from a culture that&apos;s in crisis. And I cannot separate
                myself from that.&rdquo;
              </blockquote>

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                Her media footprint spans 217 catalogued engagements: NBC Meet the
                Press, CBS News, MLB Network, CNN, TIME, USA Today, the New York
                Times, the Los Angeles Times, WNYC, Harvard, Axios, EBONY, Essence.
                A single 2024 satellite media tour generated 12.4 million impressions
                across 49 outlets and 366 secured airings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE: photo background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/speaking-stage.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,26,46,0.92)' }} />
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow mb-10" style={{ color: '#C17A56' }}>Career Arc</p>
          <div className="flex flex-col gap-8">
            {CAREER.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 gap-4 items-start"
                style={{ paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div>
                  <p style={{ fontSize: '0.8125rem', color: '#C17A56', fontWeight: 500, marginBottom: '0.25rem' }}>
                    {item.period}
                  </p>
                  <p className="font-serif" style={{ fontSize: '1.0625rem', color: '#fff' }}>
                    {item.org}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p style={{ fontWeight: 500, color: '#fff', marginBottom: '0.5rem' }}>
                    {item.role}
                  </p>
                  <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)' }}>
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + TOPICS: navy */}
      <section style={{ backgroundColor: '#1B2B4B', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Education</p>
              <ul className="flex flex-col gap-4">
                {EDUCATION.map((item, i) => (
                  <li key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <p style={{ fontWeight: 500, color: '#fff', fontSize: '0.9375rem' }}>
                      {item.degree}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginTop: '0.125rem' }}>
                      {item.school}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Topics She Owns</p>
              <ul className="flex flex-col gap-3">
                {TOPICS.map((topic, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'rgba(255,255,255,0.65)',
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.45em',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#C17A56',
                        display: 'block',
                      }}
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#C17A56', padding: '5rem 1.5rem', textAlign: 'center' }}
      >
        <h2
          className="font-serif mb-8"
          style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', color: '#fff' }}
        >
          Ready to bring her voice to your audience?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/speaking" style={{
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
            Booking Inquiry
          </Link>
          <Link href="/contact" style={{
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
          }}>
            Media &amp; Press
          </Link>
        </div>
      </section>
    </>
  )
}
