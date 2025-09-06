'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollTrigger animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </ScrollTrigger>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollTrigger animation="slideLeft" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Let's Talk
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're a fellow developer 
                  wanting to collaborate, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    value: 'alex@example.com',
                    link: 'mailto:alex@example.com'
                  },
                  {
                    icon: '📱',
                    title: 'Phone',
                    value: '+1 (555) 123-4567',
                    link: 'tel:+15551234567'
                  },
                  {
                    icon: '📍',
                    title: 'Location',
                    value: 'San Francisco, CA',
                    link: '#'
                  },
                  {
                    icon: '💼',
                    title: 'LinkedIn',
                    value: '/in/alex-johnson',
                    link: 'https://linkedin.com/in/alex-johnson'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors group hover-lift"
                  >
                    <div className="text-2xl mr-4">{contact.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {contact.title}
                      </div>
                      <div className="text-gray-600 text-sm">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: '⚡', url: 'https://github.com' },
                    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
                    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
                    { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-xl hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollTrigger>

          {/* Contact Form */}
          <ScrollTrigger animation="slideRight" delay={0.4}>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className={`mt-1 ${errors.subject ? 'border-red-500' : ''}`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`mt-1 min-h-32 ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
}