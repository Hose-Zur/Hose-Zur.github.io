'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Code, Server, Lock, Terminal, Database, Wifi, Bug } from 'lucide-react'

const skillCategories = [
  {
    title: 'Cybersecurity Tools',
    icon: <Shield />,
    color: 'from-cyber-primary to-cyan-400',
    skills: [
      { name: 'Wireshark', level: 85 },
      { name: 'Metasploit', level: 75 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Nmap', level: 90 },
      { name: 'Hydra', level: 70 },
    ]
  },
  {
    title: 'Programowanie',
    icon: <Code />,
    color: 'from-cyber-secondary to-pink-400',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'C++', level: 65 },
    ]
  },
  {
    title: 'Systemy & Networking',
    icon: <Server />,
    color: 'from-cyber-accent to-purple-400',
    skills: [
      { name: 'Linux/Ubuntu', level: 85 },
      { name: 'Windows Security', level: 70 },
      { name: 'VMware', level: 80 },
      { name: 'TCP/IP', level: 85 },
      { name: 'DNS/VPN', level: 75 },
    ]
  },
  {
    title: 'Security Practices',
    icon: <Lock />,
    color: 'from-orange-400 to-red-400',
    skills: [
      { name: 'Penetration Testing', level: 80 },
      { name: 'Vulnerability Scanning', level: 85 },
      { name: 'Kryptografia', level: 70 },
      { name: 'OWASP Top 10', level: 90 },
      { name: 'Incident Response', level: 75 },
    ]
  }
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="section-padding bg-cyber-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 gradient-text"
        >
          Umiejętności
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + index * 0.05 
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-cyber-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + index * 0.05,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Dodatkowe Narzędzia</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Terminal />, name: 'Kali Linux' },
              { icon: <Database />, name: 'MongoDB' },
              { icon: <Wifi />, name: 'Aircrack-ng' },
              { icon: <Bug />, name: 'OWASP ZAP' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 p-4 glass-card"
              >
                <div className="text-cyber-primary">
                  {tool.icon}
                </div>
                <span className="text-sm text-white/70">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
