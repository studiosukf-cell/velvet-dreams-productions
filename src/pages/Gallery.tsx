import { useState } from "react";
import Layout from "@/components/Layout";
import { Play } from "lucide-react";

const categories = ["All", "Studio", "Themed", "Behind the Scenes"];

const galleryItems = [
  { id: 1, title: "Studio Session A", category: "Studio", gradient: "from-gold-dark/30 to-deep-red/20" },
  { id: 2, title: "Themed Shoot — Noir", category: "Themed", gradient: "from-deep-red/30 to-background" },
  { id: 3, title: "Production Setup", category: "Behind the Scenes", gradient: "from-gold/20 to-background" },
  { id: 4, title: "Studio Session B", category: "Studio", gradient: "from-deep-red/20 to-gold-dark/20" },
  { id: 5, title: "Themed Shoot — Luxury", category: "Themed", gradient: "from-gold/30 to-deep-red/10" },
  { id: 6, title: "Crew & Equipment", category: "Behind the Scenes", gradient: "from-background to-gold/20" },
  { id: 7, title: "Studio Session C", category: "Studio", gradient: "from-deep-red/30 to-gold/20" },
  { id: 8, title: "Themed Shoot — Cinematic", category: "Themed", gradient: "from-gold-dark/20 to-deep-red/30" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="section-padding text-center">
        <div className="container max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Content <span className="gradient-gold">Gallery</span>
          </h1>
          <p className="text-foreground/70 text-lg">A glimpse into our premium production quality and creative direction.</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden glass-card cursor-pointer hover-lift"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mb-3">
                    <Play size={22} className="text-primary-foreground ml-0.5" />
                  </div>
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.category}</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity">
                  <p className="font-display font-semibold text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
