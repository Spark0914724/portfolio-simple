'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaPython, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiNetlify, SiVercel, SiPostman, SiNestjs, SiLaravel, SiGraphql, SiPostgresql, SiMysql, SiOracle, SiClickhouse, SiVuedotjs, SiAngular, SiGo, SiPhp } from 'react-icons/si'
import { MdSchool, MdMenuBook, MdPerson, MdEmail, MdWork, MdLocationOn, MdQuestionAnswer, MdStorage } from 'react-icons/md'
import { TbBrandNextjs, TbBrandTypescript, TbBrandVscode, TbBrandReactNative } from 'react-icons/tb'
import { IoChevronDown } from 'react-icons/io5'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

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
}

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function About() {
  return (
    <section className="w-full px-6 pb-10 md:pl-8 max-w-7xl mx-auto flex flex-col gap-16 relative z-10" id="about">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-4"></div>
      <motion.div 
        className="flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutMe />
        <Skills />
      </motion.div>
      <Experience />
      <Education />
      <FAQ />
    </section>
  )
}

function AboutMe() {
  const infoItems = [
    { label: 'Name', value: 'Xinyan Zheng', icon: MdPerson, color: 'text-cyan-400' },
    { label: 'Email', value: 'jennifer0914H@gmail.com', icon: MdEmail, color: 'text-pink-400' },
    { label: 'Experience', value: '3+ years experience', icon: MdWork, color: 'text-purple-400' },
    { label: 'Location', value: 'Beijing, China', icon: MdLocationOn, color: 'text-green-400' },
  ]

  return (
    <motion.div className="space-y-6" variants={itemVariants}>
      <motion.h3 
        className="text-3xl font-bold text-white flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <span className="text-gradient">About Me</span>
      </motion.h3>
      <motion.div 
        className="bg-surface-dark/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden group"
        whileHover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p 
          className="text-slate-300 leading-relaxed text-lg relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m Xinyan Zheng, a Backend / Full Stack Developer with 3+ years of hands-on experience building scalable backend systems and full-stack web applications. I specialize in Node.js, Express, and NestJS, with strong expertise in REST API, GraphQL, and WebSockets, focusing on clean architecture, performance optimization, and reliable system design.
        </motion.p>
        <motion.p 
          className="text-slate-300 leading-relaxed text-lg relative z-10 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          I&apos;m passionate about building efficient, high-performing systems—from designing robust backend services to integrating seamless frontend experiences using React, Next.js, and TypeScript. I have solid experience working with PostgreSQL and MongoDB, along with Docker-based CI/CD workflows to ensure smooth deployment and scalability.
        </motion.p>
        <motion.p 
          className="text-slate-300 leading-relaxed text-lg relative z-10 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          I value clean, maintainable code and continuous improvement, and I enjoy solving complex problems through backend architecture enhancements, API optimization, and database performance tuning—delivering measurable results like faster response times and improved query efficiency.
        </motion.p>
        
        <motion.div 
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {infoItems.map((item, index) => (
            <motion.div 
              key={item.label}
              className="flex items-center gap-3 border-l-2 border-slate-700 pl-4 group/item cursor-default"  
              variants={infoItemVariants}
              whileHover={{ 
                x: 5, 
                borderColor: '#22d3ee',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className={`${item.color}`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <item.icon className="text-2xl" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">{item.label}</span>
                <motion.span 
                  className="text-white font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {item.value}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function Skills() {
  const frontendSkills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600', bgColor: 'from-orange-600/20 to-orange-700/10', barColor: 'bg-orange-600', percent: 95 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600', bgColor: 'from-blue-600/20 to-blue-700/10', barColor: 'bg-blue-600', percent: 90 },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', bgColor: 'from-yellow-400/20 to-yellow-500/10', barColor: 'bg-yellow-400', percent: 90 },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', bgColor: 'from-purple-500/20 to-purple-600/10', barColor: 'bg-purple-500', percent: 85 },
    { name: 'React JS', icon: FaReact, color: 'text-cyan-400', bgColor: 'from-cyan-400/20 to-cyan-500/10', barColor: 'bg-cyan-400', percent: 90 },
    { name: 'TypeScript', icon: TbBrandTypescript, color: 'text-blue-500', bgColor: 'from-blue-500/20 to-blue-600/10', barColor: 'bg-blue-500', percent: 90 },
    { name: 'Next.js', icon: TbBrandNextjs, color: 'text-slate-300', bgColor: 'from-slate-300/20 to-slate-400/10', barColor: 'bg-slate-300', percent: 90 },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-emerald-500', bgColor: 'from-emerald-500/20 to-emerald-600/10', barColor: 'bg-emerald-500', percent: 85 },
    { name: 'Angular', icon: SiAngular, color: 'text-red-500', bgColor: 'from-red-500/20 to-red-600/10', barColor: 'bg-red-500', percent: 85 },
    { name: 'React Native', icon: TbBrandReactNative, color: 'text-cyan-400', bgColor: 'from-cyan-400/20 to-cyan-500/10', barColor: 'bg-cyan-400', percent: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-500', bgColor: 'from-sky-500/20 to-sky-600/10', barColor: 'bg-sky-500', percent: 90 },
  ]

  const backendSkills = [
    { name: 'Node JS', icon: FaNodeJs, color: 'text-green-500', bgColor: 'from-green-500/20 to-green-600/10', barColor: 'bg-green-500', percent: 90 },
    { name: 'Express JS', icon: SiExpress, color: 'text-slate-300', bgColor: 'from-slate-300/20 to-slate-400/10', barColor: 'bg-slate-300', percent: 85 },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', bgColor: 'from-indigo-400/20 to-indigo-500/10', barColor: 'bg-indigo-400', percent: 85 },
    { name: 'Nest.js', icon: SiNestjs, color: 'text-rose-600', bgColor: 'from-rose-600/20 to-rose-700/10', barColor: 'bg-rose-600', percent: 80 },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', bgColor: 'from-red-500/20 to-red-600/10', barColor: 'bg-red-500', percent: 90 },
    { name: 'Python', icon: FaPython, color: 'text-blue-400', bgColor: 'from-blue-400/20 to-yellow-400/10', barColor: 'bg-blue-400', percent: 85 },
    { name: 'Golang', icon: SiGo, color: 'text-cyan-500', bgColor: 'from-cyan-500/20 to-cyan-600/10', barColor: 'bg-cyan-500', percent: 85 },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500', bgColor: 'from-pink-500/20 to-pink-600/10', barColor: 'bg-pink-500', percent: 85 },
    { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500', bgColor: 'from-orange-500/20 to-yellow-500/10', barColor: 'bg-orange-500', percent: 80 },
  ]

  const databaseSkills = [
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', bgColor: 'from-blue-400/20 to-blue-500/10', barColor: 'bg-blue-400', percent: 85 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bgColor: 'from-green-500/20 to-green-600/10', barColor: 'bg-green-500', percent: 85 },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', bgColor: 'from-blue-500/20 to-orange-400/10', barColor: 'bg-blue-500', percent: 90 },
    { name: 'Oracle', icon: SiOracle, color: 'text-red-600', bgColor: 'from-red-600/20 to-red-700/10', barColor: 'bg-red-600', percent: 80 },
    { name: 'ClickHouse', icon: SiClickhouse, color: 'text-yellow-500', bgColor: 'from-yellow-500/20 to-yellow-600/10', barColor: 'bg-yellow-500', percent: 80 },
    // { name: 'SQL', icon: MdStorage, color: 'text-purple-400', bgColor: 'from-purple-400/20 to-purple-500/10', barColor: 'bg-purple-400', percent: 78 },
  ]

  const toolsSkills = [
    { name: 'VS Code', icon: TbBrandVscode, color: 'text-blue-500', bgColor: 'from-blue-500/20 to-blue-600/10', barColor: 'bg-blue-500', percent: 95 },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', bgColor: 'from-orange-600/20 to-orange-700/10', barColor: 'bg-orange-600', percent: 85 },
    { name: 'GitHub', icon: FaGithub, color: 'text-slate-300', bgColor: 'from-slate-300/20 to-slate-400/10', barColor: 'bg-slate-300', percent: 90 },
    { name: 'NPM', icon: FaNpm, color: 'text-red-500', bgColor: 'from-red-500/20 to-red-600/10', barColor: 'bg-red-500', percent: 90 },
    { name: 'Netlify', icon: SiNetlify, color: 'text-teal-400', bgColor: 'from-teal-400/20 to-teal-500/10', barColor: 'bg-teal-400', percent: 85 },
    { name: 'Vercel', icon: SiVercel, color: 'text-slate-300', bgColor: 'from-slate-300/20 to-slate-400/10', barColor: 'bg-slate-300', percent: 85 },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500', bgColor: 'from-orange-500/20 to-orange-600/10', barColor: 'bg-orange-500', percent: 80 },
  ]

  const skillCategories = [
    { title: 'Frontend Development', skills: frontendSkills, gradient: 'from-cyan-500 to-blue-500' },
    { title: 'Backend Development', skills: backendSkills, gradient: 'from-purple-500 to-pink-500' },
    { title: 'Database', skills: databaseSkills, gradient: 'from-green-500 to-emerald-500' },
    { title: 'Tools & Technologies', skills: toolsSkills,  gradient: 'from-blue-500 to-indigo-500'},
  ]

  return (
    <motion.div className="space-y-8" id="skills" variants={itemVariants}>
      <motion.h3 
        className="text-3xl font-bold text-white flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <span className="text-gradient">Skills</span>
      </motion.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="bg-surface-dark/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-xl overflow-hidden relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div 
                className={`w-1 h-6 bg-gradient-to-b ${category.gradient} rounded-full`}
                initial={{ height: 0 }}
                whileInView={{ height: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 + 0.2 }}
              />
              <h4 className="text-lg font-bold text-white">{category.title}</h4>
            </div>

            {/* Skills grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className={`relative p-3 bg-gradient-to-br ${skill.bgColor} border border-slate-700/50 rounded-xl overflow-hidden group/skill cursor-default`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                        delay: index * 0.05,
                      },
                    },
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: '0 10px 30px -10px rgba(34, 211, 238, 0.2)',
                  }}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-surface-dark/80 border border-slate-700/50 flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className={`${skill.color} text-xl`} />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white truncate">{skill.name}</span>
                        <motion.span 
                          className={`text-xs font-bold ${skill.color}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          {skill.percent}%
                        </motion.span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.barColor} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.3 + index * 0.05,
                            ease: 'easeOut'
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: 'easeInOut',
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative gradient */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Experience() {
  const experiences = [
    {
      title: 'Backend / Full Stack Developer',
      company: 'SleekDigital, Singapore',
      period: '08/2024 - 01/2026',
      description: 'Key backend contributor and partial technical lead for a high-traffic SaaS platform: developed and optimized REST/GraphQL APIs, improved PostgreSQL/MongoDB performance, implemented JWT/RBAC security, built real-time WebSocket notifications, collaborated with React/Next.js frontend, and enhanced Docker-based CI/CD pipelines for faster, more reliable deployments.',
      color: 'cyan',
    },
    {
      title: 'Full Stack Developer',
      company: 'SEIRIM, China',
      period: '10/2023 - 05/2024',
      description: 'Developed REST APIs and maintained backend services with Node.js/Express, optimized PostgreSQL/MongoDB schemas improving query performance by 20–30%, built responsive React/Next.js/Redux frontends, assisted CI/CD automation reducing deployment errors by 50%, and actively contributed to technical documentation and system design discussions to ensure robust, scalable solutions.',
      color: 'purple',
    },
  ]

  return (
    <motion.div className="space-y-6" id="experience" variants={itemVariants}>
      <motion.h3 
        className="text-3xl font-bold text-white flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <span className="text-gradient">Experience</span>
      </motion.h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-slate-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.div 
              className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-dark border-2 border-${exp.color}-500 flex items-center justify-center`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
            >
              <motion.div 
                className={`w-2 h-2 rounded-full bg-${exp.color}-500`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div 
              className={`bg-surface-dark/60 border border-slate-800 p-5 rounded-xl hover:border-${exp.color}-500/30 transition-colors`}
              whileHover={{ x: 5, borderColor: `rgba(34, 211, 238, 0.3)` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                <motion.span 
                  className={`text-xs font-mono py-1 px-2 rounded bg-slate-800 text-${exp.color}-400 w-fit`}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.period}
                </motion.span>
              </div>
              <p className="text-sm font-medium text-slate-300 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Education() {
  const educations = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Peking University",
      period: "2019 - 2023",
      description: "Completed undergraduate degree in Computer Science.",
      icon: MdSchool
    }
  ]

  return (
    <motion.div className="space-y-6" id="education" variants={itemVariants}>
      <motion.h3 
        className="text-3xl font-bold text-white flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <span className="text-gradient">Education</span>
      </motion.h3>
      <div className="space-y-4">
        {educations.map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-surface-dark/60 border border-slate-800 p-5 rounded-xl hover:border-pink-500/30 transition-colors flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shrink-0 text-2xl shadow-inner"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <edu.icon className="text-pink-400 text-2xl" />
            </motion.div>
            <div>
              <h4 className="text-lg font-bold text-white">{edu.title}</h4>
              <p className="text-cyan-400 font-medium text-sm mb-1">{edu.institution}</p>
              <p className="text-slate-500 text-xs mb-2">{edu.period}</p>
              <p className="text-slate-400 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Why should you hire me?',
      answer: 'I bring a strong combination of backend and full-stack development expertise, with hands-on experience in Node.js, Express, NestJS, PostgreSQL, MongoDB, and Docker-based CI/CD. I focus on writing clean, maintainable code while ensuring high-performance APIs and responsive, user-friendly frontends with React and Next.js. I am passionate about learning new technologies and delivering projects on time with great attention to detail. Most importantly, I focus on your business goals—helping you grow through scalable, secure, and efficient web applications.',
    },
    {
      question: 'How can I help grow your e-commerce business?',
      answer: 'I build fast, scalable e-commerce platforms using React/Next.js or WordPress with WooCommerce. I focus on conversion optimization, mobile responsiveness, secure payment integration, and seamless user experiences to help increase sales and boost customer retention. I also implement the latest best practices in backend performance, API optimization, and real-time features to help grow your business through a modern, high-performing, and reliable website.',
    },
    {
      question: 'What makes my development approach different?',
      answer: 'I prioritize understanding your business goals and project requirements first. I write clean, maintainable, and scalable code with thorough documentation. I leverage modern technologies, performance optimization, and best practices to ensure your web applications are fast, secure, and reliable, while remaining easy to maintain and extend over time.',
    },
    {
      question: 'What is my project delivery process?',
      answer: 'I follow a structured approach: \n\n1) Understanding requirements and business goals.\n2) Designing system architecture and mockups for approval.\n3) Development with regular updates and milestone reviews.\n4) Testing, debugging, and quality assurance.\n5) Deployment and training for smooth handover.\n\nI keep you informed at every step and actively incorporate your feedback throughout the process.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div 
      className="space-y-6" 
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-3xl font-bold text-white flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <span className="text-gradient">Frequently Asked Questions</span>
      </motion.h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-surface-dark/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
          >
            <motion.button
              className="w-full p-5 flex items-center justify-between text-left"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-slate-700/50 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <MdQuestionAnswer className="text-cyan-400 text-xl" />
                </motion.div>
                <span className="text-lg font-semibold text-white">{faq.question}</span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-cyan-400"
              >
                <IoChevronDown className="text-2xl" />
              </motion.div>
            </motion.button>

            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0">
                <div className="pl-13 ml-[52px] border-l-2 border-cyan-500/30 pl-4">
                  <motion.p
                    className="text-slate-300 leading-relaxed"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {faq.answer.split('\n').map((line, i) => (
                      <span key={i} className={line === '' ? 'block mt-2' : 'block'}>{line}</span>
                    ))}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
