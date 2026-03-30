import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Camera } from "lucide-react";
import btsBg from "@/assets/bts-production.jpg";

const values = [
  { icon: Shield, title: "Safety First", desc: "Rigorous consent protocols, health screenings, and a zero-tolerance policy for unprofessional behaviour." },
  { icon: Award, title: "Quality Production", desc: "Cinema-grade equipment, experienced directors, and beautifully designed sets for premium output." },
  { icon: Users, title: "Performer Welfare", desc: "Dedicated on-set coordinators ensure you're comfortable, informed, and supported at every moment." },
  { icon: Camera, title: "Industry Experience", desc: "Years of production expertise across multiple genres and formats, delivering content to global platforms." },
];

const About = () => (
  <Layout>
    <section className="section-padding text-center">
      <div className="container max-w-3xl">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">About Us</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Premium Production, <span className="gradient-gold">Professional Standards</span>
        </h1>
        <p className="text-foreground/70 text-lg">
          We are a UK-based adult film production company committed to creating high-quality content in a safe, respectful, and professional environment.
        </p>
      </div>
    </section>

    <section className="section-padding !pt-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={btsBg} alt="Production studio" className="rounded-lg w-full h-80 lg:h-96 object-cover" loading="lazy" width={1200} height={800} />
          <div className="space-y-5 text-foreground/70">
            <p>EliteFrame Productions operates at the forefront of the UK adult entertainment industry. Our mission is to deliver world-class content while prioritising the wellbeing and professional development of our performers.</p>
            <p>Every shoot is meticulously planned. From pre-production briefings to structured filming schedules, we ensure our talent feels supported, respected, and fairly compensated.</p>
            <p>We work with performers of all experience levels, providing guidance, coaching, and a genuinely collaborative atmosphere on set.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">Our <span className="gradient-gold">Core Values</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-lg p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding text-center">
      <div className="container max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join Our <span className="gradient-gold">Team</span></h2>
        <p className="text-foreground/70 mb-8">Ready to start your journey? Apply today and discover what sets us apart.</p>
        <Link to="/join">
          <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90">
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
