'use client'

import { useEffect, useState } from 'react'

/**
 * Global scroll-reveal driver. Reveals any [data-reveal] element that is already
 * in the viewport immediately (so content is never stuck hidden), then uses an
 * IntersectionObserver to animate the rest as they scroll into view. Multiple
 * failsafes guarantee content can never remain invisible.
 */
export function EditableMotion() {
  useEffect(() => {
    const selector = '[data-reveal]:not(.is-visible)'
    const show = (el: Element) => el.classList.add('is-visible')
    const revealAll = () => document.querySelectorAll(selector).forEach(show)

    // Respect reduced motion and unsupported browsers: just show everything.
    const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    // Reveal whatever is currently on screen right away (does not depend on the
    // observer's async callback, which can miss already-in-view elements).
    const revealInView = () => {
      document.querySelectorAll(selector).forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 1.05 && rect.bottom > 0) show(el)
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    )

    const arm = () => {
      revealInView()
      document.querySelectorAll(selector).forEach((el) => io.observe(el))
    }

    arm()
    const raf = window.requestAnimationFrame(arm)
    // Scroll/resize backup in case an observer callback is dropped.
    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView)
    // Last-resort failsafe: never leave content hidden.
    const failsafe = window.setTimeout(revealAll, 1500)

    return () => {
      io.disconnect()
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
      window.clearTimeout(failsafe)
    }
  }, [])

  return null
}

/** Thin gradient bar that tracks page scroll progress. Used on long reads. */
export function ReadingProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setWidth(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div className="signal-progress" style={{ width: `${width}%` }} aria-hidden="true" />
}
