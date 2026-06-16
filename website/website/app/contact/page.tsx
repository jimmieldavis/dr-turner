'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [type, setType] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID at formspree.io
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#1B2B4B', padding: '6rem 1.5rem 4rem' }}>
        <div className="mx-auto" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Contact
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
            She responds to every inquiry.
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="section-pad" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '72rem' }}>
          <div className="grid md:grid-cols-3 gap-16">
            {/* Left: context */}
            <div>
              <p className="eyebrow mb-6" style={{ color: '#C17A56' }}>Inquiry Types</p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    label: 'Speaking',
                    detail:
                      'Include your event date, format (keynote, panel, fireside), expected audience size, and context (CTL capacity or personal capacity).',
                  },
                  {
                    label: 'Media & Press',
                    detail:
                      'Include your outlet, story angle, and deadline. She has appeared on every major network and in every major print outlet. Rapid response is available.',
                  },
                  {
                    label: 'Book',
                    detail:
                      'Publication inquiries, pre-order interest, bulk orders for organizations, and mailing list requests.',
                  },
                  {
                    label: 'General',
                    detail:
                      'Partnerships, collaborations, and other inquiries welcome.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}
                  >
                    <p style={{ fontWeight: 500, color: '#fff', marginBottom: '0.375rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.65' }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', lineHeight: '1.65' }}>
                  In crisis? Do not use this form. Text{' '}
                  <strong style={{ color: '#C17A56' }}>HOME or HOLA to 741741</strong>{' '}
                  to reach a live volunteer Crisis Counselor.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-2">
              {status === 'sent' ? (
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '3rem',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-serif"
                    style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}
                  >
                    Received.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem' }}>
                    Your inquiry has been submitted. You will hear back promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {/* Inquiry type */}
                  <div>
                    <label className="form-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Inquiry type *</label>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {['Speaking', 'Media & Press', 'Book', 'General'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setType(t)}
                          style={{
                            padding: '0.5rem 1.25rem',
                            border: '1px solid',
                            borderColor: type === t ? '#C17A56' : 'rgba(255,255,255,0.2)',
                            backgroundColor: type === t ? '#C17A56' : 'transparent',
                            color: '#fff',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            letterSpacing: '0.04em',
                            transition: 'all 0.15s',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="inquiry_type" value={type} />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="form-label" htmlFor="name" style={{ color: 'rgba(255,255,255,0.4)' }}>Full name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="form-input"
                      style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="form-label" htmlFor="email" style={{ color: 'rgba(255,255,255,0.4)' }}>Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@organization.com"
                      className="form-input"
                      style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="form-label" htmlFor="organization" style={{ color: 'rgba(255,255,255,0.4)' }}>Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Company, outlet, or institution"
                      className="form-input"
                      style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="form-label" htmlFor="message" style={{ color: 'rgba(255,255,255,0.4)' }}>Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder={
                        type === 'Speaking'
                          ? 'Event date, format, audience size, and topic focus...'
                          : type === 'Media & Press'
                          ? 'Outlet, story angle, and deadline...'
                          : 'Tell us more about your inquiry...'
                      }
                      className="form-input"
                      style={{ resize: 'vertical', lineHeight: '1.65', color: '#fff', borderBottomColor: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#C17A56', fontSize: '0.875rem' }}>
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#C17A56',
                      color: '#fff',
                      border: 'none',
                      padding: '1rem 2.25rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
                    This form is powered by Formspree. Your information will not be shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
