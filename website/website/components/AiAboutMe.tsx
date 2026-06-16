const PROMPT = encodeURIComponent(
  'Tell me about Dr. Shairi Turner based upon drshairi.com. Summarize who she is, who she works for, and what she represents.'
)

const AI_TOOLS = [
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${PROMPT}`,
    color: '#D97757',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    label: 'ChatGPT',
    href: `https://chatgpt.com/?q=${PROMPT}`,
    color: '#10A37F',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.π 19.946a4.5 4.5 0 0 1-5.38-1.642zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.13a4.5 4.5 0 0 1-1.661-6.234zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.816 2.782a4.504 4.504 0 0 1-.676 8.123v-5.677a.79.79 0 0 0-.397-.673zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    label: 'Gemini',
    href: `https://gemini.google.com/app?q=${PROMPT}`,
    color: '#4285F4',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: 'Perplexity',
    href: `https://www.perplexity.ai/search?q=${PROMPT}`,
    color: '#20B2AA',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Grok',
    href: `https://x.com/i/grok?text=${PROMPT}`,
    color: '#1DA1F2',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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

          <div className="flex flex-wrap gap-2">
            {AI_TOOLS.map((tool) => (
              <a
                key={tool.label}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-btn"
                aria-label={`Ask ${tool.label} about Dr. Shairi Turner`}
              >
                <span style={{ color: tool.color }}>{tool.icon}</span>
                <span>{tool.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
