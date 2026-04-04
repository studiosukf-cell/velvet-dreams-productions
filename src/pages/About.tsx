import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Camera } from "lucide-react";
import StudioLocations from "@/components/StudioLocations";
import AnimatedSection from "@/components/AnimatedSection";
import studioImg from "@/assets/studio-interior.jpg";

const values = [
  { icon: Shield, title: "Safety First", desc: "Rigorous consent protocols, health screenings, and a zero-tolerance policy for unprofessional behaviour." },
  { icon: Award, title: "4K/6K Production", desc: "Cinema-grade equipment, experienced directors, and beautifully designed sets for premium output." },
  { icon: Users, title: "Performer Welfare", desc: "Dedicated on-set coordinators ensure you're comfortable, informed, and supported at every moment." },
  { icon: Camera, title: "Industry Experience", desc: "Years of production expertise across multiple genres and formats, delivering content to global platforms." },
];

const About = () => (
  <Layout>
    <section className="section-padding text-center">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Infinity <span className="gradient-gold">Adult Studios</span>
          </h1>
          <p className="text-foreground/70 text-lg">
            Adult Studios & Model Management — connecting talent with real opportunities in porn jobs, cam work, and adult content creation across the UK and Europe.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding !pt-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={btsBg} alt="Production studio" className="rounded-lg w-full h-80 lg:h-96 object-cover" loading="lazy" width={1200} height={800} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-5 text-foreground/70">
              <p>Infinity Adult Studios operates at the forefront of the UK and European adult entertainment industry. Our mission is to deliver world-class content while prioritising the wellbeing and professional development of our performers.</p>
              <p>Whether you're new to adult work or an experienced adult performer, we offer full support, professional model management, and flexible working options. From porn modeling jobs and OnlyFans content support to high-end 4K/6K adult filming studios, we're here to help you take control of your career.</p>
              <p>Our network includes adult studios in the UK and Europe, fully equipped spaces for porn shoots, webcam jobs, and custom content. We offer opportunities for adult models, studio managers, and content creators with high-income potential, full discretion, and professional standards.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Our <span className="gradient-gold">Core Values</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-lg p-6 text-center hover-lift">
                <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <StudioLocations />

    <section className="section-padding text-center">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join Our <span className="gradient-gold">Team</span></h2>
          <p className="text-foreground/70 mb-8">Start your adult career today with Infinity Adult Studios — where your goals become reality.</p>
          <Link to="/join">
            <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90">
              Apply Now
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
