'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'FlickFeed',
    description: 'An iOS social platform for movie lovers to rate, review, and share films. Discover new favorites, build watchlists, and connect with fellow cinephiles.',
    tech: ['React-Native', 'NativeWind', 'Expo', 'Firebase'],
    image: 'bg-[#0F172A]',
    logo: '/assets/ff-logo-nobg.png',
    github: null,
    live: 'https://flickfeed.app',
  },
  {
    title: 'Brickfolio',
    description: 'An iOS app for LEGO collectors to catalog sets, track pricing, and monitor collection value. Built for quick inventorying and clean visual organization.',
    tech: ['React-Native', 'NativeWind', 'Expo', 'Firebase'],
    image: 'bg-[#f59e0b]',
    logo: '/assets/brickfolio.png',
    github: null,
    live: 'https://brickfolio.app',
  },
  {
    title: 'Alen\'s General Construction',
    description: 'A professional website highlighting services, projects, and credibility for a construction company. Built with a clean layout and responsive performance.',
    tech: ['React', 'TailwindCSS', 'Next.js'],
    image: 'bg-[#c3aa76]',
    logo: '/assets/agclogo.png',
    github: null,
    live: 'https://alensgeneralconstruction.com',
  },
  {
    title: 'amer.lol',
    description: 'A playground for creative web experiences, mini‑apps, and experiments. A fast, accessible hub for interactive tools and playful ideas.',
    tech: ['React', 'TailwindCSS', 'TypeScript', 'JavaScript', 'Next.js', 'Firebase'],
    image: 'bg-[#0f5132]',
    logo: '/assets/aklogo.png',
    github: 'https://github.com/amerkovacevic?tab=repositories',
    live: 'https://amer.lol',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-3">Selected Builds</p>
            <h2 className="text-4xl md:text-5xl font-display text-white">Projects</h2>
          </div>
          <p className="text-sm text-white/60 max-w-sm">
            Full product passes from idea to polish. Built to be used, not just viewed.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="card h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-white/50">Live</span>
                </div>
                <div className="p-6 sm:p-8 flex-1">
                  <h3 className="text-2xl font-display text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs uppercase tracking-[0.2em] text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
                <div className={`${project.image} h-36 sm:h-44 flex items-center justify-center border-t border-white/10`}>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    ) : (
                      <span className="text-white text-3xl font-bold opacity-50">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
