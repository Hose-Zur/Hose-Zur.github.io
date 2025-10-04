'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Target, Award, BookOpen } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { icon: <BookOpen />, value: '1st', label: 'Rok studiów' },
    { icon: <Award />, value: '10+', label: 'CTF-ów' },
    { icon: <Target />, value: '15+', label: 'Projektów' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 gradient-text"
        >
          O mnie
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent rounded-2xl opacity-50 group-hover:opacity-75 blur-xl transition-all duration-300 animate-pulse-glow" />
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded-2xl flex items-center justify-center border border-cyber-primary/30 overflow-hidden">
                {/* Możesz podmienić na zdjęcie: <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                <User size={150} className="text-cyber-primary/50" />
                
                {/* Animated cyber grid overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff1a_1px,transparent_1px),linear-
