'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

export default function LoadingScreen({ onComplete }) {
  // Pre-generate random values for particles
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: (i * 5 + 2.5) % 100,
      top: (i * 7 + 3) % 100,
      duration: 2 + (i % 5) * 0.5,
      delay: (i % 4) * 0.5,
    })), []
  )

  // Show welcome for 3 seconds, then go to main site
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background-dark flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-cyan-500/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* HK Logo */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className="w-24 h-24 rounded-2xl bg-[#0f172a] flex items-center justify-center shadow-2xl shadow-cyan-500/30 overflow-hidden p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="5" y="10" width="12" height="80" fill="#E31B23" />
                <rect x="17" y="40" width="12" height="20" fill="#FFFFFF" />
                <rect x="29" y="10" width="12" height="80" fill="#0891B2" />
                <rect x="50" y="10" width="12" height="80" fill="#1e293b" />
                <polygon points="62,50 95,10 80,10 62,35" fill="#1e293b" />
                <polygon points="62,50 95,90 80,90 62,65" fill="#1e293b" />
              </svg>
            </div>
          </motion.div>

          {/* Welcome animation */}
          <motion.div
            className="mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="text-6xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gradient">Welcome!</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I&apos;m <span className="text-cyan-400 font-semibold">Xinyan Zheng</span>
          </motion.p>

          <motion.p
            className="text-slate-400 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <FaCode className="text-purple-400" />
            Senior Full Stack Developer
          </motion.p>

          {/* Animated dots */}
          <motion.div
            className="flex gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.div>
  )
}
