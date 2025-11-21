'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const footerProjects = [
  { name: 'FlickFeed', href: '#projects' },
  { name: 'Amer Dashboard', href: '#projects' },
];

const socialLinks = [
  { icon: Github, href: 'https://www.github.com/amerkovacevic', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amerkovacevic', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Amer Kovacevic
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Platform Engineer II who designs and maintains robust infrastructure, automates deployments, and ensures platform reliability. In my free time I like to develop apps, websites, and more.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Section */}
          <div>
            <motion.h4
              className="text-lg font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Navigation
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navigation.map((item, index) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Projects Section */}
          <div>
            <motion.h4
              className="text-lg font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Featured Projects
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {footerProjects.map((project, index) => (
                <li key={project.name}>
                  <motion.a
                    href={project.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {project.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Amer Kovacevic. All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 glass rounded-full hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ArrowUp
              size={20}
              className="text-white group-hover:text-blue-400 transition-colors"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

