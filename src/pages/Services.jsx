import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Palette, 
  Shield,
  Globe,
  Zap,
  LineChart,
  Settings,
  Lock,
  Cpu
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with React, Vue, Angular and modern frameworks. Responsive, fast, and scalable solutions."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, or cross-platform solutions with React Native and Flutter for maximum reach."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and Google Cloud infrastructure setup, migration, and optimization for your business needs."
    },
    {
      icon: Database,
      title: "Custom CRM Systems",
      description: "Tailored customer relationship management systems to streamline your sales, marketing, and support processes."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront. From wireframes to pixel-perfect designs."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and implementation of best security practices."
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Complete online store development with payment integration, inventory management, and analytics."
    },
    {
      icon: Zap,
      title: "API Development",
      description: "RESTful and GraphQL APIs built for performance, security, and seamless integration with your systems."
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Data analytics dashboards and reporting tools to help you make informed business decisions."
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, continuous integration, and infrastructure as code for rapid development."
    },
    {
      icon: Lock,
      title: "Blockchain Development",
      description: "Smart contracts, DApps, and blockchain integration for secure and transparent transactions."
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by machine learning algorithms and artificial intelligence technologies."
    }
  ];

  const techStack = [
    "React", "Vue", "Angular", "Node.js", "Python", "Java",
    "React Native", "Flutter", "Swift", "Kotlin",
    "AWS", "Azure", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "MySQL", "Redis"
  ];

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive IT solutions designed to help your business thrive in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Technologies We Use"
            subtitle="Modern tools and frameworks for building robust solutions"
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-6 py-3 bg-card border-2 border-border rounded-full text-sm font-medium hover:border-primary/50 transition-colors hover-scale"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center bg-gradient-primary text-white p-12 lg:p-16 rounded-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life with our expertise and technology.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover-scale transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
