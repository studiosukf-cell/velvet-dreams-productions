import { Calendar, MapPin, PoundSterling } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const productions = [
  { city: "London", studio: "Soho Square Studio", dates: ["5th May", "12th May", "19th May", "2nd June", "16th June", "7th July", "21st July"] },
  { city: "Manchester", studio: "Bridge Street Studio", dates: ["8th May", "15th May", "22nd May", "5th June", "19th June", "3rd July", "17th July"] },
  { city: "Bristol", studio: "Queen Square Studio", dates: ["10th May", "24th May", "7th June", "21st June", "5th July", "19th July"] },
  { city: "Birmingham", studio: "Centenary Square Studio", dates: ["13th May", "27th May", "10th June", "24th June", "8th July", "22nd July"] },
];

const ProductionsSchedule = () => (
  <section className="section-padding bg-secondary/40">
    <div className="container">
      <AnimatedSection>
        <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium text-center mb-2">Now Casting</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Upcoming <span className="gradient-gold">Productions</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-6">
          Book your spot on our upcoming shoots across the UK. Professional sets, experienced crews, and same-day payment.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="glass-card rounded-lg px-6 py-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Male Performers</p>
            <p className="font-display text-2xl font-bold gradient-gold">£1,500<span className="text-sm text-muted-foreground font-normal"> / day</span></p>
          </div>
          <div className="glass-card rounded-lg px-6 py-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Female Performers</p>
            <p className="font-display text-2xl font-bold gradient-gold">£2,250<span className="text-sm text-muted-foreground font-normal"> / day</span></p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productions.map((p, i) => (
          <AnimatedSection key={p.city} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-gold" />
                <h3 className="font-display text-xl font-bold">{p.city}</h3>
              </div>
              <p className="text-muted-foreground text-xs mb-4">{p.studio}</p>
              <div className="space-y-2">
                {p.dates.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-sm">
                    <Calendar size={12} className="text-gold/70" />
                    <span className="text-foreground/80">{d} 2026</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProductionsSchedule;
