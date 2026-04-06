import { Link } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";

interface FlipCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

const FlipCard = ({ title, desc, icon: Icon, image }: FlipCardProps) => (
  <div className="flip-card h-36 sm:h-40">
    <div className="flip-card-inner">
      <div className="flip-card-front glass-card rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon size={16} className="text-primary-foreground" />
            <h3 className="font-display text-lg font-semibold text-primary-foreground">{title}</h3>
          </div>
        </div>
      </div>
      <div className="flip-card-back glass-card rounded-lg p-4 flex flex-col justify-center items-center text-center">
        <div className="w-10 h-10 rounded-full gradient-gold-bg flex items-center justify-center mb-3">
          <Icon size={18} className="text-primary-foreground" />
        </div>
        <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs mb-3">{desc}</p>
        <Link to="/join" className="text-gold text-xs font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          Apply <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  </div>
);

export default FlipCard;
