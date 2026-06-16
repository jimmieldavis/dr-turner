export type MediaEntry = {
  id: number
  title: string
  outlet: string
  type: string
  date: string
  year: number
  city: string
  url: string
  description: string
  tier: string
  featured: boolean
}

// Featured Tier 1 entries surfaced on the website
// Full dataset of 217 entries lives at: https://jimmieldavis.github.io/dr-turner-media/
export const FEATURED_MEDIA: MediaEntry[] = [
  {
    id: 36,
    title: 'Live Free 999 Satellite Media Tour',
    outlet: '49 National & Regional Outlets',
    type: 'TV',
    date: '2024-02-28',
    year: 2024,
    city: 'National',
    url: 'https://www.crisistextline.org/blog/2024/02/28/carmela-wallace-and-live-free-999-release-national-psa-aiming-to-normalize-the-conversation-around-mental-health-and-substance-dependency/',
    description:
      '49 outlets. 366 secured airings. 12.4 million impressions. Co-appeared with Carmela Wallace (Juice WRLD\'s mother). The largest single media event in Crisis Text Line history.',
    tier: 'Tier 1+',
    featured: true,
  },
  {
    id: 38,
    title: 'Stressed About the Election?',
    outlet: 'TIME Magazine',
    type: 'Article',
    date: '2024-10-01',
    year: 2024,
    city: 'National',
    url: 'https://time.com/7096438/election-stress-crisis-text-line-988/',
    description:
      'Extensively quoted on election-season mental health surges. "Preparing for what we anticipate will be a surge." Major national placement.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 39,
    title: 'On Election Night, Crisis Lines Won\'t Stop Ringing',
    outlet: 'USA Today',
    type: 'Article',
    date: '2024-10-28',
    year: 2024,
    city: 'National',
    url: 'https://www.usatoday.com/story/life/health-wellness/2024/10/28/crisis-lines-election-anxiety/75827309007/',
    description:
      'Primary expert source on election anxiety and crisis line preparation.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 37,
    title: 'MLB Now',
    outlet: 'MLB Network',
    type: 'TV',
    date: '2024-06-01',
    year: 2024,
    city: 'National',
    url: 'https://www.mlb.com/video/april-brown-and-shairi-turner-talk-mental-health',
    description:
      'Live segment with April Brown, SVP at Major League Baseball, on nationally televised MLB Network. Youth athlete mental health and the CTL-MLB Partnership.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 41,
    title: 'The Brian Lehrer Show',
    outlet: 'WNYC',
    type: 'Radio',
    date: '2024-09-01',
    year: 2024,
    city: 'New York, NY',
    url: '',
    description:
      'Live on-air with WNYC\'s flagship political and cultural program on election stress and CTL resources.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 7,
    title: 'Suicide Research and Prevention Webinar',
    outlet: 'Harvard Medical School',
    type: 'Conference',
    date: '2025-12-19',
    year: 2025,
    city: 'Boston, MA',
    url: 'https://cff.hms.harvard.edu',
    description:
      'Harvard Center for Suicide Research and Prevention. Crisis text-based intervention and data-driven prevention strategies.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 22,
    title: 'MPH Commencement Keynote',
    outlet: 'Florida State University',
    type: 'Keynote',
    date: '2025-05-01',
    year: 2025,
    city: 'Tallahassee, FL',
    url: '',
    description:
      'Keynote address to FSU MPH graduating class on public health leadership, mental health advocacy, and career trajectory.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 18,
    title: 'Freshmen Forum Keynote',
    outlet: 'Florida A&M University',
    type: 'Keynote',
    date: '2025-09-18',
    year: 2025,
    city: 'Tallahassee, FL',
    url: '',
    description:
      'Keynote on mental health and wellbeing. Announced the FAMU x Crisis Text Line Partnership: text RATTLER to 741741.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 54,
    title: '"The Kids Are Not Right" Panel',
    outlet: 'HLTH 2024 / Kaiser Permanente',
    type: 'Conference',
    date: '2024-10-07',
    year: 2024,
    city: 'Las Vegas, NV',
    url: '',
    description:
      'Panelist at HLTH Conference 2024, the premier health technology conference, on the youth mental health crisis.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 16,
    title: 'In the Cellar 2025 | Emcee',
    outlet: 'Children\'s Miracle Network',
    type: 'Keynote',
    date: '2025-09-16',
    year: 2025,
    city: 'Milwaukee, WI',
    url: '',
    description:
      'Emceed the annual gala at Harley-Davidson Museum. A record $1.18 million raised for Children\'s Miracle Network Hospitals.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 13,
    title: 'Mental Health Guidelines for Youth Sport Advisory Panel',
    outlet: 'Adelphi University / Nike / Movember',
    type: 'Conference',
    date: '2025-11-17',
    year: 2025,
    city: 'New York, NY',
    url: '',
    description:
      'Advisory panel to advance mental health guidelines for youth sport across the United States. Partners: Adelphi University, Nike, Movember.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 1,
    title: 'How Constant War Coverage Is Fueling Stress and Anxiety',
    outlet: 'CBS News New York',
    type: 'TV',
    date: '2026-03-18',
    year: 2026,
    city: 'New York, NY',
    url: 'https://www.cbsnews.com/newyork/video/how-constant-war-coverage-is-fueling-stress-and-anxiety/',
    description:
      'Expert segment on why global uncertainty takes a toll on mental health and how people can manage fear and anxiety.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 2,
    title: 'Loneliness in Gen Z',
    outlet: 'Los Angeles Times',
    type: 'Article',
    date: '2026-03-25',
    year: 2026,
    city: 'Los Angeles, CA',
    url: 'https://www.latimes.com/lifestyle/story/2026-03-25/gen-z-loneliness-social-media-tips',
    description:
      'Primary expert source on the Gen Z loneliness crisis. Clinical context and CTL data on isolation trends.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 210,
    title: 'Building Digital Safety Infrastructure in the AI Era',
    outlet: 'Axios Live / Roblox Expert Voices Roundtable',
    type: 'Panel',
    date: '2026-04-15',
    year: 2026,
    city: 'Washington, DC',
    url: 'https://www.axios.com/2026/04/20/axios-live-ai-could-support-child-mental-health-with-the-right-guardrails',
    description:
      'Expert roundtable on AI-era child safety and mental health guardrails.',
    tier: 'Tier 1',
    featured: true,
  },
]

// Outlet logos/names for credibility strip (Tier 1 placements)
export const OUTLET_STRIP = [
  'NBC Meet the Press',
  'CBS News',
  'MLB Network',
  'TIME',
  'USA Today',
  'New York Times',
  'Los Angeles Times',
  'WNYC',
  'Harvard',
  'Axios',
  'Forbes',
  'EBONY',
  'Essence',
]
