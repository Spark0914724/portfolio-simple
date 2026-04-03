'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Finance Management App',
    description:
      'A comprehensive money management application for tracking income, expenses, and financial reports with interactive charts and analytics.',
    image: 'https://i.ibb.co.com/Df8PhWQg/Screenshot-2026-01-17-002601.png',
    liveUrl: 'https://fineasmanagmentapp.netlify.app/',
    githubUrl: 'https://github.com/hakimcolor',
    tags: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Chart.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Local Chef Bazaar',
    description:
      'A local chef bazaar app where admins manage users, chefs upload food, and users order meals.',
    image: 'https://i.ibb.co.com/pBcCkWPR/Screenshot-2026-01-06-105931.png',
    liveUrl: 'https://localchefbazaarbyhakimcolor.netlify.app/',
    githubUrl: 'https://github.com/hakimcolor',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'JWT',
      'Firebase',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Community Cleanliness',
    description:
      'A community-based website where you can donate for public damage and upload posts about damaged public property.',
    image: 'https://i.ibb.co.com/MkQfSKPj/Screenshot-2026-01-06-110118.png',
    liveUrl: 'https://community-cleanliness.netlify.app/',
    githubUrl: 'https://github.com/hakimcolor',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'Tailwind CSS',
      'Firebase',
      'Swiper',
      'SweetAlert2',
    ],
  },
  {
    title: 'Pet Care Services',
    description:
      'A pet care website where you can find many different services and book any service easily for your beloved pets.',
    image: 'https://i.ibb.co.com/C3HcdXsb/Screenshot-2026-01-06-105336.png',
    liveUrl: 'https://petcareinwinterssevises.netlify.app/',
    githubUrl: 'https://github.com/hakimcolor',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'Firebase',
      'Tailwind CSS',
      'CSS',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Projects() {
  return (
    <section
      className="flex flex-col gap-8 px-6 py-12 md:pl-8 max-w-7xl mx-auto w-full"
      id="projects"
    >
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <motion.span
            className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <span className="text-gradient">Featured Projects</span>
        </h3>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Link
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            href="https://github.com/hakimcolor"
            target="_blank"
          >
            View all <MdArrowForward className="text-base" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group flex flex-col rounded-2xl overflow-hidden bg-surface-dark/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: '0 20px 40px -20px rgba(34, 211, 238, 0.3)',
            }}
          >
            {/* Project Image */}
            <div className="w-full h-72 relative overflow-hidden object-cover">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Overlay buttons */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  className="px-5 py-2.5 bg-cyan-500 text-black font-bold rounded-full text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full text-sm flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  GitHub
                </motion.a>
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col p-6 gap-4 flex-1">
              <div>
                <motion.h4
                  className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-full border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + tagIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links for mobile */}
              <div className="flex gap-3 pt-2 lg:hidden">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex-1 py-2.5 bg-cyan-500/20 text-cyan-400 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex-1 py-2.5 bg-slate-800/80 text-slate-300 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 border border-slate-700/50 hover:bg-slate-700/80 transition-colors"
                >
                  <FaGithub />
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
