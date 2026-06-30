'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Slide = {
  id: number
  outlet: string
  date: string
  headline: string
  pullQuote: string
  videoSrc: string
}

const SLIDES: Slide[] = [
  {
    id: 1,
    outlet: 'The Zac Clark Show',
    date: '',
    headline: 'The Youth of America in Crisis: Solutions and Hope',
    pullQuote:
      "Depression is actually a normal response to a traumatized childhood. It's the mind saying, I can't, I just can't.",
    videoSrc:
      '/videos/20240529_ZacClarkShow_TheYouthOfAmericaInCrisisSolutionsAndHope[CLIP].mp4',
  },
]

const AUTO_ADVANCE_MS = 12000

export default function RotatingSpotlight() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goTo = useCallback(
    (index: number) => {
      if (fading) return
      setFading(true)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
      setTimeout(() => {
        setCurrent(index)
        setFading(false)
      }, 250)
    },
    [fading],
  )

  const advance = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const retreat = useCallback(
    () => goTo((current - 1 + SLIDES.length) % SLIDES.length),
    [current, goTo],
  )

  useEffect(() => {
    if (paused) return
    const t = setTimeout(advance, AUTO_ADVANCE_MS)
    return () => clearTimeout(t)
  }, [current, paused, advance])

  const slide = SLIDES[current]

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ backgroundColor: '#080F1C', position: 'relative', overflow: 'hidden' }}
      aria-label="Featured appearances"
    >
      {/* Background texture image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/speaking-stage.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          opacity: 0.07,
          pointerEvents: 'none',
          mixBlendMode: 'luminosity',
        }}
      />

      <div
        className="spotlight-portrait-grid"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: '560px',
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.25s ease',
          position: 'relative',
          zIndex: 1,
          maxWidth: '72rem',
          margin: '0 auto',
        }}
      >
        {/* LEFT: text panel — max-width closes the gap with the video */}
        <div
          style={{
            flex: '1 1 0',
            maxWidth: '580px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem 2.5rem 2rem clamp(2rem, 5vw, 5rem)',
            gap: '1.75rem',
          }}
        >
          {/* Section label + meta */}
          <div>
            <p className="eyebrow" style={{ color: '#C17A56', marginBottom: '0.75rem' }}>
              In the Room
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.06em',
              }}
            >
              {slide.outlet}{slide.date ? <>&nbsp;&nbsp;·&nbsp;&nbsp;{slide.date}</> : null}
            </p>
          </div>

          {/* Headline */}
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.375rem, 2.5vw, 2rem)',
              color: '#fff',
              lineHeight: 1.2,
              fontWeight: 600,
              maxWidth: '22ch',
            }}
          >
            {slide.headline}
          </h2>

          {/* Pull-quote */}
          <blockquote
            style={{
              borderLeft: '2px solid #C17A56',
              paddingLeft: '1.25rem',
              margin: 0,
            }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.6,
                maxWidth: '34ch',
              }}
            >
              &ldquo;{slide.pullQuote}&rdquo;
            </p>
            <footer
              style={{
                marginTop: '0.75rem',
                fontSize: '0.75rem',
                color: '#C17A56',
                letterSpacing: '0.06em',
                fontStyle: 'normal',
              }}
            >
              Dr. Shairi Turner
            </footer>
          </blockquote>

          {/* Controls — hidden when only one slide */}
          {SLIDES.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to clip ${i + 1}`}
                    style={{
                      width: i === current ? '1.5rem' : '0.375rem',
                      height: '3px',
                      borderRadius: '2px',
                      backgroundColor: i === current ? '#C17A56' : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'width 0.3s ease, background-color 0.2s ease',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                {([['←', retreat, 'Previous'], ['→', advance, 'Next']] as const).map(
                  ([symbol, handler, label]) => (
                    <button
                      key={label}
                      onClick={handler}
                      aria-label={label}
                      style={{
                        width: '2rem',
                        height: '2rem',
                        border: '1px solid rgba(255,255,255,0.18)',
                        background: 'transparent',
                        color: 'rgba(255,255,255,0.6)',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {symbol}
                    </button>
                  ),
                )}
              </div>
              <p
                style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.08em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: portrait video panel */}
        <div
          style={{
            width: '315px',
            height: '560px',
            flexShrink: 0,
            backgroundColor: '#000',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.4)',
          }}
        >
          <video
            ref={videoRef}
            key={slide.id}
            src={slide.videoSrc}
            poster="/images/zac-clark-frames/frame_poster.jpg"
            controls
            controlsList="nodownload nofullscreen"
            preload="none"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* Progress bar — hidden when only one slide */}
      {SLIDES.length > 1 && !paused && (
        <div
          key={`progress-${current}`}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            backgroundColor: '#C17A56',
            animation: `spotlight-progress ${AUTO_ADVANCE_MS}ms linear forwards`,
          }}
        />
      )}
    </section>
  )
}
