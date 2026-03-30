import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border/50 section-padding !py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold gradient-gold mb-4">ELITEFRAME</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Premium adult film production. Professional, discreet, and high-earning opportunities for performers across the UK.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "Join as Performer", to: "/join" },
              { label: "About Us", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground mb-2">info@eliteframe.co.uk</p>
          <p className="text-sm text-muted-foreground">London, United Kingdom</p>
        </div>
      </div>
      <div className="border-t border-border/50 mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} EliteFrame Productions. All rights reserved. 18+ only.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
