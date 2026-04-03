import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border section-padding !py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold gradient-gold mb-2">Infinity</h3>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Adult Studios & Model Management</p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Premium adult film production, model management, and content creation. Professional, discreet, and high-earning opportunities across the UK and Europe.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Pages</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Porn Jobs", to: "/join" },
              { label: "Cam Studios", to: "/gallery" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Resources</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "OnlyFans Management", to: "/blog" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
              { label: "Model Management", to: "/about" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground mb-2">
            <a href="tel:+447920830451" className="hover:text-gold transition-colors">📞 07920 830451</a>
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            <a href="https://wa.me/447920451830" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">💬 WhatsApp</a>
          </p>
          <p className="text-sm text-muted-foreground">📍 Bridge Street, Manchester, M3 3BW</p>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Infinity Adult Studios & Model Management. All rights reserved. 18+ only.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
