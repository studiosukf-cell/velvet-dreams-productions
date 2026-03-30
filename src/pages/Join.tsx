import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { num: "01", title: "Submit Your Application", desc: "Fill out the simple form below with your details." },
  { num: "02", title: "Initial Screening", desc: "Our team reviews your application within 24 hours." },
  { num: "03", title: "Brief Consultation", desc: "A quick, discreet call to discuss opportunities." },
  { num: "04", title: "Book Your First Shoot", desc: "Choose a date, arrive on set, and get paid." },
];

const Join = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Application Received", description: "We'll be in touch within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Join Our Team</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Become A <span className="gradient-gold">Performer</span>
          </h1>
          <p className="text-foreground/70 text-lg">
            Start earning with flexible, professional film work. No experience required. Complete discretion guaranteed.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding !pt-0">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="glass-card rounded-lg p-6 text-center hover-lift">
                <span className="font-display text-3xl font-bold gradient-gold">{s.num}</span>
                <h3 className="font-display text-lg font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-2xl">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">
              Application <span className="gradient-gold">Form</span>
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-8">All information is kept strictly confidential.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" required className="bg-background/50 border-border" />
                <Input type="number" placeholder="Age" min={18} required className="bg-background/50 border-border" />
              </div>
              <Input type="email" placeholder="Email Address" required className="bg-background/50 border-border" />
              <Input type="tel" placeholder="Phone Number" className="bg-background/50 border-border" />
              <Input placeholder="Location (City, UK)" required className="bg-background/50 border-border" />
              <Select>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Experience</SelectItem>
                  <SelectItem value="some">Some Experience</SelectItem>
                  <SelectItem value="experienced">Experienced</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Tell us a bit about yourself (optional)" className="bg-background/50 border-border min-h-[100px]" />

              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/30 border border-border/50">
                <Shield size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Your privacy matters. All applications are handled with complete discretion. We never share your information with third parties.
                </p>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full gradient-gold-bg text-primary-foreground font-bold text-lg py-6 glow-gold hover:opacity-90 transition-opacity"
              >
                {submitting ? "Submitting..." : (
                  <span className="flex items-center gap-2">
                    <Send size={18} /> Submit Application
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
