'use client';

import { motion } from 'framer-motion';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { skills } from '@/lib/projects-data';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollTrigger animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating 
            digital experiences that make a difference.
          </p>
        </ScrollTrigger>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Info */}
          <ScrollTrigger animation="slideLeft" delay={0.2}>
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="relative w-80 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8ed0e30-139f-4062-bdbe-53cef930082d.png"
                    alt="Alex Johnson - Web Developer"
                    className="w-full h-full object-cover hover-scale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full p-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                </motion.div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Alex Johnson</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate full-stack developer based in San Francisco, specializing in 
                  modern web technologies. I love turning complex problems into simple, beautiful, 
                  and intuitive designs.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <div className="font-medium">alex@example.com</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <div className="font-medium">San Francisco, CA</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="font-medium text-green-600">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* Right Side - Skills */}
          <ScrollTrigger animation="slideRight" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Skills</h3>
                <p className="text-gray-600 mb-8">
                  Over the years, I've honed my skills in various technologies and frameworks. 
                  Here's a breakdown of my technical expertise:
                </p>
              </div>

              {/* Skills Categories */}
              <div className="space-y-8">
                {skills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover-lift">
                      <CardContent className="p-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                          {category.category}
                        </h4>
                        <div className="space-y-4">
                          {category.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: (categoryIndex * 0.1) + (techIndex * 0.05)
                              }}
                              viewport={{ once: true }}
                              className="space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <span className="flex items-center text-sm font-medium text-gray-700">
                                  <span className="mr-2">{tech.icon}</span>
                                  {tech.name}
                                </span>
                                <span className="text-sm text-gray-500">{tech.level}%</span>
                              </div>
                              <Progress 
                                value={tech.level} 
                                className="h-2"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <Card className="p-4 text-center hover-lift">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">Commits This Month</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center hover-lift">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
}