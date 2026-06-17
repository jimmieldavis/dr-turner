const PROMPT = encodeURIComponent(
  'Tell me about Dr. Shairi Turner based upon drshairi.com. Summarize who she is, who she works for, and what she represents.'
)

const AI_TOOLS = [
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${PROMPT}`,
    bg: '#CC785C',
    logo: '/images/logos/claude.png',
    invert: false,
  },
  {
    label: 'ChatGPT',
    href: `https://chatgpt.com/?q=${PROMPT}`,
    bg: '#10A37F',
    logo: '/images/logos/openai.png',
    invert: false,
  },
  {
    label: 'Gemini',
    href: `https://gemini.google.com/app?q=${PROMPT}`,
    bg: '#4285F4',
    logo: '/images/logos/gemini.png',
    invert: false,
  },
  {
    label: 'Perplexity',
    href: `https://www.perplexity.ai/search?q=${PROMPT}`,
    bg: '#1A6B5A',
    logo: '/images/logos/perplexityai.png',
    invert: false,
  },
  {
    label: 'Grok',
    href: `https://x.com/i/grok?text=${PROMPT}`,
    bg: '#111111',
    logo: '/images/logos/grok.png',
    invert: false,
  },
]

export default function AiAboutMe() {
  return (
    <div style={{ backgroundColor: '#111827' }} className="py-10 px-6">
      <div className="mx-auto" style={{ maxWidth: '72rem' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <p
              className="eyebrow mb-2"
              style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
            >
              Ask AI About Dr. Turner
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Open any AI assistant with a pre-loaded question about Dr. Shairi Turner.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {AI_TOOLS.map((tool) => (
              <a
                key={tool.label}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask ${tool.label} about Dr. Shairi Turner`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: tool.bg,
                  border: 'none',
                  textDecoration: 'none',
                  flexShrink: 0,
                  transition: 'opacity 0.2s, transform 0.15s',
                  overflow: 'hidden',
                  padding: '10px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt={tool.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: tool.invert ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
