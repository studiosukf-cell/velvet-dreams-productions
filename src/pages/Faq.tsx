import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What types of jobs are available?", a: "We offer a variety of adult film and cam job opportunities, including performer roles, studio management, and tech support. Whether you're a beginner or experienced, there are positions for everyone." },
  { q: "Do I need previous experience to apply?", a: "No experience is necessary for most positions. We provide training and guidance for newcomers, especially for models and studio managers." },
  { q: "What is the pay like?", a: "Pay varies depending on the role and performance, but performers can earn between £500 to £3,000 per scene, and studio managers can earn competitive salaries based on experience and studio performance." },
  { q: "How do I apply for a position?", a: "You can apply by submitting an online application through our website. Simply fill out the relevant form for the role you're interested in, and our recruitment team will contact you for further details." },
  { q: "Is there an age requirement?", a: "You must be at least 18 years old to apply for any of our adult-related positions. Age verification is required as part of the application process." },
  { q: "Are masks or specific outfits required for shoots?", a: "For most shoots, masks are optional. However, specific outfits and attire may be requested depending on the type of scene. We prioritize comfort and safety for all our performers." },
  { q: "How does Infinity Adult Studios ensure performer safety?", a: "We have strict safety protocols in place, including regular health checks, on-set safety measures, and professional coaching. Our goal is to create a safe and empowering environment for all performers." },
  { q: "Can I work with Infinity Adult Studios remotely?", a: "Yes, we offer opportunities for remote work, including cam modeling and online brand building. You can collaborate with our team to create content from the comfort of your own space." },
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
