import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const regions = [
  {
    name: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham", "Cardiff", "Leeds", "Liverpool", "Bristol", "Edinburgh", "Glasgow"],
  },
  {
    name: "Ireland",
    cities: ["Dublin", "Cork", "Galway"],
  },
  {
    name: "Europe",
    cities: ["Amsterdam", "Berlin", "Prague", "Barcelona", "Budapest", "Paris"],
  },
];

const StudioLocations = () => (
  <section className="section-padding">
    <div className="container">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Our <span className="gradient-gold">Studio Locations</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Professional studios across the UK, Ireland, and Europe — shoot close to home.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {regions.map((region, ri) => (
          <AnimatedSection key={region.name} delay={ri * 0.15}>
            <div className="glass-card rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 gradient-gold">{region.name}</h3>
              <div className="space-y-3">
                {region.cities.map((city, ci) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: ci * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <MapPin size={16} className="text-neon-pink shrink-0" />
                    <span className="text-sm font-medium">{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StudioLocations;
