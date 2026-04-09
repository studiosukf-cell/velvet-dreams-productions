import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import studioImg from "@/assets/studio-interior.jpg";
import btsImg from "@/assets/gallery-bts1.jpg";
import equipmentImg from "@/assets/gallery-equipment.jpg";
import cinematicImg from "@/assets/gallery-cinematic.jpg";
import legalGuideImg from "@/assets/blog-legal-guide.jpg";
import choosingAgencyImg from "@/assets/blog-choosing-agency.jpg";
import socialMediaImg from "@/assets/blog-social-media.jpg";
import mentalHealthImg from "@/assets/blog-mental-health.jpg";
import studioEquipmentImg from "@/assets/blog-studio-equipment.jpg";
import financialPlanningImg from "@/assets/blog-financial-planning.jpg";

const blogPosts = [
  {
    slug: "how-to-start-career-adult-film",
    title: "How to Start a Career in Adult Film Production",
    excerpt: "Breaking into the adult film industry can seem daunting, but with the right approach and a professional production company behind you, the journey is straightforward.",
    date: "28 Mar 2026",
    readTime: "6 min read",
    image: studioImg,
    category: "Getting Started",
  },
  {
    slug: "performer-rights-safety-standards",
    title: "Understanding Performer Rights & Safety Standards",
    excerpt: "Your rights as a performer are paramount. From consent protocols to health screenings, learn about the comprehensive safety standards that professional UK production companies must uphold.",
    date: "22 Mar 2026",
    readTime: "8 min read",
    image: btsImg,
    category: "Safety",
  },
  {
    slug: "maximising-earnings-adult-performer",
    title: "Maximising Your Earnings as an Adult Film Performer",
    excerpt: "Top performers can earn £2,000 or more per shoot. Learn the strategies and tips that help experienced talent maximise their day rates and book premium productions.",
    date: "15 Feb 2026",
    readTime: "5 min read",
    image: equipmentImg,
    category: "Earnings",
  },
  {
    slug: "behind-scenes-typical-shoot-day",
    title: "Behind the Scenes: What a Typical Shoot Day Looks Like",
    excerpt: "Curious about what happens on a professional set? From call times and makeup to filming and wrap, we walk you through every step of a typical production day.",
    date: "8 Feb 2026",
    readTime: "7 min read",
    image: btsImg,
    category: "Industry",
  },
  {
    slug: "rise-professional-adult-content-uk",
    title: "The Rise of Professional Adult Content in the UK",
    excerpt: "The UK adult entertainment industry is experiencing a renaissance with higher production values, better performer pay, and stricter safety standards.",
    date: "25 Jan 2026",
    readTime: "6 min read",
    image: cinematicImg,
    category: "Industry",
  },
  {
    slug: "couples-adult-film-opportunity",
    title: "Couples in Adult Film: A Growing Opportunity",
    excerpt: "More real-life couples are choosing to perform together, attracted by higher rates and a comfortable filming experience.",
    date: "12 Jan 2026",
    readTime: "5 min read",
    image: studioImg,
    category: "Opportunities",
  },
  {
    slug: "onlyfans-management-guide",
    title: "The Complete Guide to OnlyFans Management",
    excerpt: "Discover how professional management can transform your OnlyFans earnings. From content strategy to marketing and subscriber growth, we cover it all.",
    date: "5 Jan 2026",
    readTime: "9 min read",
    image: equipmentImg,
    category: "OnlyFans",
  },
  {
    slug: "cam-modelling-tips-beginners",
    title: "Cam Modelling Tips for Beginners: What You Need to Know",
    excerpt: "Starting as a cam model? Learn the essentials — from choosing the right platform and equipment to building your audience and maximising tips.",
    date: "28 Dec 2025",
    readTime: "6 min read",
    image: cinematicImg,
    category: "Getting Started",
  },
  {
    slug: "building-personal-brand-adult-industry",
    title: "Building Your Personal Brand in the Adult Industry",
    excerpt: "A strong personal brand sets top earners apart. Learn how to develop your image, grow your social media presence, and create a lasting career.",
    date: "18 Dec 2025",
    readTime: "7 min read",
    image: studioImg,
    category: "Career Growth",
  },
  {
    slug: "health-wellness-adult-performers",
    title: "Health & Wellness for Adult Performers",
    excerpt: "Your physical and mental wellbeing comes first. From regular testing protocols to mental health support, here's how the industry protects its talent.",
    date: "10 Dec 2025",
    readTime: "8 min read",
    image: btsImg,
    category: "Safety",
  },
  {
    slug: "legal-guide-adult-performers-uk",
    title: "A Legal Guide for Adult Performers in the UK",
    excerpt: "Understanding the legal landscape of adult work in the UK is essential for anyone entering the industry. From contracts and tax obligations to content ownership and privacy rights.",
    date: "1 Dec 2025",
    readTime: "10 min read",
    image: legalGuideImg,
    category: "Legal",
  },
  {
    slug: "choosing-right-adult-agency",
    title: "How to Choose the Right Adult Talent Agency",
    excerpt: "Not all agencies are created equal. Learn what separates legitimate, professional talent agencies from exploitative ones and how to find an agency that truly supports your career.",
    date: "22 Nov 2025",
    readTime: "10 min read",
    image: choosingAgencyImg,
    category: "Getting Started",
  },
  {
    slug: "social-media-marketing-adult-creators",
    title: "Social Media Marketing Strategies for Adult Content Creators",
    excerpt: "Growing your audience on social media as an adult content creator requires a strategic approach. Learn platform-specific tactics, content planning, and audience engagement techniques.",
    date: "14 Nov 2025",
    readTime: "10 min read",
    image: socialMediaImg,
    category: "Career Growth",
  },
  {
    slug: "mental-health-support-adult-industry",
    title: "Mental Health Support and Self-Care in the Adult Industry",
    excerpt: "The adult industry presents unique mental health challenges. From managing stigma to maintaining healthy boundaries, this guide covers essential wellbeing strategies for performers.",
    date: "5 Nov 2025",
    readTime: "10 min read",
    image: mentalHealthImg,
    category: "Safety",
  },
  {
    slug: "studio-equipment-technology-adult-production",
    title: "Studio Equipment & Technology Behind Modern Adult Production",
    excerpt: "Modern adult content production uses cinema-grade equipment and cutting-edge technology. Discover the cameras, lighting, and post-production tools that create premium content.",
    date: "28 Oct 2025",
    readTime: "10 min read",
    image: studioEquipmentImg,
    category: "Industry",
  },
  {
    slug: "financial-planning-adult-performers",
    title: "Financial Planning and Tax Guide for Adult Performers",
    excerpt: "Managing your finances as an adult performer requires careful planning. From understanding self-employment tax to saving strategies and pension planning, this guide covers it all.",
    date: "20 Oct 2025",
    readTime: "10 min read",
    image: financialPlanningImg,
    category: "Earnings",
  },
];

const Blog = () => (
  <Layout>
    <section className="section-padding text-center">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Blog</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Industry <span className="gradient-gold">Insights</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Expert advice, performer stories, and behind-the-scenes insights from the UK's leading adult film production company.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding !pt-0">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="h-full">
                <motion.article whileHover={{ y: -4 }} className="glass-card rounded-lg overflow-hidden group h-full flex flex-col">
                  <div className="h-52 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-gold border border-border">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground text-sm flex-1">{post.excerpt}</p>
                    <span className="text-gold text-sm font-medium inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
