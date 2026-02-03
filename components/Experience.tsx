'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Platform Engineer II',
    company: 'Mastercard',
    type: 'Full Time',
    period: 'August 2022 – Present',
    responsibilities: [
      'Supporting and maintaining operating systems, such as Oracle Linux along with VMware, to service customers that need assistance',
      'Using configuration management and infrastructure automation for repeatable tasks',
      'Completing status reports, implementations, troubleshooting of systems, and having communication between teammates',
      'Designing and implementing OS build processes and automation providing the right level of control and validation',
      'Assisting users with Operating Systems or hardware problems',
    ],
  },
  {
    title: 'Software Developer',
    company: 'SpearTip',
    type: 'Full Time',
    period: 'September 2021 – August 2022',
    responsibilities: [
      'Working with a team to create, manage, and maintain infrastructure and tools for SpearTip, as well as assisting other teams with issues pertaining to our suite of software',
      'Testing and pushing new applications, maintaining an open line of communication between the DevOps and Operations teams',
      'Actively participating in team meetings and troubleshooting issues that have been reported by the Operations team',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-3">Background</p>
            <h2 className="text-3xl md:text-4xl font-display text-white">
              Experience
            </h2>
          </div>
          <p className="text-sm text-white/60 max-w-sm">
            The day‑job backbone behind how I build dependable, thoughtful products.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 sm:p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {experience.type}
                </span>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Calendar size={16} />
                  {experience.period}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white mb-2">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-white/70 mb-5 text-sm">
                <Briefcase size={16} className="text-[#b6ff4d]" />
                {experience.company}
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
