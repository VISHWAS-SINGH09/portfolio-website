import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../types';
import { fadeInUp } from '../utils/animations';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
          {...fadeInUp}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 ${
                  index % 2 === 0
                    ? 'md:right-0 md:translate-x-1/2 left-0 -translate-x-1/2'
                    : 'md:left-0 md:-translate-x-1/2 left-0 -translate-x-1/2'
                }`}
              />

              <div className="ml-8 md:ml-0 md:mr-8 glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                <p className="text-primary-400 font-medium mb-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
