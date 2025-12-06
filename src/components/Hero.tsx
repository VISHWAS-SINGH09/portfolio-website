import { motion } from 'framer-motion';
import { PersonalInfo, CTAButton, SocialLink } from '../types';
import { useState, useEffect } from 'react';

interface HeroProps {
  personal: PersonalInfo;
  ctaButtons: CTAButton[];
  socialLinks?: SocialLink[];
}

export function Hero({ personal, ctaButtons }: HeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const firstName = personal.name.split(' ')[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= firstName.length) {
        setDisplayedName(firstName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [firstName]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-6"
          >
            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              <span className="pill">Python</span>
              <span className="pill">TensorFlow</span>
              <span className="pill">Machine Learning</span>
            </motion.div>

            {/* Main heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
              >
                <span className="text-foreground">
                  Hello, I'm
                  <br />
                </span>
                <span className="text-gradient text-6xl sm:text-7xl lg:text-8xl font-bold inline-flex">
                  {displayedName}
                  <span className="animate-pulse">.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 max-w-lg text-lg text-gray-400 tracking-tight"
              >
                {personal.tagline}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className={`group px-6 py-3 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                    button.variant === 'primary'
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'glass border border-white/10 text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {button.label}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </motion.div>



            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="hidden xl:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-sm text-gray-500 tracking-tight"
            >
              Scroll to discover
              <svg
                className="w-4 h-4 mt-1 animate-bounce"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path d="M7.5 2L7.5 12M7.5 12L3.5 8M7.5 12L11.5 8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="glass-strong rounded-3xl h-[515px] w-full overflow-hidden border border-white/10 flex items-center justify-center">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
              
              {/* Floating elements */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-9xl"
                >
                  🤖
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-gray-400 text-sm"
                >
                  AI & Machine Learning
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
