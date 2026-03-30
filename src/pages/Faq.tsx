import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Do I need experience?", a: "Not at all. Many of our performers start with zero experience. We provide full guidance, direction, and support on set to help you feel comfortable and confident." },
  { q: "How much can I earn?", a: "Rates range from £300 to £2,000 per shoot depending on the type of production. Payment is made on the day of filming — no waiting around." },
  { q: "Is this confidential?", a: "Absolutely. We take discretion extremely seriously. Your personal details are never shared, and we operate under strict privacy protocols at every stage." },
  { q: "Where are shoots located?", a: "Most productions take place in professional studios across London and the South East, though we also film at other UK locations depending on the project." },
  { q: "What should I expect on set?", a: "A professional, well-organised environment. You'll be briefed beforehand, introduced to the team, and walked through everything step by step. Performer welfare is always our top priority." },
  { q: "Can I choose what I'm comfortable with?", a: "Yes. You are never asked to do anything you haven't agreed to. Boundaries are discussed and respected before filming begins." },
  { q: "How do I apply?", a: "Simply fill out the application form on our Join page. We review submissions within 24 hours and get in touch for a brief, discreet conversation." },
];

const Faq = () => (
  <Layout>
    <section className="section-padding text-center">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Support</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-gold">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg">Everything you need to know before getting started.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding !pt-0">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <AccordionItem value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </Accordion>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10">Contact Us</Button>
              </Link>
              <Link to="/join">
                <Button className="gradient-gold-bg text-primary-foreground font-bold glow-gold hover:opacity-90">Apply Now</Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Faq;
