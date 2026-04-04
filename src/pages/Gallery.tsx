import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

import studioA from "@/assets/gallery-studio-a.jpg";
import studioB from "@/assets/gallery-studio-b.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import noir from "@/assets/gallery-noir.jpg";
import luxury from "@/assets/gallery-luxury.jpg";
import cinematic from "@/assets/gallery-cinematic.jpg";
import bts1 from "@/assets/gallery-bts1.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import camStudio from "@/assets/gallery-cam-studio.jpg";
import controlRoom from "@/assets/gallery-control-room.jpg";

const categories = ["All", "Studio", "Themed", "Behind the Scenes"];

const galleryItems = [
  { id: 1, title: "Studio Session A", category: "Studio", image: studioA },
  { id: 2, title: "Themed Shoot — Noir", category: "Themed", image: noir },
  { id: 3, title: "Production Setup", category: "Behind the Scenes", image: bts1 },
  { id: 4, title: "Studio Session B", category: "Studio", image: studioB },
  { id: 5, title: "Themed Shoot — Luxury", category: "Themed", image: luxury },
  { id: 6, title: "Crew & Equipment", category: "Behind the Scenes", image: equipment },
  { id: 7, title: "Studio Interior", category: "Studio", image: studioInterior },
  { id: 8, title: "Themed Shoot — Cinematic", category: "Themed", image: cinematic },
  { id: 9, title: "Cam Studio Setup", category: "Studio", image: camStudio },
  { id: 10, title: "Post-Production Suite", category: "Behind the Scenes", image: controlRoom },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="section-padding text-center">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Work</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Content <span className="gradient-gold">Gallery</span>
            </h1>
            <p className="text-foreground/70 text-lg">A glimpse into our premium production quality and creative direction.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? "gradient-gold-bg text-primary-foreground" : "bg-secondary text-foreground/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative aspect-[3/2] rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display font-semibold text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-xs">{item.category}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
