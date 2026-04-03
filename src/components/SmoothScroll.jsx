'use client'
import { useEffect, useRef, createContext, useContext, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisContext = createContext(null)

export const useLenis = () => useContext(LenisContext)

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)
  const reqIdRef = useRef(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2.5,
      infinite: false,
      lerp: 0.08,
      wheelMultiplier: 1.2,
      autoResize: true,
    })

    setLenis(lenisInstance)

    // Smooth scroll animation frame
    function raf(time) {
      lenisInstance.raf(time)
      reqIdRef.current = requestAnimationFrame(raf)
    }

    reqIdRef.current = requestAnimationFrame(raf)

    // Handle scroll events for continuous smooth effect
    const handleWheel = () => {
      // Lenis automatically handles smooth scrolling on every wheel event
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current)
      }
      lenisInstance.destroy()
    }
  }, [])

  // Scroll to functions
  const scrollTo = (target, options = {}) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      })
    }
  }

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 })
    }
  }

  const scrollToBottom = () => {
    if (lenis) {
      lenis.scrollTo('bottom', { duration: 2 })
    }
  }

  return (
    <LenisContext.Provider value={{ lenis, scrollTo, scrollToTop, scrollToBottom }}>
      {children}
    </LenisContext.Provider>
  )
}
