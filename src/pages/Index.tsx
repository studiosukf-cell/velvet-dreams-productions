import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Users, Star, Camera, Heart, ChevronRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FlipCard from "@/components/FlipCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StudioLocations from "@/components/StudioLocations";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-light.jpg";
import btsBg from "@/assets/bts-production.jpg";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import model4 from "@/assets/model-4.jpg";
import blogImg from "@/assets/blog-production.jpg";

const trustPoints = [
  { icon: Shield, title: "Discreet & Professional", desc: "Complete confidentiality guaranteed at every stage" },
  { icon: DollarSign, title: "Paid Opportunities", desc: "Competitive rates paid on the day of filming" },
  { icon: Clock, title: "Flexible Schedule", desc: "Work around your availability — no commitments" },
  { icon: Users, title: "All Levels Welcome", desc: "No prior experience required to get started" },
];

const opportunities = [
  { title: "Female Performers", desc: "High-demand roles with premium pay. Safe, supportive environment guaranteed.", icon: Star, image: model1 },
  { title: "Male Performers", desc: "Solo and partnered roles with competitive day rates. All body types and backgrounds.", icon: Users, image: model2 },
  { title: "Couples", desc: "Film together as a real couple. Higher rates and a comfortable, collaborative set.", icon: Heart, image: model3 },
  { title: "Mature Talent", desc: "Dedicated category with strong audience demand. Experience and confidence valued.", icon: Camera, image: model4 },
];

const blogPosts = [
  { title: "How to Start a Career in Adult Film Production", excerpt: "Everything you need to know about breaking into the industry professionally and safely.", date: "Mar 2026", image: blogImg },
  { title: "Understanding Performer Rights & Safety Standards", excerpt: "A comprehensive guide to your rights, consent protocols, and industry regulations.", date: "Mar 2026", image: btsBg },
  { title: "Maximising Your Earnings as an Adult Film Performer", excerpt: "Tips and strategies for increasing your day rate and booking premium productions.", date: "Feb 2026", image: blogImg },
  { title: "Behind the Scenes: What a Typical Shoot Day Looks Like", excerpt: "From arrival to wrap — a full walkthrough of a professional production day.", date: "Feb 2026", image: btsBg },
  { title: "The Rise of Professional Adult Content in the UK", excerpt: "How the UK adult film industry is evolving with higher standards and better pay.", date: "Jan 2026", image: blogImg },
  { title: "Couples in Adult Film: A Growing Opportunity", excerpt: "Why more couples are choosing to perform together and how to get started.", date: "Jan 2026", image: btsBg },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Professional film studio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 cinematic-overlay" />
      <div className="relative z-10 container text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          Premium Film Production
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Earn Up To <span className="gradient-gold">£2000 Per Day</span> In Professional Film Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          No experience needed. Flexible work. High earnings. Join the UK's most professional adult production team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity">
              Apply Now
            </Button>
          </Link>
          <a href="#trust">
            <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-6">
              Learn More
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Trust */}
    <section id="trust" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            Why Performers <span className="gradient-gold">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
            We set the industry standard for professionalism, safety, and performer satisfaction.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((tp, i) => (
            <AnimatedSection key={tp.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px -8px hsl(43 72% 45% / 0.15)" }}
                className="glass-card rounded-lg p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                  <tp.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{tp.title}</h3>
                <p className="text-muted-foreground text-sm">{tp.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Opportunities - Flip Cards */}
    <section className="section-padding bg-secondary/40">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            Open <span className="gradient-gold">Opportunities</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
            We're actively recruiting performers for upcoming productions.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((op, i) => (
            <AnimatedSection key={op.title} delay={i * 0.1}>
              <FlipCard {...op} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Behind the scenes */}
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-lg overflow-hidden">
              <img src={btsBg} alt="Behind the scenes" className="w-full h-80 lg:h-[28rem] object-cover rounded-lg" loading="lazy" width={1200} height={800} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">Behind The Scenes</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Professional Production, <span className="gradient-gold">Every Time</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Our sets are run by experienced professionals using cinema-grade equipment. Every shoot is planned, structured, and managed to the highest standard.</p>
                <p>Performer welfare is our priority. Clear communication, consent protocols, and a supportive team ensure you feel comfortable and confident throughout.</p>
              </div>
              <Link to="/about" className="mt-8 inline-block">
                <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Earnings */}
    <section className="section-padding bg-secondary/40">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-gold">Earning Potential</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-14">
            Transparent, competitive rates paid on the day. No hidden fees, no waiting.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Solo Shoots", range: "£300 – £500", detail: "2–4 hour sessions" },
            { label: "Partnered Shoots", range: "£500 – £1,200", detail: "Half or full day" },
            { label: "Premium / Featured", range: "£1,200 – £2,000", detail: "Full day production" },
          ].map((tier, i) => (
            <AnimatedSection key={tier.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-lg p-8"
              >
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{tier.label}</p>
                <p className="font-display text-3xl md:text-4xl font-bold gradient-gold mb-2">{tier.range}</p>
                <p className="text-muted-foreground text-sm">{tier.detail}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
            What Performers <span className="gradient-gold">Say</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <TestimonialCarousel />
        </AnimatedSection>
      </div>
    </section>

    {/* Blog */}
    <section className="section-padding bg-secondary/40">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            Latest From Our <span className="gradient-gold">Blog</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
            Industry insights, tips, and behind-the-scenes stories.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.1}>
              <Link to="/blog" className="group">
                <motion.div whileHover={{ y: -4 }} className="glass-card rounded-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold font-medium mb-2">{post.date}</p>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    <span className="text-gold text-sm font-medium inline-flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10">
                View All Articles <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Studio Locations */}
    <StudioLocations />

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-gold-bg opacity-10" />
      <AnimatedSection>
        <div className="container text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready To <span className="gradient-gold">Get Started?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
            Spaces are limited. Submit your application today and our team will be in touch within 24 hours.
          </p>
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-12 py-6 glow-gold hover:opacity-90 transition-opacity">
              Apply Now — Limited Spaces
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Index;
