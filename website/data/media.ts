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
// Ordered by Tier then impact: Tier 1+ → national TV → national print → radio → academic → conference → keynote → advisory
// Full dataset of 217 entries lives at: https://jimmieldavis.github.io/dr-turner-media/
export const FEATURED_MEDIA: MediaEntry[] = [
  // --- Tier 1+ ---
  {
    id: 301,
    title: 'The Mental Health Crisis in America',
    outlet: 'NBC Meet the Press',
    type: 'TV',
    date: '2024-12-31',
    year: 2024,
    city: 'National',
    url: 'https://www.youtube.com/watch?v=DksdM8hNowM&t=1909s',
    description:
      'Panel segment on the national mental health crisis. Host Kristen Welker: "Thank you so much for making us smarter and better on this really important topic."',
    tier: 'Tier 1+',
    featured: true,
  },
  {
    id: 36,
    title: 'Live Free 999 Satellite Media Tour',
    outlet: 'Live Free 999',
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
  // --- Tier 1 | National TV ---
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
    id: 37,
    title: 'MLB Now',
    outlet: 'MLB Network',
    type: 'TV',
    date: '2024-06-01',
    year: 2024,
    city: 'National',
    url: 'https://youtu.be/_HDB6pslwkM',
    description:
      'Live segment with April Brown, SVP at Major League Baseball, on nationally televised MLB Network. Youth athlete mental health and the CTL-MLB Partnership.',
    tier: 'Tier 1',
    featured: true,
  },
  // --- Tier 1 | National Print / Digital ---
  {
    id: 38,
    title: 'Election Stress & 988',
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
    type: 'Article',
    date: '2026-04-15',
    year: 2026,
    city: 'Washington, DC',
    url: 'https://www.axios.com/2026/04/20/axios-live-ai-could-support-child-mental-health-with-the-right-guardrails',
    description:
      'Expert roundtable on AI-era child safety and mental health guardrails.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 303,
    title: 'Suicide Prevention Strategies',
    outlet: 'Forbes',
    type: 'Article',
    date: '[TBD]',
    year: 2024,
    city: 'National',
    url: 'https://www.forbes.com/health/mind/suicide-prevention-strategies/',
    description:
      'Featured expert on evidence-based suicide prevention strategies and crisis intervention. Forbes Health coverage of mental health resources and clinical approaches.',
    tier: 'Tier 1',
    featured: true,
  },
  {
    id: 122,
    title: "Nike <em>No Off Season</em> Podcast",
    outlet: 'Nike TRAINED / Apple Podcasts / Spotify',
    type: 'Podcast',
    date: '2022-05-10',
    year: 2022,
    city: 'National',
    url: 'https://podcasts.apple.com/us/podcast/no-off-season-launches/id1414073313?i=1000560257592',
    description:
      '9-episode mental health podcast series co-hosted with Natalia Dayan (LMSW). Guests include Karl-Anthony Towns, Raven Saunders, and Megan Bartlett. 400,000+ downloads. Covered by EBONY, Essence, and Footwear News.',
    tier: 'Tier 1+',
    featured: true,
  },
  {
    id: 85,
    title: 'As Gun Violence Reaches Record Levels, Underlying Trauma May Be Building',
    outlet: 'CNN',
    type: 'Article',
    date: '2023-04-17',
    year: 2023,
    city: 'National',
    url: 'https://www.cnn.com/2023/04/17/health/mass-shootings-mental-health/',
    description:
      'Extensively quoted on the mental health toll of gun violence and mass tragedy. People reach out to CTL "to establish a sense of stability and calm" after mass tragedies.',
    tier: 'Tier 1',
    featured: true,
  },
  // --- Tier 1 | Radio ---
  {
    id: 41,
    title: 'The Brian Lehrer Show',
    outlet: 'WNYC',
    type: 'Radio',
    date: '2024-11-04',
    year: 2024,
    city: 'New York, NY',
    url: 'https://www.wnycstudios.org/podcasts/bl/episodes/the-brian-lehrer-show-2024-11-04',
    description:
      'Live on-air with WNYC\'s flagship political and cultural program on election stress and CTL resources.',
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
