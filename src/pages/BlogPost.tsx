import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock } from "lucide-react";
import studioImg from "@/assets/studio-interior.jpg";
import btsImg from "@/assets/gallery-bts1.jpg";
import equipmentImg from "@/assets/gallery-equipment.jpg";
import cinematicImg from "@/assets/gallery-cinematic.jpg";

const blogPosts: Record<string, { title: string; date: string; readTime: string; image: string; category: string; excerpt: string; content: string }> = {
  "how-to-start-career-adult-film": {
    title: "How to Start a Career in Adult Film Production",
    date: "28 Mar 2026", readTime: "6 min read", image: studioImg, category: "Getting Started",
    excerpt: "Breaking into the adult film industry can seem daunting, but with the right approach and a professional production company behind you, the journey is straightforward.",
    content: `Breaking into the adult film industry can seem daunting, but with the right approach and a professional production company behind you, the journey is straightforward.\n\nThe first step is finding a reputable agency like Hussy that prioritises performer safety, fair pay, and professionalism. We welcome newcomers and provide full guidance from your very first enquiry through to your first shoot day.\n\nKey steps include submitting an application, attending an informal interview, completing health screening, and then being matched with productions that suit your preferences and comfort level.\n\nWith competitive day rates starting at £1,500 for male performers and £2,250 for female performers, a career in adult film offers genuine financial opportunity alongside flexible scheduling.`,
  },
  "performer-rights-safety-standards": {
    title: "Understanding Performer Rights & Safety Standards",
    date: "22 Mar 2026", readTime: "8 min read", image: btsImg, category: "Safety",
    excerpt: "Your rights as a performer are paramount.",
    content: `Your rights as a performer are paramount. From consent protocols to health screenings, professional UK production companies uphold comprehensive safety standards.\n\nEvery performer has the right to review and approve all content before filming begins. Safe words and boundaries are established and respected at all times. Regular STI screenings are mandatory, and all results are kept strictly confidential.\n\nAt Hussy, we go above and beyond industry minimums — providing on-set welfare officers, clear contracts, and a zero-tolerance policy for any form of coercion or pressure.`,
  },
  "maximising-earnings-adult-performer": {
    title: "Maximising Your Earnings as an Adult Film Performer",
    date: "15 Feb 2026", readTime: "5 min read", image: equipmentImg, category: "Earnings",
    excerpt: "Top performers can earn £2,000 or more per shoot.",
    content: `Top performers can earn £2,000 or more per shoot. The key to maximising your income is consistency, professionalism, and diversifying your revenue streams.\n\nBeyond day rates, performers can boost earnings through OnlyFans management, cam work, and content licensing. Building a personal brand and social media following also increases your value to production companies.\n\nAt Hussy we offer full OnlyFans management for our talent, helping creators earn £5,000+ per month with professional content strategy and marketing support.`,
  },
  "behind-scenes-typical-shoot-day": {
    title: "Behind the Scenes: What a Typical Shoot Day Looks Like",
    date: "8 Feb 2026", readTime: "7 min read", image: btsImg, category: "Industry",
    excerpt: "Curious about what happens on a professional set?",
    content: `A typical shoot day at Hussy starts with a relaxed call time, usually mid-morning. You'll be greeted by the production team, offered refreshments, and given time to settle in.\n\nNext comes hair, makeup, and wardrobe — all handled by our professional crew. Before any filming begins, the director walks through the scene with all performers, confirming boundaries and preferences.\n\nFilming typically takes 3-5 hours with regular breaks. After wrap, you'll review key shots and sign off on the content. Payment is processed the same week.`,
  },
  "rise-professional-adult-content-uk": {
    title: "The Rise of Professional Adult Content in the UK",
    date: "25 Jan 2026", readTime: "6 min read", image: cinematicImg, category: "Industry",
    excerpt: "The UK adult entertainment industry is experiencing a renaissance.",
    content: `The UK adult entertainment industry is experiencing a renaissance with higher production values, better performer pay, and stricter safety standards than ever before.\n\nDriven by platforms like OnlyFans and increased demand for premium content, studios like Hussy are investing in cinema-grade equipment, professional lighting, and dedicated studio spaces across London, Manchester, and Birmingham.\n\nThis shift means more opportunities for performers at every level, with better working conditions and significantly higher earning potential.`,
  },
  "couples-adult-film-opportunity": {
    title: "Couples in Adult Film: A Growing Opportunity",
    date: "12 Jan 2026", readTime: "5 min read", image: studioImg, category: "Opportunities",
    excerpt: "More real-life couples are choosing to perform together.",
    content: `More real-life couples are choosing to perform together, attracted by higher combined rates and a comfortable filming experience.\n\nCouples content is among the most popular categories, and real chemistry translates directly to better content. At Hussy, we offer premium day rates for couples and ensure a relaxed, professional environment.\n\nIf you and your partner are interested, simply apply together through our standard application process.`,
  },
  "onlyfans-management-guide": {
    title: "The Complete Guide to OnlyFans Management",
    date: "5 Jan 2026", readTime: "9 min read", image: equipmentImg, category: "OnlyFans",
    excerpt: "Discover how professional management can transform your OnlyFans earnings.",
    content: `Professional OnlyFans management can transform your earnings from a side income into a full-time career. At Hussy, our management team handles content strategy, posting schedules, subscriber engagement, and marketing.\n\nOur managed creators typically earn £5,000+ per month, with top performers exceeding £20,000. We handle the business side so you can focus on creating great content.\n\nServices include professional photo and video shoots, social media growth, pricing optimisation, and 24/7 account management.`,
  },
  "cam-modelling-tips-beginners": {
    title: "Cam Modelling Tips for Beginners: What You Need to Know",
    date: "28 Dec 2025", readTime: "6 min read", image: cinematicImg, category: "Getting Started",
    excerpt: "Starting as a cam model? Learn the essentials.",
    content: `Starting as a cam model can be incredibly rewarding. The key essentials are a good webcam, reliable internet, proper lighting, and a quiet private space.\n\nChoose a reputable platform, set a consistent streaming schedule, and engage genuinely with your audience. Tips and private shows will become your primary revenue streams.\n\nAt Hussy, we offer cam studio spaces with professional equipment and a supportive community of fellow models to help you get started.`,
  },
  "building-personal-brand-adult-industry": {
    title: "Building Your Personal Brand in the Adult Industry",
    date: "18 Dec 2025", readTime: "7 min read", image: studioImg, category: "Career Growth",
    excerpt: "A strong personal brand sets top earners apart.",
    content: `A strong personal brand is what separates average earners from top performers in the adult industry. Your brand encompasses your stage name, visual identity, social media presence, and the type of content you're known for.\n\nConsistency is key — maintain a cohesive look across platforms, engage regularly with fans, and collaborate with other creators to expand your reach.\n\nHussy's management team can help you develop and refine your brand strategy as part of our talent management services.`,
  },
  "health-wellness-adult-performers": {
    title: "Health & Wellness for Adult Performers",
    date: "10 Dec 2025", readTime: "8 min read", image: btsImg, category: "Safety",
    excerpt: "Your physical and mental wellbeing comes first.",
    content: `Your physical and mental wellbeing must always come first. The adult industry has made significant strides in performer health protocols.\n\nRegular sexual health screenings (every 14 days for active performers) are standard practice. Mental health support, including access to counsellors who understand the industry, is increasingly available.\n\nAt Hussy, we cover the cost of all health screenings for our performers and provide access to a confidential support line. We believe that healthy, happy performers create the best content.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <div className="container max-w-3xl">
            <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <Link to="/blog" className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mb-8 block">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 inline-block">{post.category}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-lg overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
