'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Lock, Shield, Code, Wifi, Database, Terminal } from 'lucide-react'

const projects = [
  {
    title: 'Secure Password Manager',
    description: 'Menedżer haseł z szyfrowaniem AES-256, implementujący najlepsze praktyki bezpieczeństwa. Projekt zawiera generowanie silnych haseł oraz bezpieczne przechowywanie danych.',
    icon: <Lock />,
    tech: ['Python', 'AES', 'Cryptography', 'SQLite'],
    github: 'https://github.com/Hose-Zur/password-manager',
    demo: '#',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Penetration Testing Lab',
    description: 'Środowisko testowe do przeprowadzania symulacji ataków na wirtualnych maszynach. Scenariusze obejmują SQL injection, XSS, CSRF i inne podatności OWASP.',
    icon: <Shield />,
    tech: ['Metasploit', 'VMware', 'Kali Linux', 'Docker'],
    github: 'https://github.com/Hose-Zur/pentest-lab',
    demo: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Security Automation Scripts',
    description: 'Zestaw skryptów Python automatyzujących zadania security: skanowanie portów, analiza logów, detekcja anomalii w ruchu sieciowym oraz monitoring podatności.',
    icon: <Code />,
    tech: ['Python', 'Nmap', 'Bash', 'Selenium'],
    github: 'https://github.com/Hose-Zur/security-scripts',
    demo: '#',
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Web Vulnerability Scanner',
    description: 'Narzędzie do automatycznego skanowania aplikacji webowych pod kątem powszechnych podatności (XSS, SQLi, CSRF). Generuje szczegółowe raporty z rekomendacjami.',
    icon: <Terminal />,
    tech: ['Python', 'OWASP', 'BeautifulSoup', 'Requests'],
    github: 'https://github.com/Hose-Zur/web-scanner',
    demo: '#',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Network Traffic Analyzer',
    description: 'Analizator ruchu sieciowego wykrywający podejrzane pakiety, skanowania portów i potencjalne ataki DDoS. Wizualizacja danych w czasie rzeczywistym.',
    icon: <Wifi />,
    tech: ['Wireshark', 'Python', 'Scapy', 'Plotly'],
    github: 'https://github.com/Hose-Zur/traffic-analyzer',
    demo: '#',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'CTF Writeups & Solutions',
    description: 'Dokumentacja rozwiązań z różnych konkursów CTF. Zawiera analizy technik exploitacji, reverse engineeringu oraz kryptografii stosowanych w wyzwaniach.',
    icon: <Database />,
    tech: ['CTF', 'Forensics', 'Reverse Eng', 'Crypto'],
    github: 'https://github.com/Hose-Zur/ctf-writeups',
    demo: '#',
    color: 'from-pink-500 to-rose-500'
  }
]

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 gradient-text"
        >
          Projekty
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mb-4`}>
                {project.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/70 hover:text-cyber-primary transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">Code</span>
                </motion.a>
                
                {project.demo !== '#' && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white/70 hover:text-cyber-secondary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                )}
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hose-Zur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cyber-button bg-gradient-to-r from-cyber-primary to-cyber-accent text-cyber-dark"
          >
            <Github size={20} />
            <span>Zobacz więcej na GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
