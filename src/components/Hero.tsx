'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Shield, Code, Lock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center max-w-5xl mx-auto"
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 text-cyber-primary/30"
          >
            <Shield size={40} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 right-20 text-cyber-secondary/30"
          >
            <Code size={50} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-1/4 text-cyber-accent/30"
          >
            <Lock size={45} />
          </motion.div>
        </div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
        >
          <span className="gradient-text text-shadow-glow">Cybersecurity</span>
          <br />
          <span className="text-white/90">Enthusiast</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-white/70 mb-4"
        >
          Student AGH | Ethical Hacker | Security Researcher
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-cyber-primary mb-12 flex items-center justify-center gap-2"
        >
          <Lock className="w-5 h-5" />
          Zabezpieczanie cyfrowego świata, jeden kod na raz
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button bg-gradient-to-r from-cyber-primary to-cyber-accent text-cyber-dark hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            <span className="relative z-10">Zobacz Projekty</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button border-2 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-cyber-dark"
          >
            Kontakt
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-cyber-primary cursor-pointer"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </motion.div>
    </section>
  )
}
