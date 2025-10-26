import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading IT solutions provider, known for excellence and innovation.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Quality, integrity, innovation, and customer satisfaction drive everything we do.",
    },
  ];

  const offices = [
    { city: "Banka", state: "Bihar" },
    { city: "Patna", state: "Bihar" },
    { city: "Motihari", state: "Bihar" },
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
              About <span className="text-gradient">AppDost</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We are a team of passionate developers, designers, and innovators
              dedicated to building exceptional digital solutions for businesses
              of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Story"
              subtitle="Building the future, one project at a time"
              centered={true}
            />

            <motion.div
              className="prose prose-lg max-w-none text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-center mb-6">
                Founded with a vision to bridge the gap between technology and
                business needs, AppDost has grown into a trusted partner for
                companies seeking digital transformation. Our journey began in
                Bihar, and today we serve clients across India with
                cutting-edge solutions in web development, mobile applications,
                and cloud infrastructure.
              </p>
              <p className="text-center">
                With over 200 successful projects and a team of experienced
                professionals, we continue to push the boundaries of what's
                possible in software development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover-lift transition-all duration-300 border-2 hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the talented people behind AppDost"
          />

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-8 lg:p-12 rounded-2xl border-2 border-border">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-6">
                Our team consists of experienced developers, creative designers,
                and strategic thinkers who are passionate about technology and
                committed to delivering excellence.
              </p>
              <p className="text-lg text-muted-foreground">
                Together, we bring diverse skills and perspectives to every
                project, ensuring innovative solutions that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Locations"
            subtitle="Serving clients from multiple locations across Bihar"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-card p-6 rounded-2xl border-2 border-border text-center hover-lift transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                <p className="text-muted-foreground">{office.state}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
