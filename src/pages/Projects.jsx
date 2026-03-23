import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
  title: '💻 Realtime Code Editor',
  desc: 'A collaborative real-time code editor built using the MERN stack and WebSockets, allowing multiple users to write and edit code simultaneously with instant synchronization and seamless user experience and interaction.',
  ss: '/areal.png',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSocket'],
  live: 'https://realtimecodedtior-3.onrender.com/',
  code: 'https://github.com/YogeshDevX-404/RealTimeCodEdtior'
  },
  
  {
  title: '📝 EnigmaTechClub BlogApp',
  desc: 'A full-stack blog platform developed for Enigma Tech Club using the MERN stack, enabling users to create, edit, and manage blogs with a smooth and interactive user experience.',
  ss: '/aenigma.png',
  tech: ['JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
  live: 'https://enigma-website-1client-gh1x.onrender.com/',
  code: 'https://github.com/YogeshDevX-404/Enigma_Website-'
  },
  {
  title: '🚀 AI Career Coach (IntelliRise)',
  desc: 'An AI-powered career guidance platform that helps users with resume building, AI-generated cover letters, interview preparation, and personalized career insights to grow professionally.',
  ss: '/ai.png',
  tech: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Inngest', 'Clerk'],
  live: 'https://ai-career-coach-qdmo.onrender.com/',
  code: 'https://github.com/YogeshDevX-404/AI-Career-Coach'
},
{
  title: '🎓 Admitease – Admission Consulting Platform',
  desc: 'A web-based admission consulting platform designed to help students explore colleges, get guidance, and simplify the admission process with an intuitive and user-friendly interface.',
  ss: '/admi.png',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  live: '#',
  code: 'https://github.com/YogeshDevX-404/Admitease'
},
{
  title: '🚖 Uber Clone with AI Ride Assistant',
  desc: 'A full-stack Uber clone with real-time ride booking, live location tracking, and an AI-powered assistant that suggests the best ride options based on user preferences.',
  ss: '/uber.png',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Google Maps API', 'AI Integration'],
  live: '#',
  code: 'https://github.com/YogeshDevX-404/Uber-Clone'
},

  {
  title: '🤖 Multilingual AI Assistant',
  desc: 'A multilingual AI chatbot built for learning and logic-building, allowing users to ask questions in any language and receive responses using the Servam AI API.',
  ss: '/ai-assistence.png',
  tech: ['Python', 'Flask', 'Servam AI API', 'HTML', 'CSS', 'JavaScript'],
  live: '#',
  code: 'https://github.com/YogeshDevX-404/Multilangual_Ai_Assistence'
  },
  {
  title: '📖 Book Style Portfolio Website',
  desc: 'A creative book-style portfolio website built using HTML, CSS, and JavaScript, designed to strengthen core frontend fundamentals with a unique and interactive UI for portfolio presentation .',
  ss: '/book.png',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'bootstrap', 'Netlify'],
  live: 'https://bookstyleportfolio.netlify.app/',
  code: 'https://github.com/YogeshDevX-404/BookStylePortfolio'
  },
  {
  title: '☕ E-Commerce CoffeeShop',
  desc: 'A responsive e-commerce coffee shop website built using HTML, CSS, and JavaScript, featuring product listings, interactive UI, and a smooth shopping experience.',
  ss: '/aifresh.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  live: 'https://ecommercecoffeeshop.netlify.app/',
  code: 'https://github.com/YogeshDevX-404/CoffeeShop'
 },
  {
  title: '🛒 Amazon Clone Website',
  desc: 'A responsive Amazon clone built using HTML and CSS, replicating the homepage UI with a clean layout, product sections, and user-friendly design for learning frontend development.',
  ss: '/amaszon.png',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'bootstrap', 'Netlify'],
  live: 'https://amaszonclone.netlify.app/',
  code: 'https://github.com/YogeshDevX-404/AmaszonClone'
},
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
