import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface PortfolioCardProps {
  name: string;
  type: string;
  built: string[];
  does: string;
  image: string;
  link: string;
  className?: string;
  key?: string;
}

export default function PortfolioCard({
  name,
  type,
  built,
  does,
  image,
  link,
  className,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all hover:border-red-500/50",
        className
      )}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm font-medium text-red-500 uppercase tracking-wider">{type}</p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-red-500"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">What We Built</p>
            <div className="flex flex-wrap gap-2">
              {built.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Impact</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{does}</p>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-red-500"
        >
          View Live Site <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}
