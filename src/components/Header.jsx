'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import {
  BsPerson,
  BsLightning,
  BsBriefcase,
  BsFolder,
  BsEnvelope,
} from 'react-icons/bs';

const navItems = [
  { name: 'Home', href: '#', icon: AiOutlineHome },
  { name: 'About', href: '#about', icon: BsPerson },
  { name: 'Skills', href: '#skills', icon: BsLightning },
  { name: 'Experience', href: '#experience', icon: BsBriefcase },
  { name: 'Projects', href: '#projects', icon: BsFolder },
  { name: 'Contact', href: '#contact', icon: BsEnvelope },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

const logoVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.1,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Header() {
  const headerRef = useRef(null);
  const gradientRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const header = headerRef.current;
    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        backgroundPosition: '200% 50%',
        duration: 8,
        ease: 'none',
        repeat: -1,
      });
    }

    // Scroll spy
    const handleScroll = () => {
      const sections = navItems
        .map((item) => item.href.replace('#', ''))
        .filter(Boolean)
        .reverse();
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          console.log(section);
          setActiveSection(`#${section}`);
          return;
        }
      }
      setActiveSection('#');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {

    setIsMenuOpen(false);
    setActiveSection(href);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        const headerHeight = headerRef.current?.offsetHeight ?? 64;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-slate-800/50 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(90deg, #0B1120, #1a1a3e, #0d2137, #1a0a2e, #0B1120, #1a1a3e)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-500/40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: '100%',
              opacity: 0,
            }}
            animate={{
              y: '-100%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Glowing line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ width: '0%', left: '50%', x: '-50%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
      />

      <div className="relative flex items-center justify-between px-4 py-3 max-w-7xl mx-auto w-full backdrop-blur-md bg-background-dark/60">
        <motion.div
          className="flex items-center gap-2"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative flex items-center justify-center size-10 rounded-lg bg-[#0f172a] shadow-xl shadow-cyan-500/40 cursor-pointer overflow-hidden p-1"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#')}
            style={{
              boxShadow:
                '0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.1)',
            }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee)',
                backgroundSize: '300% 100%',
                padding: '2px',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="w-full h-full rounded-lg bg-[#0f172a]" />
            </motion.div>

            {/* Logo SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
              {/* H letter - Red part */}
              <rect x="5" y="10" width="12" height="80" fill="#E31B23" />
              {/* H letter - White connector */}
              <rect x="17" y="40" width="12" height="20" fill="#FFFFFF" />
              {/* H letter - Cyan part */}
              <rect x="29" y="10" width="12" height="80" fill="#0891B2" />
              {/* K letter - Dark with shadow effect */}
              <rect x="50" y="10" width="12" height="80" fill="#1e293b" />
              <polygon points="62,50 95,10 80,10 62,35" fill="#1e293b" />
              <polygon points="62,50 95,90 80,90 62,65" fill="#1e293b" />
            </svg>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-cyan-500/20"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 group relative overflow-hidden ${
                  activeSection === item.href
                    ? 'text-cyan-400 bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <item.icon
                    className={`text-lg transition-colors ${
                      activeSection === item.href
                        ? 'text-cyan-400'
                        : 'text-cyan-400 group-hover:text-white'
                    }`}
                  />
                </motion.span>
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center justify-center size-10 rounded-lg hover:bg-surface-dark transition-colors text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX className="text-2xl text-cyan-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden relative bg-background-dark/95 backdrop-blur-lg border-t border-slate-800/50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div key={item.name} variants={mobileItemVariants}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeSection === item.href
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <item.icon
                        className={`text-xl ${
                          activeSection === item.href
                            ? 'text-cyan-400'
                            : 'text-cyan-400'
                        }`}
                      />
                    </motion.div>
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.href && (
                      <motion.div
                        className="ml-auto w-2 h-2 rounded-full bg-cyan-400"
                        layoutId="activeMobileTab"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu footer */}
            <motion.div
              className="px-4 py-4 border-t border-slate-800/50"
              variants={mobileItemVariants}
            >
              <p className="text-center text-slate-500 text-sm">
                © 2024 Jennifer Hill
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
