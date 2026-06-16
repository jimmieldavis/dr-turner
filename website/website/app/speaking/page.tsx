import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Speaking | Dr. Shairi Turner',
  description:
    'Book Dr. Shairi Turner for keynotes, panels, and media. Topics: youth mental health, crisis intervention, health equity, parenting.',
}

const TOPICS = [
  {
    title: 'Youth Mental Health: What the Data Cannot Capture',
    description:
      'Dr. Turner has sat with the numbers longer than almost anyone in this field. 70 percent of Crisis Text Line texters are under 24. But no data point explains the seventh-grader who texts at 2 a.m. because she has nowhere else to go. This keynote holds both: the scope of the crisis and the singular human moment inside it.',
    audiences: ['Healthcare systems', 'Educational institutions', 'Parent and family organizations', 'Policy forums'],
  },
  {
    title: 'The Crisis You Cannot See Coming',
    description:
      "What does crisis intervention actually look like when a phone call feels impossible? What does it look like to build a system that reaches the kid who will not call 988 but will text a stranger? Dr. Turner draws on CTL's real-time trend data and her own clinical experience to show what works and what we keep getting wrong.",
    audiences: ['Mental health organizations', 'Corporate wellness teams', 'Hospital and health systems', 'Government and policy audiences'],
  },
  {
    title: 'Health Equity Is Not a Tagline',
    description:
      'She built a healthcare system for incarcerated youth in Florida from scratch. She watched Black and brown kids receive a different standard of care, not because anyone decided that was acceptable, but because no one decided otherwise. This talk names the specific design failures in systems that claim to serve everyone equally and proposes the structural corrections that actually move the needle.',
    audiences: ['Foundations and nonprofits', 'Academic medical centers', 'State and federal government', 'Diversity, equity, and inclusion leadership'],
  },
  {
    title: 'Parenting in the Age of the Mental Health Crisis',
    description:
      'One in five children in America has a diagnosable mental health condition. Most parents know something is wrong before the diagnosis arrives. Dr. Turner speaks to parents and educators with the directness of a physician and the perspective of a mother. No wellness clichés. No generic advice. Practical, evidence-informed tools grounded in what actually helps.',
    audiences: ['Schools and universities', 'Parent associations', 'Employee resource groups (parents)', 'Community organizations'],
  },
  {
    title: 'The Physician Who Chose the Hard Room',
    description:
      'A career retrospective for medical and public health audiences. What happens when you have every credential the field offers and choose to use them in the least comfortable places? Dr. Turner traces her arc from Mass General to juvenile justice to Crisis Text Line and makes the case that excellence belongs in the hardest rooms, not just the most prestigious ones.',
    audiences: ['Medical schools and residency programs', 'Public health graduate programs', 'Physician and clinician audiences', 'HBCU leadership conferences'],
  },
]

const FORMATS = [
  {
    label: 'Keynote',
    detail: '45 to 60 minutes. Opening or closing. Full arc, story-led, actionable close.',
  },
  {
    label: 'Fireside Chat',
    detail: '30 to 45 minutes. Moderated conversation. Dr. Turner does not need a script.',
  },
  {
    label: 'Panel',
    detail: 'Expert panelist. She will be the most prepared person on stage.',
  },
  {
    label: 'Media / Press',
    detail: 'Broadcast, print, podcast, radio. 217 engagements and counting.',
  },
  {
    label: 'Workshop',
    detail: 'Half-day or full-day. Interactive. Evidence-based takeaways for clinical, policy, or leadership teams.',
  },
]

const PAST = [
  'NBC Meet the Press',
  'MLB Network',
  'TIME Magazine',
  'USA Today',
  'Harvard Center for Suicide Research',
  'HLTH Conference',
  'Florida State University',
  'Florida A&M University',
  'Nike / Adelphi University',
  'WNYC Brian Lehrer Show',
  'Axios Live',
  "Children's Miracle Network",
  'Kaiser Permanente',
  'Delta Kappa Gamma',
  'CBCF Annual Legislative Conference',
  'U.S. Congress (CTL Briefing)',
]

export default function Speaking() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#1B2B4B', padding: '6rem 1.5rem 4rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Speaking
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: '#fff',
              maxWidth: '22ch',
              lineHeight: 1.1,
            }}
          >
            She brings a room to silence,<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>then gets them to act.</span>
          </h1>
          <p
            style={{
              marginTop: '2rem',
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '56ch',
              lineHeight: '1.7',
            }}
          >
            217 media engagements. Congressional briefings. Harvard. MLB Network.
            Nike advisory panels. She has spoken in rooms that needed a physician
            and rooms that needed a mother. She is always both.
          </p>
        </div>
      </section>

      {/* TOPICS: conference hall background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/speaking-conference.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,18,35,0.91)' }} />
        </div>

        <div className="mx-auto" style={{ maxWidth: '72rem', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow mb-10" style={{ color: '#C17A56' }}>Signature Topics</p>
          <div className="flex flex-col gap-12">
            {TOPICS.map((topic, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 gap-8 items-start"
                style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="md:col-span-2">
                  <h2
                    className="font-serif mb-4"
                    style={{ fontSize: '1.375rem', color: '#fff', lineHeight: 1.3 }}
                  >
                    {topic.title}
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
                    {topic.description}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-4" style={{ color: '#C17A56' }}>
                    Audiences
                  </p>
                  <ul className="flex flex-col gap-2">
                    {topic.audiences.map((a, j) => (
                      <li key={j} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS + PAST STAGES: navy */}
      <section style={{ backgroundColor: '#0D1B2A', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 4rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Formats</p>
              <div className="flex flex-col gap-6">
                {FORMATS.map((f, i) => (
                  <div
                    key={i}
                    style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}
                  >
                    <p style={{ fontWeight: 500, color: '#fff', marginBottom: '0.375rem' }}>
                      {f.label}
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.65' }}>
                      {f.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Past Stages and Outlets</p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.625rem 1.5rem',
                }}
              >
                {PAST.map((stage, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.55)',
                      paddingBottom: '0.625rem',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {stage}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COI NOTE */}
      <section style={{ backgroundColor: '#111827', padding: '2rem 1.5rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', lineHeight: '1.65' }}>
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Honoraria note:</strong> For engagements where Dr. Turner represents Crisis Text Line,
            honoraria are paid to CTL per organizational policy. For engagements in her capacity as a physician,
            author, or independent mental health expert, personal speaking fees apply. Please specify context
            in your inquiry.
          </p>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ backgroundColor: '#C17A56', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2
          className="font-serif mb-4"
          style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)', color: '#fff' }}
        >
          Ready to bring her to your audience?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '48ch', margin: '0 auto 2rem' }}>
          Include your event date, format, and audience size. She responds to every inquiry.
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
          Submit a Booking Inquiry
        </Link>
      </section>
    </>
  )
}
