import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });

    setSubmitting(false);

    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }

    toast({ title: "Message Sent", description: "We'll get back to you shortly." });
    form.reset();
  };

  return (
    <Layout>
      <section className="section-padding text-center">
        <div className="container max-w-3xl">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="gradient-gold">Us</span>
          </h1>
          <p className="text-foreground/70 text-lg">Have questions or want to join Infinity Adult Studios? Reach out to our team.</p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <a href="tel:+447920451830" className="glass-card rounded-lg p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center mx-auto mb-4">
                <Phone size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">Phone</h3>
              <p className="text-muted-foreground text-sm">07920 451 830</p>
            </a>
            <a href="https://wa.me/447920451830" target="_blank" rel="noopener noreferrer" className="glass-card rounded-lg p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-full bg-[hsl(142,70%,35%)] flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={22} className="text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">Chat with us directly</p>
            </a>
            <div className="glass-card rounded-lg p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
                <MapPin size={22} className="text-neon-pink" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Bridge Street, Manchester, M3 3BW</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center mb-6">Send a <span className="gradient-gold">Message</span></h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your Name" required className="bg-background/50 border-border" />
                <Input name="email" type="email" placeholder="Email Address" required className="bg-background/50 border-border" />
              </div>
              <Input name="subject" placeholder="Subject" required className="bg-background/50 border-border" />
              <Textarea name="message" placeholder="Your Message" required className="bg-background/50 border-border min-h-[120px]" />
              <Button
                type="submit"
                disabled={submitting}
                className="w-full gradient-gold-bg text-primary-foreground font-bold text-lg py-6 glow-gold hover:opacity-90"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
