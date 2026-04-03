'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { MdEmail, MdDownload, MdSend, MdCode } from 'react-icons/md';
import { SiMongodb } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

// Typewriter text
const TypeWriter = ({ text }) => {
  return (
    <motion.span className="text-gradient">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // GSAP particles animation
    const particles = particlesRef.current?.children;
    if (particles) {
      gsap.to(particles, {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: 'random',
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-16 gap-8 lg:gap-12 w-full mx-auto min-h-[calc(100vh-80px)] overflow-hidden"
      id="home"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
            top: '40%',
            left: '30%',
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating code symbols */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {['</', '/>', '{', '}', '()', '[]', '&&', '=>', '++', '**'].map(
          (symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-500/20 font-mono text-2xl font-bold"
              style={{
                left: `${10 + i * 9}%`,
                top: `${15 + i * 8}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {symbol}
            </motion.div>
          )
        )}
      </div>

      {/* Animated lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.1 }}
      >
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="80%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="10%"
          x2="0%"
          y2="90%"
          stroke="url(#gradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing cursor trail effect */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 200, -100, 150, 0],
          y: [0, -100, 150, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-2xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-3" variants={itemVariants}>
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-surface-dark border border-slate-700 text-sm font-medium text-cyan-400 mb-2"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(34,211,238,0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 0px rgba(34,211,238,0)',
                '0 0 15px rgba(34,211,238,0.3)',
                '0 0 0px rgba(34,211,238,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hello, I&apos;m
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            variants={itemVariants}
          >
            <TypeWriter text="Jennifer Hill" />
          </motion.h1>
          <motion.h2
            className="text-blue-200xl md:text-3xl font-bold text-slate-300 mt-3 flex items-center gap-2 justify-center md:justify-start flex-wrap"
            variants={itemVariants}
          >
            <motion.span
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <MdCode className="text-accent-purple text-2xl" />
            </motion.span>

            {/* Animation 1: Typing Effect with Multiple Roles */}
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "AI & Data-Driven Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gradient"
              repeat={Infinity}
            />
          </motion.h2>

          {/* Animation 2: Wave Text Animation */}
          <motion.div
            className="text-lg md:text-xl font-semibold text-cyan-400 mt-3 flex gap-1 justify-center md:justify-start flex-wrap"
            variants={itemVariants}
          >
            {'Building Amazing Web Experiences'.split('').map((char, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  textShadow: [
                    '0 0 0px rgba(34,211,238,0)',
                    '0 0 12px rgba(34,211,238,0.9)',
                    '0 0 0px rgba(34,211,238,0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.06,
                  ease: 'easeInOut',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Animation 3: Glitch Effect */}
          <motion.div
            className="text-base md:text-lg font-medium text-purple-400 mt-3 relative"
            variants={itemVariants}
          >
            <motion.span
              animate={{
                x: [0, -2, 2, -2, 0],
                textShadow: [
                  '0 0 0px rgba(168,85,247,0)',
                  '-2px 0 10px rgba(168,85,247,0.8)',
                  '2px 0 10px rgba(34,211,238,0.8)',
                  '-2px 0 10px rgba(168,85,247,0.8)',
                  '0 0 0px rgba(168,85,247,0)',
                ],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              React • Node.js • Express • PostgreSQL
            </motion.span>
          </motion.div>

          {/* Animation 4: Fade In/Out Rotation */}
          <motion.div
            className="text-base md:text-lg font-semibold text-pink-400 mt-3"
            variants={itemVariants}
          >
            <motion.span
              animate={{
                opacity: [0, 1, 1, 0],
                rotateX: [90, 0, 0, -90],
                scale: [0.8, 1, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ display: 'inline-block' }}
            >
              Crafting Digital Solutions
            </motion.span>
          </motion.div>

          {/* Animation 5: Letter Spacing Pulse */}
          <motion.div
            className="text-sm md:text-base font-bold text-slate-400 mt-3 tracking-wider"
            variants={itemVariants}
          >
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [6, 0, -6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              PASSIONATE • CREATIVE • INNOVATIVE
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mt-[-5]"
          variants={itemVariants}
        >
          Full Stack Developer experienced in building high-performance web applications. Skilled in scalable systems, intuitive frontends, and robust backend services. Experienced in remote teams, cloud infrastructure, and leading innovative projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => {
              const link = document.createElement('a');
              link.href =
                'https://drive.google.com/file/d/1F3wrr4kAbeJGlrvwYwEleCyStCOsCJdQ/view?usp=sharing';
              link.download = 'Muhamaad_Azizul_Hakim_Resume.pdf';
              link.click();
            }}
            className="h-14 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            <MdDownload className="text-xl" />
            <span>Download Resume</span>
          </motion.button>
          <motion.button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="h-14 px-8 rounded-full border border-slate-700 hover:border-cyan-400 text-white font-bold text-base transition-all flex items-center justify-center gap-2 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(34,211,238,0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-cyan-500/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <MdSend className="text-xl" />
            <span>Contact Me</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex md:hidden items-center gap-6 mt-6 pt-6 border-t border-slate-800 w-full justify-center"
          variants={itemVariants}
        >
          {[
            { icon: FaGithub, color: 'hover:text-white' },
            { icon: FaLinkedin, color: 'hover:text-blue-500' },
            { icon: FaWhatsapp, color: 'hover:text-green-500' },
            { icon: MdEmail, color: 'hover:text-red-400' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.3, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className={`text-slate-400 ${item.color} transition-colors`}
                href="#"
              >
                <item.icon className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <ProfileImage3D />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <span className="text-slate-500 text-sm">Scroll Down</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
          animate={{ borderColor: ['#475569', '#22d3ee', '#475569'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProfileImage3D() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group shrink-0"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      }}
    >
      {/* Multiple glow layers */}
      <motion.div
        className="absolute -inset-8 rounded-full opacity-30"
        style={{
          background:
            'conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)',
          filter: 'blur(40px)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="relative p-1.5 rounded-full border-gradient shadow-2xl shadow-cyan-500/10"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="relative bg-background-dark rounded-full p-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-slate-800"
            style={{ transform: 'translateZ(50px)' }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://i.ibb.co.com/5hydBhmc/hakimcolor.png"
              alt="Jennifer Hill"
              fill
              className="object-cover object-center"
            />
            {/* Image overlay effect */}
            <motion.div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* Rotating rings */}
        <motion.div
          className="absolute inset-[-10px] rounded-full border border-cyan-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[-20px] rounded-full border border-purple-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[-30px] rounded-full border border-pink-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Experience badge */}
      <motion.div
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10 bg-surface-dark/90 backdrop-blur-sm border border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3"
        initial={{ opacity: 0, y: 20, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, rotateZ: 5 }}
      >
        <div className="flex -space-x-2">
          {[
            { icon: FaReact, bg: '#61DAFB', color: 'text-black' },
            { icon: FaNodeJs, bg: '#339933', color: 'text-white' },
            { icon: SiMongodb, bg: 'white', color: 'text-green-600' },
          ].map((tech, i) => (
            <motion.div
              key={i}
              className={`w-8 h-8 rounded-full p-1.5 flex items-center justify-center border-2 border-surface-dark`}
              style={{ backgroundColor: tech.bg }}
              whileHover={{ scale: 1.3, y: -8, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <tech.icon className={`w-full h-full ${tech.color}`} />
            </motion.div>
          ))}
        </div>
        <div className="text-xs font-bold">
          <motion.span
            className="block text-white"
            animate={{ color: ['#ffffff', '#22d3ee', '#ffffff'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            2+ Years
          </motion.span>
          <span className="text-slate-400">Experience</span>
        </div>
      </motion.div>

      {/* Orbiting dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-3 h-3"
          style={{ transformOrigin: '0 0' }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 6 - i,
              height: 6 - i,
              x: 160 + i * 15,
              background: `linear-gradient(135deg, #22d3ee, #a855f7)`,
              boxShadow: '0 0 10px rgba(34,211,238,0.5)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
