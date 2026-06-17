const PROMPT = encodeURIComponent(
  'Tell me about Dr. Shairi Turner based upon drshairi.com. Summarize who she is, who she works for, and what she represents.'
)

const AI_TOOLS = [
  { label: 'Claude',      href: `https://claude.ai/new?q=${PROMPT}`,                 logo: '/images/logos/claude.png' },
  { label: 'ChatGPT',    href: `https://chatgpt.com/?q=${PROMPT}`,                   logo: '/images/logos/openai-black.png' },
  { label: 'Gemini',     href: `https://gemini.google.com/app?q=${PROMPT}`,          logo: '/images/logos/gemini.png' },
  { label: 'Perplexity', href: `https://www.perplexity.ai/search?q=${PROMPT}`,       logo: '/images/logos/perplexityai.png' },
  { label: 'Grok',       href: `https://x.com/i/grok?text=${PROMPT}`,               logo: '/images/logos/grok-black.png' },
]

export default function AiAboutMe() {
  return (
    <div style={{ backgroundColor: '#111827' }} className="py-10 px-6">
      <div className="mx-auto" style={{ maxWidth: '72rem' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div style={{ minWidth: 0, flexShrink: 1 }}>
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

          <div className="flex gap-5 flex-shrink-0">
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
                  width: '36px',
                  height: '36px',
                  textDecoration: 'none',
                  flexShrink: 0,
                  opacity: 0.5,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt={tool.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
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
