import { Users, Film, Building, UserPlus, Tv, Camera } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import FlipCard from "./FlipCard";

import serviceManagement from "@/assets/service-management.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import galleryBts from "@/assets/gallery-bts1.jpg";
import serviceOnlyfans from "@/assets/service-onlyfans.jpg";
import galleryCam from "@/assets/gallery-cam-studio.jpg";
import galleryCinematic from "@/assets/gallery-cinematic.jpg";

const services = [
  { icon: Users, title: "Model Management", desc: "We specialize in guiding adult models at every stage — from scouting and coaching to personal brand growth.", image: serviceManagement },
  { icon: Film, title: "Porn Jobs", desc: "Get involved in exclusive high-quality adult film production using 4K/6K tech, directed by experienced professionals.", image: galleryCinematic },
  { icon: Building, title: "Model & Studio Hire", desc: "Hire top-tier models or professional studio space equipped for premium content production across Europe.", image: studioInterior },
  { icon: UserPlus, title: "Recruitment", desc: "Join the adult industry as a model, producer, or crew. We match talent with opportunities that fit your goals.", image: galleryBts },
  { icon: Tv, title: "OnlyFans Management", desc: "Boost your OnlyFans presence with expert management, daily posting, and revenue growth strategies.", image: serviceOnlyfans },
  { icon: Camera, title: "Cam Studios", desc: "Stream in a secure and fully supported environment with HD tech, privacy tools, and professional setups.", image: galleryCam },
];

const ServicesGrid = () => (
  <section className="py-20 md:py-28 px-6 md:px-10 bg-secondary/40">
    <div className="container">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-3">
          Our <span className="gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Everything you need to succeed in the adult entertainment industry.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <FlipCard title={s.title} desc={s.desc} icon={s.icon} image={s.image} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
