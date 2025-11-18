'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const dailyCoreStack = [
  { name: 'Linux', image: '/assets/linux.png', color: 'from-yellow-500 to-orange-500' },
  { name: 'Bash', image: '/assets/bash.png', color: 'from-gray-600 to-gray-800' },
  { name: 'Ansible', image: '/assets/ansible.png', color: 'from-red-500 to-red-700' },
  { name: 'Jenkins', image: '/assets/jenkins.png', color: 'from-blue-500 to-blue-700' },
  { name: 'Git', image: '/assets/git.png', color: 'from-orange-500 to-red-500' },
  { name: 'NGINX', image: '/assets/nginx.png', color: 'from-green-500 to-green-700' },
  { name: 'Ubuntu', image: '/assets/ubuntu.png', color: 'from-orange-500 to-orange-700' },
  { name: 'SQLite', image: '/assets/sqlite.png', color: 'from-blue-400 to-blue-600' },
];

const sideProjectStack = [
  { name: 'React', image: '/assets/react.png', color: 'from-cyan-500 to-blue-500' },
  { name: 'Firebase', image: '/assets/firebase.png', color: 'from-orange-500 to-yellow-500' },
  { name: 'Node.js', image: '/assets/nodejs.png', color: 'from-green-500 to-emerald-500' },
  { name: 'Figma', image: '/assets/figma.png', color: 'from-purple-500 to-pink-500' },
  { name: 'TypeScript', image: '/assets/typescript.png', color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', image: '/assets/javascript.png', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Vite.js', image: '/assets/vite.png', color: 'from-purple-400 to-purple-600' },
  { name: 'TailwindCSS', image: '/assets/tailwindcss.png', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', image: '/assets/nextjs.png', color: 'from-blue-500 to-indigo-600' },
  { name: 'ESLint', image: '/assets/eslint.png', color: 'from-purple-500 to-purple-700' },
  { name: 'Docker', image: '/assets/docker.png', color: 'from-blue-500 to-cyan-500' },
  { name: 'Swift', image: '/assets/swift.png', color: 'from-orange-500 to-orange-700' },
];

export default function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="technologies" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Current Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional products
          </p>
        </motion.div>

        {/* Daily Core Stack */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Daily Core Stack</span>
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {dailyCoreStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="glass rounded-xl p-4 text-center cursor-pointer h-full flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 mb-2 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Side Project Development */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Side Project Development</span>
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {sideProjectStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="glass rounded-xl p-4 text-center cursor-pointer h-full flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 mb-2 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

