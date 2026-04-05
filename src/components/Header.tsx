import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Porn Jobs", to: "/join" },
  { label: "Cam Studios", to: "/gallery" },
  { label: "OnlyFans", to: "/onlyfans" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] gradient-pink-blue-bg text-primary-foreground text-center py-2 text-sm font-medium">
        Call us now: <a href="tel:+447920830451" className="underline font-bold">07920 830451</a>
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wider gradient-gold">Hussy</span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">Adult Studios & Model Management</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                  location.pathname === link.to ? "text-gold" : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/join">
              <Button className="gradient-gold-bg text-primary-foreground font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Apply Now
              </Button>
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium tracking-wide transition-colors hover:text-gold ${
                    location.pathname === link.to ? "text-gold" : "text-foreground/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/join" onClick={() => setOpen(false)}>
                <Button className="w-full gradient-gold-bg text-primary-foreground font-semibold mt-2">
                  Apply Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
