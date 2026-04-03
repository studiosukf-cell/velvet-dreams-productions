import { Link } from "react-router-dom";
import { Users, Film, Building, UserPlus, Tv, Camera } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Users, title: "Model Management", desc: "We specialize in guiding adult models at every stage — from scouting and coaching to personal brand growth.", link: "/about", cta: "Explore" },
  { icon: Film, title: "Porn Jobs", desc: "Get involved in exclusive high-quality adult film production using 4K/6K tech, directed by experienced professionals.", link: "/join", cta: "See Jobs" },
  { icon: Building, title: "Model & Studio Hire", desc: "Hire top-tier models or professional studio space equipped for premium content production across Europe.", link: "/contact", cta: "Hire Now" },
  { icon: UserPlus, title: "Recruitment", desc: "Join the adult industry as a model, producer, or crew. We match talent with opportunities that fit your goals.", link: "/join", cta: "Apply" },
  { icon: Tv, title: "OnlyFans Management", desc: "Boost your OnlyFans presence with expert management, daily posting, and revenue growth strategies.", link: "/blog", cta: "Learn More" },
  { icon: Camera, title: "Cam Studios", desc: "Stream in a secure and fully supported environment with HD tech, privacy tools, and professional setups.", link: "/gallery", cta: "View Studios" },
];

const ServicesGrid = () => (
  <section className="section-padding bg-secondary/40">
    <div className="container">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Our <span className="gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Everything you need to succeed in the adult entertainment industry.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 12px 40px -8px hsl(330 70% 55% / 0.15)" }}
              className="glass-card rounded-lg p-6 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mb-4">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm flex-1 mb-4">{s.desc}</p>
              <Link to={s.link} className="text-gold text-sm font-medium hover:underline">
                {s.cta} →
              </Link>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
