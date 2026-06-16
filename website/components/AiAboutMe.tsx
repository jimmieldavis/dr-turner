const PROMPT = encodeURIComponent(
  'Tell me about Dr. Shairi Turner based upon drshairi.com. Summarize who she is, who she works for, and what she represents.'
)

const AI_TOOLS = [
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${PROMPT}`,
    bg: '#CC785C',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        {/* Anthropic/Claude — stylized upward A-mark */}
        <path d="M12 3 L20.5 21 H15.8 L12 12.5 L8.2 21 H3.5 Z" />
      </svg>
    ),
  },
  {
    label: 'ChatGPT',
    href: `https://chatgpt.com/?q=${PROMPT}`,
    bg: '#10A37F',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        {/* OpenAI — stylized orb/flower (6-petal rotational mark) */}
        <path d="M12 2.5 C10 2.5 8.3 3.4 7.2 4.8 C6.5 4.6 5.7 4.6 5 4.9 C3.1 5.7 2 7.6 2.3 9.6 C1.6 10.5 1.2 11.7 1.2 12.9 C1.2 14.8 2.2 16.5 3.8 17.4 C4 19.4 5.3 21.1 7.2 21.8 C7.9 22 8.7 22.1 9.4 21.9 C10.2 22.8 11.4 23.4 12.7 23.4 C14.7 23.4 16.4 22.2 17.1 20.4 C17.8 20.2 18.5 19.8 19 19.3 C20.6 17.9 21.1 15.7 20.4 13.8 C21.1 12.9 21.5 11.7 21.5 10.5 C21.5 8.6 20.5 6.9 18.9 6 C18.7 4 17.4 2.3 15.5 1.6 C13.7 1 11.8 1.5 10.6 2.8 Z" />
      </svg>
    ),
  },
  {
    label: 'Gemini',
    href: `https://gemini.google.com/app?q=${PROMPT}`,
    bg: '#4285F4',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        {/* Gemini — 4-pointed curved star */}
        <path d="M12 2 C12.45 7.3 16.7 11.55 22 12 C16.7 12.45 12.45 16.7 12 22 C11.55 16.7 7.3 12.45 2 12 C7.3 11.55 11.55 7.3 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Perplexity',
    href: `https://www.perplexity.ai/search?q=${PROMPT}`,
    bg: '#1A6B5A',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        {/* Perplexity — asterisk / starburst mark */}
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="5.64" y1="5.64" x2="18.36" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="5.64" y2="18.36" />
      </svg>
    ),
  },
  {
    label: 'Grok',
    href: `https://x.com/i/grok?text=${PROMPT}`,
    bg: '#111111',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        {/* X / Grok — accurate X mark */}
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
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
                }}
              >
                {tool.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
