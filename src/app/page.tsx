'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ParticlesBackground from '@/components/ParticlesBackground'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <div className="text-cyber-primary text-2xl animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <ParticlesBackground />
      <Navigation />
      
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyber-primary/20 rounded-full filter blur-[120px] animate-float" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-cyber-secondary/20 rounded-full filter blur-[120px] animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-cyber-accent/20 rounded-full filter blur-[100px] animate-pulse-glow" />
      </div>

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>

      <footer className="relative z-10 text-center py-8 border-t border-white/10 bg-cyber-darker/80 backdrop-blur-sm">
        <p className="text-white/60 text-sm">
          © 2025 Cybersecurity Portfolio | Zbudowane z 💜 i ☕
        </p>
        <p className="text-cyber-primary text-sm mt-2">
          Hose-Zur @ AGH University of Science and Technology
        </p>
      </footer>
    </>
  )
}
