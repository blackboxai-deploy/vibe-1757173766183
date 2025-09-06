'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/animations/TypewriterText';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

export function HeroSection() {
  const roles = [
    'Full-Stack Developer',
    'Frontend Specialist',
    'UI/UX Designer',
    'React Expert',
    'Problem Solver'
  ];

  const handleDownload = () => {
    // In a real application, this would download the actual resume
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxWrapper speed={0.3}>
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.5}>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse-slow"></div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.4}>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.6}>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </ParallaxWrapper>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text-primary">Alex Johnson</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mb-2">
              I'm a{' '}
              <TypewriterText 
                texts={roles}
                className="font-semibold text-blue-600"
                speed={100}
                deleteSpeed={50}
                pauseDuration={2000}
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            I bring ideas to life through clean code, innovative design, and user-centered thinking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg hover-lift"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium text-lg hover-lift"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}