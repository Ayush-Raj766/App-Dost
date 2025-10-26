import { motion } from "framer-motion";
import { ExternalLink, Code2, Smartphone, Globe, Database } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      icon: Globe,
      description:
        "Full-featured online store with payment integration and inventory management",
      fullDescription:
        "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing through Stripe, advanced product search and filtering, customer reviews and ratings, and an admin dashboard for managing orders and analytics. Built with scalability in mind to handle thousands of concurrent users.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: [
        "Payment Integration",
        "Inventory Management",
        "Admin Dashboard",
        "Real-time Updates",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile App",
      icon: Smartphone,
      description: "Patient management and telemedicine app for healthcare providers",
      fullDescription:
        "A HIPAA-compliant telemedicine platform enabling video consultations, appointment scheduling, electronic health records management, prescription management, and secure messaging between patients and healthcare providers. Features real-time notifications and offline data access for critical patient information.",
      technologies: ["React Native", "Firebase", "Redux"],
      features: [
        "Video Consultations",
        "EHR Management",
        "Secure Messaging",
        "Appointment Scheduling",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "CRM Dashboard",
      category: "Custom CRM",
      icon: Database,
      description:
        "Complete customer relationship management system with analytics",
      fullDescription:
        "An enterprise-grade CRM solution with comprehensive contact management, sales pipeline tracking, automated workflows, advanced analytics and reporting, email integration, and task management. Includes AI-powered lead scoring and predictive analytics to help sales teams prioritize opportunities.",
      technologies: ["Vue.js", "Python", "MongoDB", "AWS"],
      features: [
        "Sales Pipeline",
        "Analytics Dashboard",
        "Email Integration",
        "AI Lead Scoring",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Restaurant Ordering System",
      category: "Web Development",
      icon: Globe,
      description: "Online food ordering platform with real-time order tracking",
      fullDescription:
        "A full-featured food ordering platform with menu management, real-time order tracking, payment integration, customer reviews, delivery management, and restaurant analytics. Features a mobile-responsive design, multi-restaurant support, and integration with popular payment gateways.",
      technologies: ["React", "Express", "MySQL"],
      features: [
        "Real-time Tracking",
        "Payment Integration",
        "Multi-restaurant Support",
        "Analytics",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Fitness Tracker App",
      category: "Mobile App",
      icon: Smartphone,
      description: "Workout and nutrition tracking app with social features",
      fullDescription:
        "A comprehensive fitness application with workout planning and tracking, nutrition logging with barcode scanning, progress photos and measurements, social features for community motivation, integration with wearable devices, and personalized workout recommendations based on user goals and performance.",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      features: [
        "Workout Tracking",
        "Nutrition Logging",
        "Social Features",
        "Wearable Integration",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      icon: Code2,
      description: "Property listing and management platform with advanced search",
      fullDescription:
        "A modern real estate platform featuring advanced property search with filters, virtual tours and 360° photos, agent management system, lead generation tools, mortgage calculator, document management, and CRM integration. Includes map-based search and neighborhood insights.",
      technologies: ["Angular", "Java", "PostgreSQL"],
      features: [
        "Virtual Tours",
        "Advanced Search",
        "Lead Management",
        "Document System",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      title: "EdTech Learning Platform",
      category: "Web Development",
      icon: Globe,
      description:
        "Online learning platform with course management and video streaming",
      fullDescription:
        "A scalable e-learning platform with course creation tools, HD video streaming, interactive quizzes and assignments, progress tracking, discussion forums, certificate generation, and payment integration. Features adaptive learning paths and AI-powered course recommendations.",
      technologies: ["React", "Node.js", "AWS", "Redis"],
      features: [
        "Video Streaming",
        "Course Management",
        "Certificates",
        "Progress Tracking",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Logistics Management App",
      category: "Mobile App",
      icon: Smartphone,
      description: "Fleet tracking and delivery management mobile application",
      fullDescription:
        "A comprehensive logistics solution with real-time GPS tracking, route optimization, proof of delivery with digital signatures, driver management, fuel tracking, vehicle maintenance scheduling, and automated customer notifications. Includes advanced analytics for fleet performance.",
      technologies: ["React Native", "Python", "MongoDB"],
      features: ["GPS Tracking", "Route Optimization", "Proof of Delivery", "Analytics"],
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Sales CRM System",
      category: "Custom CRM",
      icon: Database,
      description: "Sales pipeline management with automated lead scoring",
      fullDescription:
        "A powerful sales CRM with visual pipeline management, AI-driven lead scoring, email campaign automation, meeting scheduler, quote and proposal generation, sales forecasting, and comprehensive reporting. Integrates with popular email clients and calendar applications.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
      features: [
        "Pipeline Management",
        "Lead Scoring",
        "Email Automation",
        "Sales Forecasting",
      ],
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our successful projects and see how we've helped businesses transform digitally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card
                  className="h-full hover-lift transition-all duration-300 border-2 hover:border-primary/50 hover:shadow-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}
                      >
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Impact" subtitle="Results that speak for themselves" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "150+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Industries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to See Your Project Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to create something amazing. Get in touch to discuss your project.
            </p>
            <Link to="/consultation">
              <Button
                size="lg"
                className="bg-gradient-primary text-white px-8 hover-scale transition-all"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-r ${selectedProject.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <selectedProject.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedProject.fullDescription}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features?.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 p-3 bg-secondary/30 rounded-lg"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in a similar project for your business?
                  </p>
                  <Link to="/consultation" onClick={() => setSelectedProject(null)}>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
