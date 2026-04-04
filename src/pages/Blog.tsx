import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import studioImg from "@/assets/studio-interior.jpg";
import btsImg from "@/assets/gallery-bts1.jpg";
import equipmentImg from "@/assets/gallery-equipment.jpg";
import cinematicImg from "@/assets/gallery-cinematic.jpg";

const blogPosts = [
  {
    slug: "how-to-start-career-adult-film",
    title: "How to Start a Career in Adult Film Production",
    excerpt: "Breaking into the adult film industry can seem daunting, but with the right approach and a professional production company behind you, the journey is straightforward. This guide covers everything from your first application to your first day on set.",
    date: "28 Mar 2026",
    readTime: "6 min read",
    image: blogImg,
    category: "Getting Started",
  },
  {
    slug: "performer-rights-safety-standards",
    title: "Understanding Performer Rights & Safety Standards",
    excerpt: "Your rights as a performer are paramount. From consent protocols to health screenings, learn about the comprehensive safety standards that professional UK production companies must uphold to protect their talent.",
    date: "22 Mar 2026",
    readTime: "8 min read",
    image: btsBg,
    category: "Safety",
  },
  {
    slug: "maximising-earnings-adult-performer",
    title: "Maximising Your Earnings as an Adult Film Performer",
    excerpt: "Top performers can earn £2,000 or more per shoot. Learn the strategies and tips that help experienced talent maximise their day rates, book premium productions, and build a sustainable career.",
    date: "15 Feb 2026",
    readTime: "5 min read",
    image: blogImg,
    category: "Earnings",
  },
  {
    slug: "behind-scenes-typical-shoot-day",
    title: "Behind the Scenes: What a Typical Shoot Day Looks Like",
    excerpt: "Curious about what happens on a professional set? From call times and makeup to filming and wrap, we walk you through every step of a typical production day at EliteFrame.",
    date: "8 Feb 2026",
    readTime: "7 min read",
    image: btsBg,
    category: "Industry",
  },
  {
    slug: "rise-professional-adult-content-uk",
    title: "The Rise of Professional Adult Content in the UK",
    excerpt: "The UK adult entertainment industry is experiencing a renaissance. Higher production values, better performer pay, and stricter safety standards are driving a new era of professional content creation.",
    date: "25 Jan 2026",
    readTime: "6 min read",
    image: blogImg,
    category: "Industry",
  },
  {
    slug: "couples-adult-film-opportunity",
    title: "Couples in Adult Film: A Growing Opportunity",
    excerpt: "More real-life couples are choosing to perform together, attracted by higher rates, a comfortable filming experience, and the opportunity to work as a team. Here's everything couples need to know.",
    date: "12 Jan 2026",
    readTime: "5 min read",
    image: btsBg,
    category: "Opportunities",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
