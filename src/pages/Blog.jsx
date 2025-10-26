import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Cloud Solutions",
  "CRM Solutions",
  "Design",
  "Security",
];

const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development",
    author: "Rahul Sharma",
    date: "2024-03-15",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "mobile-app-development-best-practices",
    title: "Mobile App Development: Best Practices for 2024",
    excerpt: "Learn the essential best practices for building successful mobile applications",
    author: "Priya Patel",
    date: "2024-03-10",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "cloud-computing-solutions-for-startups",
    title: "Cloud Computing Solutions for Startups",
    excerpt: "How startups can leverage cloud computing to scale efficiently and cost-effectively",
    author: "Amit Kumar",
    date: "2024-03-05",
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: 4,
    slug: "building-custom-crm-systems",
    title: "Building Custom CRM Systems That Drive Results",
    excerpt: "A comprehensive guide to developing custom CRM solutions tailored to your business",
    author: "Sneha Reddy",
    date: "2024-02-28",
    category: "CRM Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: 5,
    slug: "ui-ux-design-principles-2024",
    title: "Modern UI/UX Design Principles That Matter",
    excerpt: "Essential design principles for creating exceptional user experiences",
    author: "Kavya Singh",
    date: "2024-02-20",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "cybersecurity-best-practices-for-businesses",
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Protect your business with these essential cybersecurity practices and strategies",
    author: "Vikram Malhotra",
    date: "2024-02-15",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
    readTime: "7 min read",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
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
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends, tips, and best practices in
              technology and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover-scale"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover-lift overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No articles found matching your criteria.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get the latest articles and insights delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground"
              />
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
