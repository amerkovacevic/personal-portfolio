'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'FlickFeed',
    description: 'An iOS social media platform for movie lovers. Rate, review and share movies with your friends and followers. Discover new films, create watchlists, and engage with a community of cinephiles. Built with React Native and Expo for a native iOS experience.',
    tech: ['React-Native', 'NativeWind', 'Expo', 'Firebase'],
    image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    logo: '/assets/1024.png',
    github: null,
    live: 'https://flickfeed.app',
  },
  {
    title: 'Amer Dashboard',
    description: 'A comprehensive dashboard containing tools and projects I\'ve made. A centralized hub showcasing various applications and utilities built for different purposes.',
    tech: ['React', 'TailwindCSS', 'TypeScript', 'JavaScript', 'Next.js', 'Firebase'],
    image: 'bg-gradient-to-br from-green-500 to-teal-600',
    logo: '/assets/aklogo.png',
    github: 'https://github.com/amerkovacevic?tab=repositories',
    live: 'https://dashboard.amerkovacevic.com',
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
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and expertise
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
                className="glass rounded-2xl overflow-hidden h-full flex flex-col"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Project Image/Logo */}
                <div className={`${project.image} h-48 relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.logo ? (
                      <motion.div
                        className="relative w-32 h-32"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </motion.div>
                    ) : (
                      <span className="text-white text-4xl font-bold opacity-50">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
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

