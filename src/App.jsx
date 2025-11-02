import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  about,
  contact,
  experience,
  hero,
  projects,
  skills,
} from './data'

const Section = ({ id, title, eyebrow, description, children }) => (
  <section id={id} className="py-24" aria-labelledby={`${id}-title`}>
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-title`}
          className="mt-4 text-3xl font-bold tracking-tight text-accent-50 sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-7 text-quaternary-300">{description}</p>
        )}
      </div>
      {children}
    </div>
  </section>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-tertiary-600 bg-secondary-700/60 px-3 py-1 text-xs font-medium text-quaternary-200">
    {children}
  </span>
)

function App() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status === 'submitting') {
      return
    }

    setStatus('submitting')
    setFeedbackMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedbackMessage(
        'Message delivery is temporarily unavailable. Please reach out using the direct contact details below.'
      )
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      formRef.current?.reset()
      setStatus('success')
      setFeedbackMessage("Thanks for reaching out! I'll get back to you shortly.")
    } catch (error) {
      console.error('EmailJS error', error)
      setStatus('error')
      setFeedbackMessage(
        'Something went wrong while sending your message. Please try again or reach out using the direct contact details below.'
      )
    }
  }

  return (
    <div className="min-h-screen bg-primary-800 text-accent-50">
      <header className="sticky top-0 z-50 border-b border-tertiary-500/30 bg-primary-800/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary">
          <a href="#hero" className="text-lg font-semibold text-accent-50">
            {hero.name}
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-quaternary-300 md:flex">
            <a className="transition hover:text-tertiary-400" href="#about">
              About
            </a>
            <a className="transition hover:text-tertiary-400" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-tertiary-400" href="#projects">
              Portfolio
            </a>
            <a className="transition hover:text-tertiary-400" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-tertiary-400" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="hidden rounded-full bg-tertiary-500 px-4 py-2 text-sm font-semibold text-accent-50 transition hover:bg-tertiary-600 active:bg-tertiary-600 md:inline-flex touch-manipulation"
            href={hero.cta.secondary.href}
            target="_blank"
            rel="noreferrer"
          >
            Connect
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-[-20%] -z-10 h-[500px] bg-gradient-to-br from-tertiary-500/40 via-transparent to-quaternary-500/30 blur-3xl" />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-32 pt-24 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-accent-50 sm:text-5xl lg:text-6xl">
                {hero.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-quaternary-200">{hero.tagline}</p>
              <p className="mt-6 text-lg leading-8 text-quaternary-300">{hero.description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-tertiary-500 px-6 py-3 text-sm font-semibold text-accent-50 shadow-lg shadow-tertiary-500/20 transition hover:-translate-y-0.5 hover:bg-tertiary-400 active:bg-tertiary-400 touch-manipulation"
                  href={hero.cta.primary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {hero.cta.primary.label}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-tertiary-600 bg-secondary-700 px-6 py-3 text-sm font-semibold text-quaternary-200 transition hover:border-tertiary-400 hover:text-tertiary-400 active:border-tertiary-400 active:text-tertiary-400 touch-manipulation"
                  href={hero.cta.secondary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {hero.cta.secondary.label}
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-1 gap-6 text-sm text-quaternary-300 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-tertiary-500/30 bg-secondary-700/70 p-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-quaternary-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 text-2xl font-semibold text-accent-50">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <aside className="w-full max-w-md space-y-6 rounded-3xl border border-tertiary-500/30 bg-secondary-700/70 p-8 shadow-2xl shadow-tertiary-500/20">
              <h2 className="text-lg font-semibold text-accent-50">Let's collaborate</h2>
              <p className="text-sm text-quaternary-300">
                Based in {hero.location}. I work with founders, startups, and teams to design and build thoughtful digital products. From idea to deployment, I focus on creating software that feels good to use and scales with growth.
              </p>
              <ul className="space-y-3 text-sm text-quaternary-300">
                <li>
                  <span className="font-semibold text-accent-50">Location:</span> {hero.location}
                </li>
                <li>
                  <span className="font-semibold text-accent-50">Availability:</span> {hero.availability}
                </li>
                <li>
                  <a
                    className="inline-flex w-full items-center justify-center rounded-full border border-tertiary-400 px-4 py-2 text-sm font-semibold text-tertiary-400 transition hover:bg-tertiary-400 hover:text-primary-800 active:bg-tertiary-400 active:text-primary-800 touch-manipulation"
                    href="#contact"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <Section id="about" title="About me" description={about.description}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6 text-lg leading-8 text-quaternary-300">
              <p>
                Outside of engineering, I enjoy creating things. I build websites, apps, and digital tools for fun, often exploring ideas that make life easier or more engaging. From interactive mini-games to automation utilities and experimental web projects, I like bringing creative concepts to life through code.
              </p>
              <p>
                Whether it’s solving complex backend problems or building something from scratch, I’m motivated by curiosity, craftsmanship, and a constant desire to learn and improve.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Highlights</h3>
              <ul className="space-y-3 text-sm text-quaternary-300">
                {about.highlights.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-tertiary-500/30 bg-secondary-700/70 p-4">
                    <span className="mt-1 text-tertiary-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          description="Selected roles that showcase leadership, product thinking, and end-to-end delivery."
        >
          <div className="space-y-6">
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.title}`}
                className="grid gap-6 rounded-3xl border border-tertiary-500/30 bg-secondary-700/40 p-8 shadow-lg shadow-primary-800/40 lg:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-quaternary-200">{role.company}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-quaternary-500">{role.timeframe}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-accent-50">{role.title}</h3>
                  <p className="text-sm leading-6 text-quaternary-300">{role.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected work"
          title="Portfolio"
          description="Recent case studies and experiments that highlight my approach to building resilient web experiences."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-tertiary-500/30 bg-secondary-700/50 p-6 shadow-lg shadow-primary-800/40 transition hover:-translate-y-1 hover:border-tertiary-400/60"
              >
                <div>
                  <h3 className="text-xl font-semibold text-accent-50">{project.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-quaternary-300">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-tertiary-400 transition hover:text-tertiary-300"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Core toolkit"
          title="Skills & tools"
          description="Technologies I reach for when designing scalable, maintainable solutions."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Core expertise</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.core.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Tools & Platforms</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.tools.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Cloud & Infrastructure</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.cloud.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Development & Workflow</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.development.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Currently Exploring</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.exploring.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Let’s build together"
          title="Contact me"
          description="Share a little about your project, and I’ll be in touch within two business days."
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-tertiary-500/30 bg-secondary-700/40 p-8 shadow-xl shadow-tertiary-500/10"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-quaternary-200">
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-tertiary-600 bg-primary-800/60 px-4 py-3 text-sm text-accent-50 placeholder:text-quaternary-500 shadow-inner shadow-primary-800 focus:border-tertiary-400 focus:outline-none focus:ring-2 focus:ring-tertiary-500/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-quaternary-200">
                  Email
                </label>
                <input
                  id="email"
                  name="reply_to"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-tertiary-600 bg-primary-800/60 px-4 py-3 text-sm text-accent-50 placeholder:text-quaternary-500 shadow-inner shadow-primary-800 focus:border-tertiary-400 focus:outline-none focus:ring-2 focus:ring-tertiary-500/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-quaternary-200">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-2 w-full rounded-xl border border-tertiary-600 bg-primary-800/60 px-4 py-3 text-sm text-accent-50 placeholder:text-quaternary-500 shadow-inner shadow-primary-800 focus:border-tertiary-400 focus:outline-none focus:ring-2 focus:ring-tertiary-500/40"
                />
              </div>
              {feedbackMessage && (
                <p className="text-sm text-quaternary-300" role="status" aria-live="polite">
                  {feedbackMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center rounded-full bg-tertiary-500 px-6 py-3 text-sm font-semibold text-accent-50 transition hover:-translate-y-0.5 hover:bg-tertiary-400 active:bg-tertiary-400 disabled:cursor-not-allowed disabled:opacity-60 touch-manipulation"
              >
                {status === 'submitting' ? 'Sending...' : 'Send message'}
              </button>
            </form>
            {status === 'error' && (
              <div className="space-y-6 text-sm text-quaternary-300">
                <div className="rounded-3xl border border-tertiary-500/30 bg-secondary-700/40 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-tertiary-400">Direct contact</h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <span className="font-semibold text-accent-50">Email:</span>{' '}
                      <a className="text-tertiary-400 hover:text-tertiary-300 transition" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-accent-50">Phone:</span>{' '}
                      <a className="text-tertiary-400 hover:text-tertiary-300 transition" href={`tel:${contact.phone}`}>
                        {contact.phone}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-accent-50">LinkedIn:</span>{' '}
                      <a className="text-tertiary-400 hover:text-tertiary-300 transition" href={contact.linkedin} target="_blank" rel="noreferrer">
                        {contact.linkedin.replace('https://www.', '')}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-accent-50">GitHub:</span>{' '}
                      <a className="text-tertiary-400 hover:text-tertiary-300 transition" href={contact.github} target="_blank" rel="noreferrer">
                        {contact.github.replace('https://', '')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Section>
      </main>

      <footer className="w-full border-t border-tertiary-500/30 bg-primary-800/80 py-4 text-center text-xs text-quaternary-500">
        <p>&copy; {new Date().getFullYear()} Amer Kovacevic All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
