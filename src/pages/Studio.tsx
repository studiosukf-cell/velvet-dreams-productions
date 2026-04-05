import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Shield, DollarSign, Camera, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const studioData: Record<string, { city: string; studio: string; address: string; description: string; metaDesc: string; services: string[]; faqs: { q: string; a: string }[] }> = {
  london: {
    city: "London",
    studio: "Soho Square Studio",
    address: "Soho Square, London, W1D",
    description: "Hussy's London studio is located in the heart of Soho, offering premium adult film production facilities, cam studios, and model management services. Our Soho Square Studio features 4K/6K cinema-grade equipment, professional lighting rigs, and multiple themed sets for high-end content creation.",
    metaDesc: "Porn jobs in London with Hussy. Adult film work, cam studios, and OnlyFans management in Soho. Earn £1,500-£2,250 per day. Apply now.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "OnlyFans Content Creation", "Couple Shoots", "Solo Content"],
    faqs: [
      { q: "Where is the London studio located?", a: "Our London studio is located at Soho Square in the heart of London's West End, W1D. It's easily accessible by tube — the nearest stations are Tottenham Court Road and Oxford Circus." },
      { q: "What porn jobs are available in London?", a: "We offer performer roles, cam modelling, OnlyFans content creation, and couple shoots at our London studio. Male performers earn £1,500/day and female performers earn £2,250/day." },
      { q: "Do I need experience for London shoots?", a: "No experience is required. We provide full training, professional direction, and a supportive environment for newcomers and experienced performers alike." },
    ],
  },
  manchester: {
    city: "Manchester",
    studio: "Bridge Street Studio",
    address: "Bridge Street, Manchester, M3 3BW",
    description: "Our Manchester headquarters at Bridge Street is Hussy's flagship studio. Featuring state-of-the-art 4K/6K production suites, dedicated cam rooms, and a professional team, it's the hub of adult film production in the North West.",
    metaDesc: "Porn jobs in Manchester with Hussy. Adult film work at our Bridge Street studio. Earn £1,500-£2,250 per day. No experience needed.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "OnlyFans Management", "Recruitment", "Studio Hire"],
    faqs: [
      { q: "Where is the Manchester studio?", a: "Our flagship studio is on Bridge Street, Manchester, M3 3BW. It's in the city centre, a short walk from Deansgate and Spinningfields." },
      { q: "What are the Manchester shoot dates?", a: "We run regular productions throughout the year. Current dates include shoots in May, June, and July 2026. Male performers earn £1,500/day and female performers earn £2,250/day." },
      { q: "Is the Manchester studio the main office?", a: "Yes, Bridge Street is our headquarters and flagship location with the largest studio space, multiple sets, and our management team." },
    ],
  },
  birmingham: {
    city: "Birmingham",
    studio: "Centenary Square Studio",
    address: "Centenary Square, Birmingham, B1",
    description: "Hussy's Birmingham studio at Centenary Square serves the West Midlands with professional adult film production, cam facilities, and performer recruitment. Centrally located and fully equipped for premium content creation.",
    metaDesc: "Porn jobs in Birmingham with Hussy. Adult film work, cam studios, and model management. Earn £1,500-£2,250 per day. Apply today.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Performer Recruitment", "Couple Shoots", "Content Creation"],
    faqs: [
      { q: "Where is the Birmingham studio?", a: "Our Birmingham studio is at Centenary Square, B1 — right in the city centre, easily accessible from New Street and Snow Hill stations." },
      { q: "What adult work is available in Birmingham?", a: "We offer performer roles, cam modelling, and content creation at our Birmingham studio. All experience levels welcome. Male £1,500/day, Female £2,250/day." },
      { q: "How often are Birmingham shoots?", a: "We run productions in Birmingham regularly, with upcoming dates throughout May, June, and July 2026." },
    ],
  },
  bristol: {
    city: "Bristol",
    studio: "Queen Square Studio",
    address: "Queen Square, Bristol, BS1",
    description: "Our Bristol studio at Queen Square provides professional adult film production services for performers across the South West. Modern facilities, experienced crew, and a welcoming environment for all levels of experience.",
    metaDesc: "Porn jobs in Bristol with Hussy. Adult film production and cam work at Queen Square Studio. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Solo Content", "Couple Shoots", "Content Creation"],
    faqs: [
      { q: "Where is the Bristol studio?", a: "Our Bristol studio is located at Queen Square, BS1, in the historic city centre. It's easily accessible from Bristol Temple Meads station." },
      { q: "What jobs are available in Bristol?", a: "We offer adult film performer roles, cam modelling, and OnlyFans content support. No experience required. Male £1,500/day, Female £2,250/day." },
      { q: "Are Bristol shoots regular?", a: "Yes, we run regular productions in Bristol with upcoming dates in May, June, and July 2026." },
    ],
  },
  leeds: {
    city: "Leeds",
    studio: "Park Row Studio",
    address: "Park Row, Leeds, LS1",
    description: "Hussy's Leeds studio on Park Row offers adult film production and cam facilities for performers across Yorkshire. Professional equipment, experienced directors, and full support for all talent levels.",
    metaDesc: "Porn jobs in Leeds with Hussy. Adult film work and cam studios in Leeds city centre. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Performer Recruitment", "Content Creation"],
    faqs: [
      { q: "Where is the Leeds studio?", a: "Our Leeds studio is on Park Row, LS1, in the heart of Leeds city centre near the train station." },
      { q: "What opportunities are there in Leeds?", a: "Performer roles, cam modelling, and content creation. All experience levels welcome. Male £1,500/day, Female £2,250/day." },
    ],
  },
  liverpool: {
    city: "Liverpool",
    studio: "Water Street Studio",
    address: "Water Street, Liverpool, L2",
    description: "Hussy's Liverpool studio on Water Street provides professional adult film and cam production for Merseyside talent. Modern sets, 4K equipment, and a supportive production team.",
    metaDesc: "Porn jobs in Liverpool with Hussy. Adult film production at Water Street Studio. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Content Creation", "Couple Shoots"],
    faqs: [
      { q: "Where is the Liverpool studio?", a: "Our Liverpool studio is on Water Street, L2, in the business district near Liverpool Lime Street station." },
      { q: "What adult jobs are available in Liverpool?", a: "Performer roles, cam work, and content creation. No experience needed. Male £1,500/day, Female £2,250/day." },
    ],
  },
  cardiff: {
    city: "Cardiff",
    studio: "Churchill Way Studio",
    address: "Churchill Way, Cardiff, CF10",
    description: "Our Cardiff studio on Churchill Way serves performers across Wales with professional adult film production, cam facilities, and model management services.",
    metaDesc: "Porn jobs in Cardiff with Hussy. Adult film work and cam studios in Cardiff. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Content Creation"],
    faqs: [
      { q: "Where is the Cardiff studio?", a: "Our Cardiff studio is on Churchill Way, CF10, in the city centre near Cardiff Central station." },
      { q: "What work is available in Cardiff?", a: "Adult film performer roles, cam modelling, and content creation. All levels welcome. Male £1,500/day, Female £2,250/day." },
    ],
  },
  edinburgh: {
    city: "Edinburgh",
    studio: "Royal Mile Studio",
    address: "Royal Mile, Edinburgh, EH1",
    description: "Hussy's Edinburgh studio on the Royal Mile provides premium adult film production for Scottish talent. Full production support, modern equipment, and professional direction.",
    metaDesc: "Porn jobs in Edinburgh with Hussy. Adult film production on the Royal Mile. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Content Creation"],
    faqs: [
      { q: "Where is the Edinburgh studio?", a: "Our Edinburgh studio is on the Royal Mile, EH1, in the historic Old Town area near Waverley station." },
      { q: "What opportunities are there in Edinburgh?", a: "Performer roles, cam work, and content creation. No experience needed. Male £1,500/day, Female £2,250/day." },
    ],
  },
  glasgow: {
    city: "Glasgow",
    studio: "Buchanan Street Studio",
    address: "Buchanan Street, Glasgow, G1",
    description: "Our Glasgow studio on Buchanan Street offers professional adult film production and cam facilities for talent across central Scotland.",
    metaDesc: "Porn jobs in Glasgow with Hussy. Adult film work at Buchanan Street Studio. Earn £1,500-£2,250 per day.",
    services: ["Adult Film Production", "Cam Studio Hire", "Model Management", "Content Creation"],
    faqs: [
      { q: "Where is the Glasgow studio?", a: "Our Glasgow studio is on Buchanan Street, G1, in the city centre near Queen Street station." },
      { q: "What jobs are available in Glasgow?", a: "Adult film roles, cam modelling, and content creation. All levels welcome. Male £1,500/day, Female £2,250/day." },
    ],
  },
};

const Studio = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? studioData[slug] : null;

  if (!data) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <div className="container">
            <h1 className="font-display text-4xl font-bold mb-4">Studio Not Found</h1>
            <Link to="/" className="text-gold hover:underline">Return Home</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding text-center">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">{data.city} Studio</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Porn Jobs in <span className="gradient-gold">{data.city}</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-2">{data.description}</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
              <MapPin size={14} className="text-gold" />
              <span>{data.address}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-lg p-6 text-center">
              <DollarSign size={24} className="text-gold mx-auto mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Male Performers</p>
              <p className="font-display text-3xl font-bold gradient-gold">£1,500 / day</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <DollarSign size={24} className="text-gold mx-auto mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Female Performers</p>
              <p className="font-display text-3xl font-bold gradient-gold">£2,250 / day</p>
            </div>
          </div>

          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Services in <span className="gradient-gold">{data.city}</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {data.services.map((s) => (
              <div key={s} className="glass-card rounded-lg p-4 flex items-center gap-3">
                <Camera size={16} className="text-gold flex-shrink-0" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>

          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              {data.city} <span className="gradient-gold">FAQs</span>
            </h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3 mb-12">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Hussy — ${data.city} Studio`,
            "description": data.metaDesc,
            "address": { "@type": "PostalAddress", "addressLocality": data.city, "addressCountry": "GB" },
            "url": `https://adultfilmstudios.infy.uk/studios/${slug}`,
          }) }} />

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          }) }} />

          <div className="text-center">
            <Link to="/join">
              <Button size="lg" className="gradient-gold-bg text-primary-foreground font-bold text-lg px-10 py-6 glow-gold hover:opacity-90">
                Apply for {data.city} Shoots
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
