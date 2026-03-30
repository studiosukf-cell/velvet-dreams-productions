import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Users, Star, Camera, Heart, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import btsBg from "@/assets/bts-production.jpg";

const trustPoints = [
  { icon: Shield, title: "Discreet & Professional", desc: "Complete confidentiality guaranteed at every stage" },
  { icon: DollarSign, title: "Paid Opportunities", desc: "Competitive rates paid on the day of filming" },
  { icon: Clock, title: "Flexible Schedule", desc: "Work around your availability — no commitments" },
  { icon: Users, title: "All Levels Welcome", desc: "No prior experience required to get started" },
];

const opportunities = [
  { title: "Male Performers", desc: "Solo and partnered roles with competitive day rates. All body types and backgrounds.", icon: Users },
  { title: "Female Performers", desc: "High-demand roles with premium pay. Safe, supportive environment guaranteed.", icon: Star },
  { title: "Couples", desc: "Film together as a real couple. Higher rates and a comfortable, collaborative set.", icon: Heart },
  { title: "Mature Talent", desc: "Dedicated category with strong audience demand. Experience and confidence valued.", icon: Camera },
];

const testimonials = [
  { name: "Alex R.", text: "I was nervous at first, but the team made me feel completely at ease. The pay was incredible for a day's work.", role: "Performer — 6 months" },
  { name: "Sophie M.", text: "Professional from start to finish. Discreet, respectful, and the earning potential is unmatched.", role: "Performer — 1 year" },
  { name: "James & Tara", text: "We joined as a couple and it's been an amazing experience. Flexible, well-paid, and genuinely fun.", role: "Couple — 3 months" },
  { name: "Chris D.", text: "The team respects boundaries and the whole process is very well organised. Would recommend to anyone.", role: "Performer — 8 months" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Professional film studio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 cinematic-overlay" />
      <div className="relative z-10 container text-center max-w-4xl animate-fade-up">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">Premium Film Production</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Earn Up To <span className="gradient-gold">£2000 Per Day</span> In Professional Film Work
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          No experience needed. Flexible work. High earnings. Join the UK's most professional adult production team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>

    {/* Trust */}
    <section id="trust" className="section-padding">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Why Performers <span className="gradient-gold">Choose Us</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          We set the industry standard for professionalism, safety, and performer satisfaction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((tp) => (
            <div key={tp.title} className="glass-card rounded-lg p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                <tp.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{tp.title}</h3>
              <p className="text-muted-foreground text-sm">{tp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Opportunities */}
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Open <span className="gradient-gold">Opportunities</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          We're actively recruiting performers for upcoming productions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((op) => (
            <div key={op.title} className="glass-card rounded-lg p-6 hover-lift group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                <op.icon size={22} className="text-deep-red-light" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{op.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{op.desc}</p>
              <Link to="/join" className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Apply <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Behind the scenes */}
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <img src={btsBg} alt="Behind the scenes" className="w-full h-80 lg:h-[28rem] object-cover rounded-lg" loading="lazy" width={1200} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">Behind The Scenes</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Professional Production, <span className="gradient-gold">Every Time</span>
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p>Our sets are run by experienced professionals using cinema-grade equipment. Every shoot is planned, structured, and managed to the highest standard.</p>
              <p>Performer welfare is our priority. Clear communication, consent protocols, and a supportive team ensure you feel comfortable and confident throughout.</p>
            </div>
            <Link to="/about" className="mt-8 inline-block">
              <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Earnings */}
    <section className="section-padding bg-secondary/30">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Your <span className="gradient-gold">Earning Potential</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-14">
          Transparent, competitive rates paid on the day. No hidden fees, no waiting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Solo Shoots", range: "£300 – £500", detail: "2–4 hour sessions" },
            { label: "Partnered Shoots", range: "£500 – £1,200", detail: "Half or full day" },
            { label: "Premium / Featured", range: "£1,200 – £2,000", detail: "Full day production" },
          ].map((tier) => (
            <div key={tier.label} className="glass-card rounded-lg p-8 hover-lift">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{tier.label}</p>
              <p className="font-display text-3xl md:text-4xl font-bold gradient-gold mb-2">{tier.range}</p>
              <p className="text-muted-foreground text-sm">{tier.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-red-bg opacity-10" />
      <div className="container text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Ready To <span className="gradient-gold">Get Started?</span>
        </h2>
        <p className="text-foreground/70 max-w-lg mx-auto mb-8 text-lg">
          Spaces are limited. Submit your application today and our team will be in touch within 24 hours.
        </p>
        <Link to="/join">
          <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-12 py-6 glow-gold hover:opacity-90 transition-opacity">
            Apply Now — Limited Spaces
          </Button>
        </Link>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
          What Performers <span className="gradient-gold">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
