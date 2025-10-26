import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Sample blog data - in production, fetch from API or CMS
  const blogPosts = {
    "future-of-web-development-2024": {
      title: "The Future of Web Development in 2024",
      category: "Web Development",
      date: "March 15, 2024",
      author: "Rahul Sharma",
      readTime: "5 min read",
      excerpt: "Explore the latest trends and technologies shaping the future of web development",
      content: [
        "The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deliver web applications.",
        "## Key Trends to Watch",
        "**1. AI-Powered Development Tools**: Artificial Intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and other AI assistants are becoming indispensable for modern developers, helping to write boilerplate code, suggest optimizations, and even detect bugs before they reach production.",
        "**2. Edge Computing**: Moving computation closer to users through edge networks is becoming the norm. This approach significantly reduces latency and improves user experience, especially for globally distributed applications.",
        "**3. WebAssembly Growth**: WebAssembly (WASM) is enabling high-performance applications in the browser that were previously only possible with native apps. From video editing to 3D rendering, WASM is opening new possibilities for web applications.",
        "## The Rise of Jamstack",
        "Jamstack architecture continues to gain momentum, offering improved performance, security, and scalability. Static site generators combined with headless CMS solutions are becoming the go-to choice for content-heavy websites.",
        "## Conclusion",
        "The future of web development is exciting and full of opportunities. Staying updated with these trends and continuously learning new technologies will be key to success in this dynamic field."
      ],
      tags: ["Web Development", "Trends", "Technology", "AI"]
    },
    "mobile-app-development-best-practices": {
      title: "Mobile App Development: Best Practices for 2024",
      category: "Mobile Development",
      date: "March 10, 2024",
      author: "Priya Patel",
      readTime: "6 min read",
      excerpt: "Learn the essential best practices for building successful mobile applications",
      content: [
        "Building a successful mobile application requires more than just writing code. It demands a deep understanding of user needs, platform-specific guidelines, and industry best practices.",
        "## User-Centric Design",
        "The foundation of any successful mobile app is a user-centric design approach. This means putting users at the center of every decision, from feature prioritization to UI/UX design.",
        "**Key Principles:**",
        "- Intuitive navigation that requires minimal learning curve",
        "- Consistent design patterns across the app",
        "- Responsive and performant interfaces",
        "- Accessibility considerations for all users",
        "## Performance Optimization",
        "Mobile users expect fast, responsive applications. Performance optimization should be a priority from day one, not an afterthought.",
        "**Essential Practices:**",
        "- Minimize app size and startup time",
        "- Implement efficient data caching strategies",
        "- Optimize images and media assets",
        "- Use lazy loading for non-critical resources",
        "## Security Best Practices",
        "With increasing concerns about data privacy, security must be built into every layer of your mobile application.",
        "**Critical Security Measures:**",
        "- Implement secure authentication and authorization",
        "- Encrypt sensitive data both in transit and at rest",
        "- Follow platform-specific security guidelines",
        "- Regular security audits and updates",
        "## Testing Strategy",
        "Comprehensive testing is crucial for delivering a quality mobile app. Implement automated testing wherever possible and maintain a robust QA process.",
        "## Conclusion",
        "Following these best practices will help you build mobile applications that users love and trust. Remember, building a great app is an iterative process that requires continuous improvement based on user feedback and evolving technologies."
      ],
      tags: ["Mobile Development", "Best Practices", "iOS", "Android"]
    },
    "cloud-computing-solutions-for-startups": {
      title: "Cloud Computing Solutions for Startups",
      category: "Cloud Solutions",
      date: "March 5, 2024",
      author: "Amit Kumar",
      readTime: "7 min read",
      excerpt: "How startups can leverage cloud computing to scale efficiently and cost-effectively",
      content: [
        "For startups, choosing the right cloud infrastructure can make the difference between success and failure. Cloud computing offers scalability, cost-efficiency, and flexibility that traditional infrastructure simply cannot match.",
        "## Why Cloud Computing for Startups?",
        "Startups operate in a unique environment where resources are limited, but the need for scalability is high. Cloud computing addresses these challenges perfectly by offering:",
        "**1. Cost Efficiency**: Pay only for what you use, eliminating large upfront infrastructure investments.",
        "**2. Scalability**: Scale resources up or down based on demand without any downtime.",
        "**3. Global Reach**: Deploy applications globally with minimal effort and cost.",
        "**4. Focus on Core Business**: Let cloud providers handle infrastructure management while you focus on building your product.",
        "## Choosing the Right Cloud Provider",
        "The three major cloud providers - AWS, Google Cloud, and Microsoft Azure - each have their strengths:",
        "**AWS**: Widest range of services and most mature ecosystem",
        "**Google Cloud**: Best for machine learning and data analytics",
        "**Azure**: Ideal if you're already in the Microsoft ecosystem",
        "## Essential Cloud Services for Startups",
        "**Compute Services**: Flexible virtual machines and containerized applications",
        "**Database Services**: Managed databases that handle scaling automatically",
        "**Storage Solutions**: Secure and scalable object storage for your application data",
        "**CDN and Edge Services**: Fast content delivery to users worldwide",
        "## Cost Management Strategies",
        "Cloud costs can spiral out of control if not managed properly. Here are essential strategies:",
        "- Use auto-scaling to match resources with actual demand",
        "- Implement proper monitoring and alerting",
        "- Choose reserved instances for predictable workloads",
        "- Regularly audit and optimize resource usage",
        "## Conclusion",
        "Cloud computing is no longer optional for startups - it's essential. By choosing the right cloud strategy from the start, startups can build a strong foundation for growth while keeping costs under control."
      ],
      tags: ["Cloud Computing", "Startups", "AWS", "Scalability"]
    },
    "building-custom-crm-systems": {
      title: "Building Custom CRM Systems That Drive Results",
      category: "CRM Solutions",
      date: "February 28, 2024",
      author: "Sneha Reddy",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to developing custom CRM solutions tailored to your business",
      content: [
        "Off-the-shelf CRM solutions don't always fit every business's unique needs. Custom CRM systems offer the flexibility to build exactly what your business requires, integrating seamlessly with your existing processes.",
        "## Why Custom CRM?",
        "While platforms like Salesforce and HubSpot are powerful, they come with limitations:",
        "- Generic workflows that may not match your business process",
        "- Expensive licensing fees that scale with user count",
        "- Limited customization options",
        "- Vendor lock-in and dependency",
        "A custom CRM addresses these issues by being built specifically for your needs.",
        "## Key Features of a Successful CRM",
        "**Contact Management**: Comprehensive customer profiles with interaction history",
        "**Sales Pipeline**: Visual representation of deals in progress",
        "**Task Automation**: Automated workflows for repetitive tasks",
        "**Reporting & Analytics**: Real-time insights into sales performance",
        "**Integration Capabilities**: Connect with your existing tools and systems",
        "## Development Approach",
        "Building a custom CRM requires careful planning and execution:",
        "**Phase 1: Discovery**: Understand current processes and pain points",
        "**Phase 2: Design**: Create user-centric interfaces and workflows",
        "**Phase 3: Development**: Build core features iteratively",
        "**Phase 4: Testing**: Ensure reliability and performance",
        "**Phase 5: Deployment**: Roll out with proper training and support",
        "## Technology Stack Recommendations",
        "For the frontend, modern frameworks like React or Vue.js provide excellent user experiences. For the backend, Node.js or Python offer robust solutions with extensive ecosystems.",
        "Database choices should depend on your data structure - PostgreSQL for relational data or MongoDB for more flexible document-based storage.",
        "## ROI and Long-term Benefits",
        "A well-built custom CRM typically pays for itself within 12-18 months through:",
        "- Improved sales team productivity",
        "- Better customer retention",
        "- Reduced software licensing costs",
        "- Enhanced data insights for decision making",
        "## Conclusion",
        "Investing in a custom CRM is a strategic decision that can provide significant competitive advantages. With the right development partner, you can build a system that grows with your business and adapts to changing needs."
      ],
      tags: ["CRM", "Custom Software", "Business Solutions", "Sales"]
    },
    "ui-ux-design-principles-2024": {
      title: "Modern UI/UX Design Principles That Matter",
      category: "Design",
      date: "February 20, 2024",
      author: "Kavya Singh",
      readTime: "6 min read",
      excerpt: "Essential design principles for creating exceptional user experiences",
      content: [
        "Great design is invisible. When users interact with a well-designed interface, they don't think about the design - they just accomplish their goals efficiently and enjoyably.",
        "## Fundamental Principles",
        "**1. User-Centered Design**: Every design decision should be made with the user in mind. Conduct user research, create personas, and validate designs with real users.",
        "**2. Consistency**: Maintain consistent patterns throughout your application. This reduces cognitive load and makes your interface more intuitive.",
        "**3. Hierarchy**: Use size, color, and spacing to create clear visual hierarchies that guide users through your content.",
        "**4. Accessibility**: Design for everyone, including users with disabilities. This isn't just ethical - it's also good business.",
        "## Modern Design Trends",
        "**Minimalism with Purpose**: Clean designs that eliminate unnecessary elements while maintaining functionality.",
        "**Dark Mode**: Not just trendy - it reduces eye strain and saves battery on mobile devices.",
        "**Micro-interactions**: Small animations and feedback that make interfaces feel alive and responsive.",
        "**3D Elements**: Tasteful use of three-dimensional elements to add depth and interest.",
        "## The Design Process",
        "A solid design process ensures consistent quality:",
        "**Research**: Understand users, competitors, and constraints",
        "**Ideation**: Sketch multiple solutions and explore possibilities",
        "**Prototyping**: Create interactive prototypes for testing",
        "**Testing**: Validate designs with real users",
        "**Iteration**: Refine based on feedback and metrics",
        "## Tools of the Trade",
        "Modern designers have powerful tools at their disposal:",
        "- Figma: Collaborative interface design",
        "- Adobe XD: Comprehensive design and prototyping",
        "- Framer: Advanced prototyping with code",
        "- Principle: Animation and interaction design",
        "## Measuring Success",
        "Good design should be measurable. Track metrics like:",
        "- Task completion rates",
        "- Time to complete actions",
        "- User satisfaction scores",
        "- Conversion rates",
        "## Conclusion",
        "UI/UX design is not just about making things look pretty - it's about creating experiences that help users achieve their goals efficiently and enjoyably. By following these principles and continuously learning from user feedback, you can create designs that truly make a difference."
      ],
      tags: ["UI/UX", "Design", "User Experience", "Best Practices"]
    },
    "cybersecurity-best-practices-for-businesses": {
      title: "Cybersecurity Best Practices for Modern Businesses",
      category: "Security",
      date: "February 15, 2024",
      author: "Vikram Malhotra",
      readTime: "7 min read",
      excerpt: "Protect your business with these essential cybersecurity practices and strategies",
      content: [
        "In today's digital landscape, cybersecurity is not optional - it's a fundamental requirement for business survival. A single security breach can result in financial losses, reputational damage, and legal consequences.",
        "## Understanding the Threat Landscape",
        "Modern businesses face numerous cybersecurity threats:",
        "**Phishing Attacks**: Deceptive emails designed to steal credentials or install malware",
        "**Ransomware**: Malicious software that encrypts your data and demands payment",
        "**DDoS Attacks**: Overwhelming your systems with traffic to cause downtime",
        "**Insider Threats**: Security risks from within your organization",
        "## Essential Security Measures",
        "**1. Multi-Factor Authentication (MFA)**: Require additional verification beyond passwords. This single measure can prevent 99% of automated attacks.",
        "**2. Regular Security Audits**: Conduct comprehensive security assessments to identify vulnerabilities before attackers do.",
        "**3. Employee Training**: Your employees are your first line of defense. Regular security awareness training is crucial.",
        "**4. Data Encryption**: Encrypt sensitive data both at rest and in transit to protect it even if systems are compromised.",
        "**5. Regular Backups**: Maintain regular, tested backups of critical data. This is your last line of defense against ransomware.",
        "## Secure Development Practices",
        "For businesses developing software, security must be built in from the start:",
        "- Follow the principle of least privilege",
        "- Validate and sanitize all inputs",
        "- Keep dependencies updated",
        "- Use security scanning tools in your CI/CD pipeline",
        "- Conduct regular code reviews with security in mind",
        "## Incident Response Plan",
        "Hope for the best, but prepare for the worst. Every business needs an incident response plan:",
        "**Preparation**: Define roles and procedures",
        "**Detection**: Monitor for security incidents",
        "**Containment**: Limit the damage",
        "**Eradication**: Remove the threat",
        "**Recovery**: Restore normal operations",
        "**Lessons Learned**: Improve defenses based on the incident",
        "## Compliance Considerations",
        "Depending on your industry and location, you may need to comply with various regulations:",
        "- GDPR for European customer data",
        "- HIPAA for healthcare information",
        "- PCI DSS for payment card data",
        "- SOC 2 for service organizations",
        "## Conclusion",
        "Cybersecurity is an ongoing process, not a one-time project. By implementing these best practices and maintaining vigilance, you can significantly reduce your risk and protect your business, customers, and reputation."
      ],
      tags: ["Security", "Cybersecurity", "Best Practices", "Business"]
    }
  
  };


  const post = slug ? blogPosts[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              } else if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                return (
                  <p key={index} className="mb-4">
                    <strong>{paragraph.split(':**')[0].replace('**', '')}:</strong>
                    {paragraph.split(':**')[1]}
                  </p>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else {
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </motion.article>

          {/* Tags */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-secondary/30 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Help With Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you achieve your goals
              </p>
              <Link to="/consultation">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
