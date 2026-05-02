'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md'
import { IoCheckmarkCircle } from 'react-icons/io5'

const contactInfo = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'jennifer0914H@gmail.com',
    href: 'mailto:jennifer0914H@gmail.com',
    color: 'text-pink-400',
    bgColor: 'from-pink-500/20 to-pink-600/10',
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@stellaa23123',
    href: 'https://t.me/stellaa23123',
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: FaGithub,
    label: 'Github',
    value: 'https://github.com/Spark0914724',
    href: 'https://github.com/Spark0914724',
    color: 'text-black-400',
    bgColor: 'from-gray-500/20 to-gray-600/10',
  },
  {
    icon: MdLocationOn,
    label: 'Location',
    value: 'Beijing, China',
    href: null,
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-green-600/10',
  },
]

// const socialLinks = [
//   {
//     icon: FaGithub,
//     label: 'GitHub',
//     href: 'https://github.com/spark0914724',
//     color: 'hover:text-white hover:bg-slate-700',
//   },
//   {
//     icon: FaFacebook,
//     label: 'Facebook',
//     href: 'https://www.facebook.com/hakimcolorofficial',
//     color: 'hover:text-blue-400 hover:bg-blue-500/20',
//   },
//   {
//     icon: FaLinkedin,
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/md-azizul-hakim-b646b22a7',
//     color: 'hover:text-sky-400 hover:bg-sky-500/20',
//   },
//   {
//     icon: FaTelegram,
//     label: 'Telegram',
//     href: 'https://t.me/spark0914',
//     color: 'hover:text-green-400 hover:bg-green-500/20',
//   },
// ]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b925b71a-80a1-4167-bc00-ea4132b8d735',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    
    setIsSubmitting(false)
  }

  return (
    <section className="w-full px-6 py-20 md:pl-8 max-w-7xl mx-auto" id="contact">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3 
          className="text-3xl font-bold text-white flex items-center gap-3 mb-8"
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
          <span className="text-gradient">Get In Touch</span>
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out! 
              I&apos;m always open to discussing new opportunities and ideas.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className={`bg-gradient-to-br ${info.bgColor} border border-slate-800 rounded-xl p-4 flex items-center gap-4`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: 'rgba(34, 211, 238, 0.3)',
                    x: 5,
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-surface-dark/80 border border-slate-700/50 flex items-center justify-center ${info.color}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <info.icon className="text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-slate-500 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white font-medium hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links
            <div className="pt-4">
              <p className="text-slate-400 text-sm mb-4">Connect with me on social media:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-surface-dark border border-slate-800 flex items-center justify-center text-slate-400 transition-all ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-surface-dark/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 lg:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.2)' }}
          >
            {isSubmitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <IoCheckmarkCircle className="text-6xl text-green-400 mb-4" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="text-slate-400 text-sm mb-2 block">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="text-slate-400 text-sm mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="text-slate-400 text-sm mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <MdSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
