import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Search } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Patna / Remote",
    type: "Full-time",
    description: "We're looking for an experienced full stack developer to join our growing team.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Banka / Remote",
    type: "Full-time",
    description: "Creative designer needed to craft beautiful and intuitive user experiences.",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Motihari / Remote",
    type: "Full-time",
    description: "Expert in React Native or Flutter to build cross-platform mobile applications.",
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Patna / Remote",
    type: "Full-time",
    description: "Design and implement scalable cloud infrastructure for enterprise clients.",
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "Drive digital marketing campaigns and grow our online presence.",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Patna / Remote",
    type: "Full-time",
    description: "Automate and optimize our development and deployment processes.",
  },
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Build your career with AppDost. We're always looking for talented individuals
              passionate about technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Work With Us?"
            subtitle="Be part of a team that values innovation, growth, and work-life balance"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { title: "Growth Opportunities", description: "Continuous learning and career advancement paths" },
              { title: "Flexible Work", description: "Remote-friendly culture with flexible hours" },
              { title: "Great Benefits", description: "Competitive salary, health insurance, and perks" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Open Positions"
            subtitle="Find your perfect role and apply today"
          />

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by title, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Job Listings */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover-lift"
              >
                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{job.description}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setSelectedJob(job)}
                      className="w-full bg-gradient-primary hover:opacity-90"
                    >
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Apply for {job.title}</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you soon.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div>
                        <Label htmlFor="resume">Resume URL or LinkedIn Profile</Label>
                        <Input id="resume" placeholder="https://..." />
                      </div>
                      <div>
                        <Label htmlFor="message">Cover Letter</Label>
                        <Textarea id="message" placeholder="Tell us why you're a great fit..." rows={4} />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                        Submit Application
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No positions found matching your search.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume and we'll
              keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Send Your Resume
            </Button>
          </motion.div>
        </div>
        </section>
    </div>
  );
};
export default Careers;
