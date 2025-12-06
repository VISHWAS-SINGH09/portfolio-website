import { motion } from 'framer-motion';
import { AboutInfo } from '../types';
import { fadeInUp } from '../utils/animations';

interface AboutProps {
  about: AboutInfo;
}

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-center"
          {...fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4 text-primary-400">
              Who I Am
            </h3>
            <div className="space-y-4">
              {about.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Interests & Education */}
          <div className="space-y-8">
            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-secondary-400">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-secondary-400">
                Education
              </h3>
              <div className="space-y-4">
                {about.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">
                      {edu.year} • {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
