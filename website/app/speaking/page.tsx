import Image from 'next/image'
import Link from 'next/link'
import BookingBanner from '@/components/BookingBanner'
import RotatingSpotlight from '@/components/RotatingSpotlight'

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
  // Tier 1+ broadcast
  'NBC Meet the Press',
  // Tier 1 | TV
  'CBS News',
  'MLB Network',
  'Scripps News',
  // Tier 1 | National print / digital
  'TIME Magazine',
  'USA Today',
  'New York Times',
  'Los Angeles Times',
  'CNN',
  'Forbes',
  'EBONY',
  'Essence',
  'Axios Live',
  // Tier 1 | Radio / podcast
  'WNYC / Brian Lehrer Show',
  'SiriusXM / Mornings with Zerlina',
  'iHeart Radio / Black Effect Network',
  'Nike No Off Season Podcast',
  // Tier 1 | Conference
  'Harvard Center for Suicide Research',
  'HLTH Conference',
  'CBCF Annual Legislative Conference',
  'MLB Six Innings Conversation',
  'Children\'s Miracle Network',
  'Florida State University',
  'Florida A&M University',
  'Adelphi University / Nike / Movember',
  // Tier 1 | Policy / government
  'U.S. Congress (CTL Briefing)',
  'TFAH Pain in the Nation Briefing',
]

export default function Speaking() {
  return (
    <>
      {/* PAGE HEADER: full-bleed photo hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Image
          src="/images/drturner_axios_20260420.webp"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'left top' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,18,35,0.15) 0%, rgba(10,18,35,0.45) 50%, rgba(10,18,35,0.75) 100%)', zIndex: 0 }} />
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
        </div>
      </section>

      {/* TOPICS: conference hall background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '2rem clamp(1.5rem, 6vw, 4rem)',
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
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '64ch',
              lineHeight: '1.7',
              marginBottom: '3rem',
            }}
          >
            217 media engagements. Congressional briefings. Harvard. MLB Network.
            Nike advisory panels. She has spoken in rooms that needed a physician, rooms that needed a mother, and rooms that needed a voice for the unheard.
          </p>
          <p className="eyebrow mb-10" style={{ color: '#C17A56' }}>Signature Topics</p>
          <div className="flex flex-col gap-10">
            {TOPICS.map((topic, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '2px solid rgba(193,122,86,0.5)',
                  paddingLeft: '1.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h2
                      className="font-serif mb-3"
                      style={{ fontSize: '1.25rem', color: '#fff', lineHeight: 1.3, fontWeight: 600 }}
                    >
                      {topic.title}
                    </h2>
                    <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
                      {topic.description}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3" style={{ color: '#C17A56', fontSize: '0.625rem' }}>
                      Audiences
                    </p>
                    <ul className="flex flex-col gap-1">
                      {topic.audiences.map((a, j) => (
                        <li key={j} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="spotlight">
        <RotatingSpotlight />
      </div>

      {/* FORMATS + PAST STAGES: navy */}
      <section style={{ backgroundColor: '#0D1B2A', padding: '2rem clamp(1.5rem, 6vw, 4rem)' }}>
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

      <BookingBanner />
    </>
  )
}
