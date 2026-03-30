import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Alex R.", text: "I was nervous at first, but the team made me feel completely at ease. The pay was incredible for a day's work.", role: "Performer — 6 months", avatar: "AR" },
  { name: "Sophie M.", text: "Professional from start to finish. Discreet, respectful, and the earning potential is unmatched.", role: "Performer — 1 year", avatar: "SM" },
  { name: "James & Tara", text: "We joined as a couple and it's been an amazing experience. Flexible, well-paid, and genuinely fun.", role: "Couple — 3 months", avatar: "JT" },
  { name: "Chris D.", text: "The team respects boundaries and the whole process is very well organised. Would recommend to anyone.", role: "Performer — 8 months", avatar: "CD" },
  { name: "Emily L.", text: "The level of professionalism blew me away. I felt safe and valued from the very first conversation.", role: "Performer — 4 months", avatar: "EL" },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden min-h-[220px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-xl p-8 md:p-10 text-center w-full"
          >
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground/80 italic text-lg mb-6">"{testimonials[current].text}"</p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-xs">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors" aria-label="Previous testimonial">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors" aria-label="Next testimonial">
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "gradient-gold-bg w-6" : "bg-border"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
