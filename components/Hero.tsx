'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(182, 255, 77, 0.18)',
            left: mousePosition.x - 260,
            top: mousePosition.y - 260,
            transition: 'all 0.35s ease-out',
          }}
        />
        <div className="absolute -right-20 -top-32 w-[520px] h-[520px] rounded-full blur-3xl bg-[rgba(77,208,255,0.16)]" />
        <div className="absolute -left-24 bottom-0 w-[420px] h-[420px] rounded-full blur-3xl bg-[rgba(255,138,61,0.18)]" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center py-12 sm:py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              className="tag text-white/80 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Personal Portfolio
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-white">Amer Kovacevic</span>
              <span className="block gradient-text">Product‑driven</span>
              <span className="block text-white">side projects</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/70 max-w-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I build focused products with clean UI, strong UX, and tight performance.
              This is a collection of shipped work and experiments.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 brutal-border font-semibold text-black text-sm sm:text-base shadow-lg transition-all bg-[#b6ff4d]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#experience"
                className="px-6 sm:px-8 py-3 sm:py-4 brutal-border font-semibold text-white text-sm sm:text-base hover:border-white/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Background
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-5 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a
                href="https://www.github.com/amerkovacevic"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                <span className="p-2 brutal-border group-hover:border-white/40">
                  <Github size={18} />
                </span>
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/amerkovacevic"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                <span className="p-2 brutal-border group-hover:border-white/40">
                  <Linkedin size={18} />
                </span>
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="card soft-ring p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">Featured</span>
                <span className="text-xs text-white/50">Latest</span>
              </div>
              <h3 className="text-2xl font-display text-white mb-2">Brickfolio</h3>
              <p className="text-sm text-white/70 mb-5">
                iOS app for LEGO collectors to track sets, pricing, and collection value.
              </p>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b6ff4d]" />
                <span className="text-xs text-white/60 uppercase tracking-[0.2em]">React‑Native • NativeWind • Expo • Firebase</span>
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-display text-white mb-4">Project Focus</h3>
              <div className="grid grid-cols-3 gap-3 text-xs text-white/70">
                {['UX First', 'Fast Loads', 'Polished UI'].map((chip) => (
                  <div key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-center">
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
