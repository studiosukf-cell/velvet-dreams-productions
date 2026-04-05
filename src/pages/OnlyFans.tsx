import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Camera, Shield, DollarSign, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const benefits = [
  { icon: TrendingUp, title: "Revenue Growth", desc: "Our managed creators earn on average £5,000+ per month with proven growth strategies." },
  { icon: Users, title: "Subscriber Growth", desc: "Expert marketing and promotion to grow your subscriber base consistently." },
  { icon: Camera, title: "Content Strategy", desc: "Daily posting schedules, content calendars, and professional photo/video support." },
  { icon: Shield, title: "Account Security", desc: "Full account protection, DMCA takedowns, and content piracy monitoring." },
  { icon: DollarSign, title: "Pricing Optimisation", desc: "Data-driven pricing, PPV strategies, and tip menu optimisation for maximum revenue." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Weekly performance reports with actionable insights to keep growing your income." },
];

const tiers = [
  { label: "Starter Creator", range: "£1,000 – £3,000", detail: "Per month", desc: "New creators building their audience" },
  { label: "Growing Creator", range: "£3,000 – £8,000", detail: "Per month", desc: "Established presence, scaling up" },
  { label: "Top Creator", range: "£8,000 – £25,000+", detail: "Per month", desc: "Premium creators with large audiences" },
];

const OnlyFans = () => (
  <Layout>
    <section className="section-padding text-center">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">OnlyFans Management</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Grow Your <span className="gradient-gold">OnlyFans</span> Income
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Full-service OnlyFans management by Hussy. We handle content strategy, marketing, subscriber engagement, and revenue optimisation so you can focus on creating.
          </p>
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90">
              Apply for Management
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding !pt-0">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            What We <span className="gradient-gold">Offer</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="glass-card rounded-lg p-6 text-center h-full">
                <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                  <b.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Creator <span className="gradient-gold">Earning Potential</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-14">
            Real earnings from our managed creators. Results vary based on content and engagement.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.label} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.03 }} className="glass-card rounded-lg p-8">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{tier.label}</p>
                <p className="font-display text-3xl md:text-4xl font-bold gradient-gold mb-2">{tier.range}</p>
                <p className="text-muted-foreground text-sm mb-1">{tier.detail}</p>
                <p className="text-muted-foreground text-xs">{tier.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding text-center">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-gold">Start Earning?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Apply today and our management team will be in touch within 24 hours to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90">
                Apply Now
              </Button>
            </Link>
            <a href="https://wa.me/447920451830" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-6">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default OnlyFans;
