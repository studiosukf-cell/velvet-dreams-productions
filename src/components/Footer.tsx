import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border section-padding !py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold gradient-gold mb-2">Hussy</h3>
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
              { label: "OnlyFans", to: "/onlyfans" },
              { label: "Blog", to: "/blog" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">UK Studios</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "London", to: "/studios/london" },
              { label: "Manchester", to: "/studios/manchester" },
              { label: "Birmingham", to: "/studios/birmingham" },
              { label: "Bristol", to: "/studios/bristol" },
              { label: "Leeds", to: "/studios/leeds" },
              { label: "Liverpool", to: "/studios/liverpool" },
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
            <a href="tel:+447920451830" className="hover:text-gold transition-colors">📞 07920 451830</a>
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            <a href="https://wa.me/447920451830" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">💬 WhatsApp</a>
          </p>
          <p className="text-sm text-muted-foreground mb-4">📍 Oxford Road, Manchester, M15 6JA</p>
          <div className="flex flex-col gap-2">
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-gold transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Hussy Adult Studios & Model Management. All rights reserved. 18+ only.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
