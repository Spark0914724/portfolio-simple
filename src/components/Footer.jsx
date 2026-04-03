'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-dark/80 backdrop-blur-sm border-t border-slate-800/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-400 text-sm"
          >
            <p>© {currentYear} Jennifer Hill. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-slate-500 text-xs">
              Built with <span className="text-cyan-400">Next.js</span> and{' '}
              <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </motion.div>
          
          
        </div>

        {/* Bottom text */}
        
      </div>
    </footer>
  );
}
