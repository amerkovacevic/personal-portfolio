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
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to the tech industry
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-yellow-500 opacity-20" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full border-4 border-gray-900 z-10" />
                  
                  {/* Content card */}
                  <motion.div
                    className={`glass rounded-2xl p-4 sm:p-6 md:p-8 flex-1 w-full ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-yellow-400 font-semibold mb-2">
                          <Briefcase size={18} />
                          <span className="text-sm sm:text-base">{experience.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400 text-sm sm:text-base">{experience.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={18} />
                        <span className="text-xs sm:text-sm">{experience.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-3 mt-4">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.2 + idx * 0.1 }}
                        >
                          <span className="text-yellow-500 mt-1.5 flex-shrink-0">▸</span>
                          <span className="flex-1">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

