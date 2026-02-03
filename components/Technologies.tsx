'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  { name: 'Figma', image: '/assets/figma.png', color: 'from-yellow-500 to-orange-500' },
  { name: 'TypeScript', image: '/assets/typescript.png', color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', image: '/assets/javascript.png', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Vite.js', image: '/assets/vite.png', color: 'from-yellow-400 to-orange-600' },
  { name: 'TailwindCSS', image: '/assets/tailwindcss.png', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', image: '/assets/nextjs.png', color: 'from-blue-500 to-indigo-600' },
  { name: 'ESLint', image: '/assets/eslint.png', color: 'from-yellow-500 to-orange-700' },
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
    <section id="technologies" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white">Toolbox</h2>
            <p className="text-sm text-white/60 mt-2">A split between infrastructure craft and product build tools.</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">What I build with</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            className="card p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-display text-white mb-6">Everyday Core Stack</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {dailyCoreStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="text-sm text-white/80">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="card p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-display text-white mb-6">Creative Build Stack</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {sideProjectStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="text-sm text-white/80">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
