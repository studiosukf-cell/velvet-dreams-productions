import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const studios = [
  { city: "Manchester", studio: "Bridge Street Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Birmingham", studio: "Centenary Square Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Liverpool", studio: "Water Street Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "London", studio: "Soho Square Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Bristol", studio: "Queen Square Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Newcastle", studio: "Grey Street Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Cardiff", studio: "Churchill Way Studio", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Edinburgh", studio: "Royal Mile Studio", country: "United Kingdom", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { city: "Glasgow", studio: "Buchanan Street Studio", country: "United Kingdom", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { city: "Dublin", studio: "Grafton Street Studio", country: "Ireland", flag: "🇮🇪" },
  { city: "Brussels", studio: "Grand Place Studio", country: "Belgium", flag: "🇧🇪" },
  { city: "Antwerp", studio: "Meir Street Studio", country: "Belgium", flag: "🇧🇪" },
  { city: "Vilnius", studio: "Gedimino Avenue Studio", country: "Lithuania", flag: "🇱🇹" },
  { city: "Berlin", studio: "Friedrichstraße Studio", country: "Germany", flag: "🇩🇪" },
  { city: "Madrid", studio: "Gran Vía Studio", country: "Spain", flag: "🇪🇸" },
];

const StudioLocations = () => (
  <section className="section-padding">
    <div className="container">
      <AnimatedSection>
        <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium text-center mb-2">Global Studio Locations</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Our <span className="gradient-gold">Global Studios</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Professional studios across the UK, Ireland, and Europe — shoot close to home.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {studios.map((s, i) => (
          <AnimatedSection key={s.city} delay={i * 0.04}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 12px 40px -8px hsl(330 70% 55% / 0.15)" }}
              className="glass-card rounded-lg p-5 text-center"
            >
              <span className="text-3xl mb-2 block">{s.flag}</span>
              <h3 className="font-display text-lg font-bold mb-1">{s.city}</h3>
              <p className="text-muted-foreground text-xs mb-1">{s.studio}</p>
              <p className="text-muted-foreground text-xs opacity-70">{s.country}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StudioLocations;
