'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaArrowUp,
  FaArrowDown,
  FaXTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { useLenis } from './SmoothScroll';

export default function Sidebar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPercent(percent);

      // Detect scroll direction
      if (scrollTop > lastScrollY.current) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = scrollTop;

      // Show scroll to top button after 20%
      setShowScrollTop(percent > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (lenis) {
      lenis.scrollTo('bottom', { duration: 2 });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col items-center justify-center w-24 gap-4 fixed left-0 top-0 h-full z-40 bg-background-dark/50 backdrop-blur-sm border-r border-slate-800/50 pt-16">
        {/* Scroll Progress Circle */}
        <motion.div
          className="relative w-14 h-14 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="#1e293b"
              strokeWidth="3"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={150.8}
              strokeDashoffset={150.8 - (150.8 * scrollPercent) / 100}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-cyan-400">
              {scrollPercent}%
            </span>
          </div>
        </motion.div>

        <div className="h-px w-8 bg-slate-700 my-2"></div>

        <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://github.com/spark0914724"
          target="_blank"
        >
          <FaGithub className="w-5 h-5" />
        </Link>
        {/* <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://www.linkedin.com/in/md-azizul-hakim-b646b22a7"
          target="_blank"
        >
          <FaLinkedin className="w-5 h-5 text-blue-400" />
        </Link> */}
        {/* <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://x.com/hakimcolor"
          target="_blank"
        >
          <FaXTwitter className="w-5 h-5" />
        </Link> */}
        {/* <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://www.instagram.com/hakim.color/"
          target="_blank"
        >
          <FaInstagram className="w-5 h-5 text-pink-500" />
        </Link> */}
        {/* <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://www.facebook.com/hakimcolorofficial"
          target="_blank"
        >
          <FaFacebook className="w-5 h-5 text-blue-500" />
        </Link> */}
        {/* <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://wa.me/8801818777856"
          target="_blank"
        >
          <FaWhatsapp className="w-5 h-5 text-green-500" />
        </Link> */}
        <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="mailto:jennifer0914H@gmail.com"
          target="_blank"
        >
          <MdEmail className="w-5 h-5 text-pink-400" />
        </Link>
        <Link
          className="p-3 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110 group relative"
          href="https://t.me/spark0914"
          target="_blank"
        >
          <FaTelegram className="w-5 h-5 text-blue-400" />
        </Link>
        <div className="h-16 w-px bg-gradient-to-b from-slate-700 to-transparent mt-2"></div>

        {/* Scroll Up/Down Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              >
                <FaArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {scrollPercent < 90 && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToBottom}
                className="p-3 rounded-full bg-surface-dark border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              >
                <FaArrowDown className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Direction Indicator */}
        <AnimatePresence>
          {scrollDirection && (
            <motion.div
              key={scrollDirection}
              initial={{ opacity: 0, y: scrollDirection === 'down' ? -10 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <div
                className={`w-2 h-2 rounded-full ${scrollDirection === 'down' ? 'bg-cyan-400' : 'bg-purple-400'}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      {/* Mobile Bottom Bar with Scroll Progress */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background-dark/90 backdrop-blur-lg border-t border-slate-800/50">
        {/* Progress bar at top */}
        <div className="h-1 bg-slate-800 w-full">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            style={{ width: `${scrollPercent}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          {/* Scroll percentage */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={100.5}
                  strokeDashoffset={100.5 - (100.5 * scrollPercent) / 100}
                  style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-cyan-400">
                  {scrollPercent}%
                </span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
              href="https://github.com/spark0914724"
              target="_blank"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="https://www.linkedin.com/in/md-azizul-hakim-b646b22a7"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5 text-blue-400" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="https://x.com/hakimcolor"
              target="_blank"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="https://www.instagram.com/hakim.color/"
              target="_blank"
            >
              <FaInstagram className="w-5 h-5 text-pink-500" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="https://www.facebook.com/hakimcolorofficial"
              target="_blank"
            >
              <FaFacebook className="w-5 h-5 text-blue-500" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="https://wa.me/8801818777856"
              target="_blank"
            >
              <FaWhatsapp className="w-5 h-5 text-green-500" />
            </Link>
            <Link
              className="p-2 rounded-full bg-surface-dark hover:bg-slate-800 transition-all"
              href="mailto:jennifer0914H@gmail.com"
            >
              <MdEmail className="w-5 h-5 text-red-400" />
            </Link>
          </div>
        </div>

        {/* Scroll buttons for mobile */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-20 right-4 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25 z-50"
            >
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
