'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { projects, Project } from '@/lib/projects-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type FilterType = 'all' | 'web' | 'mobile' | 'fullstack' | 'ui-ux';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'UI/UX Design', value: 'ui-ux' },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollTrigger animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            design, and problem-solving.
          </p>
        </ScrollTrigger>

        {/* Filter Buttons */}
        <ScrollTrigger animation="slideUp" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter.value
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </ScrollTrigger>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ScrollTrigger
                key={project.id}
                animation="slideUp"
                delay={index * 0.1}
              >
                <Card className="group cursor-pointer overflow-hidden hover-lift bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 mb-2">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.demoUrl) window.open(project.demoUrl, '_blank');
                            }}
                            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                          >
                            Live Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.githubUrl) window.open(project.githubUrl, '_blank');
                            }}
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                          >
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-black">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category.replace('-', '/')}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </ScrollTrigger>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                  >
                    ✕
                  </Button>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Badge variant="secondary">
                      {selectedProject.category.replace('-', '/')}
                    </Badge>
                    {selectedProject.featured && (
                      <Badge className="bg-yellow-500 text-black ml-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <Button
                        onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        View Live Demo
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      >
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}