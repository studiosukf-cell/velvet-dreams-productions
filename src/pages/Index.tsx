import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Users, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StudioLocations from "@/components/StudioLocations";
import ServicesGrid from "@/components/ServicesGrid";

import { motion } from "framer-motion";
import heroImg from "@/assets/hero-light.jpg";

const trustPoints = [
  { icon: Shield, title: "Discreet & Professional", desc: "Complete confidentiality guaranteed at every stage" },
  { icon: DollarSign, title: "High Earnings", desc: "Male £1,500/day · Female £2,250/day" },
  { icon: Clock, title: "Flexible Schedule", desc: "Work around your availability — no commitments" },
  { icon: Users, title: "All Levels Welcome", desc: "No prior experience required to get started" },
];

const homeFaqs = [
  { q: "What types of jobs are available?", a: "We offer a variety of adult film and cam job opportunities, including performer roles, studio management, OnlyFans management, and tech support. Whether you're a beginner or experienced, there are positions for everyone." },
  { q: "Do I need previous experience to apply?", a: "No experience is necessary for most positions. We provide full training and guidance for newcomers, especially for models and studio managers." },
  { q: "What is the pay like?", a: "Male performers earn £1,500 per day and female performers earn £2,250 per day. Studio managers can earn competitive salaries based on experience." },
  { q: "How does Hussy ensure performer safety?", a: "We have strict safety protocols in place, including regular health checks, on-set safety measures, and professional coaching. Our goal is to create a safe and empowering environment for all performers." },
  { q: "Can I work remotely?", a: "Yes, we offer opportunities for remote work, including cam modelling and online content creation. You can collaborate with our team to create content from the comfort of your own space." },
  { q: "Is everything confidential?", a: "Absolutely. Discretion is a core value. Your identity and personal information are fully protected at every stage of the process." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Professional film studio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 cinematic-overlay" />
      <div className="relative z-10 container text-center max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
          Adult Studios & Model Management
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Porn Jobs / Adult Work with <span className="gradient-gold">Hussy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Looking to start or grow your career in the adult entertainment industry? We connect you with real opportunities in porn jobs, cam work, and adult content creation across major cities in the UK and Europe.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity">Apply Now</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-6">Learn More</Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Introduction / Keywords Section */}
    <section className="py-14 md:py-20 px-6">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-4">
            Your Gateway to <span className="gradient-gold">Adult Industry Careers</span>
          </h2>
          <p className="text-muted-foreground text-center text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Hussy is the UK's leading adult entertainment agency connecting talent with real opportunities in <strong className="text-foreground">adult film jobs</strong>, <strong className="text-foreground">cam modelling</strong>, <strong className="text-foreground">OnlyFans management</strong>, and <strong className="text-foreground">content creation</strong>. Whether you're looking for <strong className="text-foreground">porn jobs in London</strong>, <strong className="text-foreground">webcam work in Manchester</strong>, or <strong className="text-foreground">adult modelling across the UK and Europe</strong> — we provide a safe, professional, and discreet pathway to a high-earning career.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Porn Jobs", "Adult Film Casting", "Cam Studio Jobs", "OnlyFans Management", "Adult Modelling", "Webcam Work", "Content Creator Jobs", "Adult Recruitment UK"].map((kw) => (
              <span key={kw} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {kw}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Talent CTA */}
    <section className="py-12 md:py-16 px-6 bg-secondary/40">
      <div className="container text-center max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">We're Always Looking for <span className="gradient-gold">New Talent</span></h2>
          <p className="text-muted-foreground text-base mb-6">Join Hussy — where your future in the adult industry begins with professionalism, respect, and opportunity.</p>
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity">Apply Now</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>


    <ServicesGrid />

    {/* Trust */}
    <section id="trust" className="section-padding">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">Why Performers <span className="gradient-gold">Choose Us</span></h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">We set the industry standard for professionalism, safety, and performer satisfaction.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((tp, i) => (
            <AnimatedSection key={tp.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6, boxShadow: "0 12px 40px -8px hsl(330 70% 55% / 0.15)" }} className="glass-card rounded-lg p-6 text-center">
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


    {/* OnlyFans CTA */}
    <section className="section-padding">
      <div className="container text-center max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4"><span className="gradient-gold">OnlyFans</span> Creators Wanted</h2>
          <p className="text-muted-foreground text-lg mb-4">Join our successful team of creators earning over <span className="text-gold font-bold">£5,000+ per month</span>. Full management, promotion & support included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/join">
              <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity">Apply Now</Button>
            </Link>
            <Link to="/onlyfans">
              <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-6">OnlyFans Management</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">What Our Models <span className="gradient-gold">Say</span></h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <TestimonialCarousel />
        </AnimatedSection>
      </div>
    </section>

    <StudioLocations />

    {/* Earnings */}
    <section className="section-padding bg-secondary/40">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Your <span className="gradient-gold">Earning Potential</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-14">Transparent, competitive rates. No hidden fees, no waiting.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Male Performers", range: "£1,500", detail: "Per day" },
            { label: "Female Performers", range: "£2,250", detail: "Per day" },
            { label: "OnlyFans Creators", range: "£5,000+", detail: "Per month (managed)" },
          ].map((tier, i) => (
            <AnimatedSection key={tier.label} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.03 }} className="glass-card rounded-lg p-8">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{tier.label}</p>
                <p className="font-display text-3xl md:text-4xl font-bold gradient-gold mb-2">{tier.range}</p>
                <p className="text-muted-foreground text-sm">{tier.detail}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">Frequently Asked <span className="gradient-gold">Questions</span></h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">Everything you need to know before getting started.</p>
        </AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <AccordionItem value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline text-left py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Link to="/faq" className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">View All FAQs <ArrowRight size={14} /></Link>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": homeFaqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }) }} />
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-gold-bg opacity-10" />
      <AnimatedSection>
        <div className="container text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Start Your Adult Career <span className="gradient-gold">Today</span></h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">Where your goals become reality. Submit your application today and our team will be in touch shortly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-12 py-6 glow-gold hover:opacity-90 transition-opacity">Apply Now</Button>
            </Link>
            <a href="https://wa.me/447920451830" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 font-semibold text-lg px-10 py-6">WhatsApp Us</Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default Index;
