'use client';

import { motion } from 'framer-motion';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { services } from '@/lib/projects-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const handleGetQuote = (serviceTitle: string) => {
    // Scroll to contact form with service pre-selected
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // You could also pre-fill a form field here
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollTrigger animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive web development 
            services tailored to your business needs.
          </p>
        </ScrollTrigger>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollTrigger
              key={service.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <Card className="group relative h-full bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white transition-all duration-300 hover-lift border-2 hover:border-blue-200">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-4xl mb-4 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (featureIndex * 0.05)
                        }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.price}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Starting price</div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    onClick={() => handleGetQuote(service.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all group-hover:shadow-lg"
                  >
                    Get Quote
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </Card>
            </ScrollTrigger>
          ))}
        </div>

        {/* Process Section */}
        <ScrollTrigger animation="slideUp" delay={0.6} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements, goals, and target audience',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating wireframes, user flows, and technical specifications',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your application with clean, scalable code',
                icon: '⚡'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Testing, deployment, and ongoing support',
                icon: '🚀'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl group-hover:bg-blue-200 transition-colors"
                  >
                    {process.icon}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollTrigger>

        {/* CTA Section */}
        <ScrollTrigger animation="slideUp" delay={0.8} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <Button
              onClick={() => handleGetQuote('General Inquiry')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3"
            >
              Get Free Consultation
            </Button>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}