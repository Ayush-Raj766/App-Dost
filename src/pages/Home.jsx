import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Briefcase
} from "lucide-react";
import { Button } from "../components/ui/button";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import heroImage from "../assets/hero-bg.jpg";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services"
    },
    {
      icon: Database,
      title: "Custom CRM",
      description: "Tailored CRM systems to streamline your business operations"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and data protection"
    }
  ];

  const stats = [
    { icon: Briefcase, value: "200+", label: "Projects Completed" },
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Smartphone, value: "80+", label: "Mobile Apps" },
    { icon: Award, value: "50+", label: "CRM Systems" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      text: "AppDost transformed our business with their custom CRM. The team is professional and delivers on time."
    },
    {
      name: "Priya Sharma",
      company: "Digital Ventures",
      text: "Excellent web development services. They understood our vision and delivered beyond expectations."
    },
    {
      name: "Amit Patel",
      company: "CloudTech India",
      text: "Outstanding cloud solutions and support. Highly recommend AppDost for enterprise projects."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(220,230,255,0.5) 0%, rgba(240,248,255,0.3) 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              {...fadeInUp}
            >
              Complete IT Solutions for{" "}
              <span className="text-gradient">Web, Mobile & Cloud</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your business with cutting-edge technology solutions. We build scalable
              applications that drive growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float hidden lg:block">
          <div className="h-20 w-20 rounded-full bg-primary/10" />
        </div>
        <div
          className="absolute bottom-20 right-10 animate-float hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
          <div className="h-32 w-32 rounded-full bg-accent/10" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive IT solutions tailored to your business needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="A proven methodology for delivering exceptional results"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your business goals and requirements" },
                { step: "02", title: "Design", desc: "Creating intuitive and beautiful user experiences" },
                { step: "03", title: "Development", desc: "Building robust solutions with modern technology" },
                { step: "04", title: "Testing", desc: "Ensuring quality through rigorous testing" },
                { step: "05", title: "Deployment", desc: "Launching your solution with ongoing support" }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className="flex items-start space-x-4 lg:space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{process.title}</h3>
                    <p className="text-muted-foreground">{process.desc}</p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-primary hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card p-6 lg:p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your business with technology? Get a free consultation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/consultation">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
