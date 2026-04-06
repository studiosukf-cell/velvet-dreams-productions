import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const studios = [
  { city: "Manchester", studio: "Bridge Street Studio", country: "United Kingdom", flag: "🇬🇧", slug: "manchester" },
  { city: "Birmingham", studio: "Centenary Square Studio", country: "United Kingdom", flag: "🇬🇧", slug: "birmingham" },
  { city: "Liverpool", studio: "Water Street Studio", country: "United Kingdom", flag: "🇬🇧", slug: "liverpool" },
  { city: "London", studio: "Soho Square Studio", country: "United Kingdom", flag: "🇬🇧", slug: "london" },
  { city: "Bristol", studio: "Queen Square Studio", country: "United Kingdom", flag: "🇬🇧", slug: "bristol" },
  { city: "Newcastle", studio: "Grey Street Studio", country: "United Kingdom", flag: "🇬🇧", slug: "" },
  { city: "Cardiff", studio: "Churchill Way Studio", country: "United Kingdom", flag: "🇬🇧", slug: "cardiff" },
  { city: "Edinburgh", studio: "Royal Mile Studio", country: "United Kingdom", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", slug: "edinburgh" },
  { city: "Glasgow", studio: "Buchanan Street Studio", country: "United Kingdom", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", slug: "glasgow" },
  { city: "Leeds", studio: "Park Row Studio", country: "United Kingdom", flag: "🇬🇧", slug: "leeds" },
  { city: "Dublin", studio: "Grafton Street Studio", country: "Ireland", flag: "🇮🇪", slug: "" },
  { city: "Brussels", studio: "Grand Place Studio", country: "Belgium", flag: "🇧🇪", slug: "" },
  { city: "Antwerp", studio: "Meir Street Studio", country: "Belgium", flag: "🇧🇪", slug: "" },
  { city: "Vilnius", studio: "Gedimino Avenue Studio", country: "Lithuania", flag: "🇱🇹", slug: "" },
  { city: "Berlin", studio: "Friedrichstraße Studio", country: "Germany", flag: "🇩🇪", slug: "" },
  { city: "Madrid", studio: "Gran Vía Studio", country: "Spain", flag: "🇪🇸", slug: "" },
];

const StudioLocations = () => (
  <section className="py-12 md:py-16 px-6">
    <div className="container max-w-5xl">
      <AnimatedSection>
        <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium text-center mb-1">Global Locations</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">
          Our <span className="gradient-gold">Studios</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-8 text-sm">
          Professional studios across the UK, Ireland, and Europe.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {studios.map((s, i) => {
          const content = (
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-lg p-3 text-center"
            >
              <span className="text-xl mb-1 block">{s.flag}</span>
              <h3 className="font-display text-sm font-bold">{s.city}</h3>
              <p className="text-muted-foreground text-[10px]">{s.studio}</p>
            </motion.div>
          );

          return (
            <AnimatedSection key={s.city} delay={i * 0.03}>
              {s.slug ? (
                <Link to={`/studios/${s.slug}`} className="block">{content}</Link>
              ) : (
                content
              )}
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default StudioLocations;
