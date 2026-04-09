import { motion } from "motion/react";

const phrases = [
  "Websites that close deals",
  "Infrastructure for high-growth",
  "Revenue systems, not just pages",
  "Apple-level design precision",
  "Stripe-grade backend stability",
  "Conversion-first architecture",
  "Built for impact",
  "No fluff, just outcomes",
  "Your business, leveled up",
  "Infrastructure for the future"
];

export default function TrustMarquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-white/5 bg-zinc-950 py-6">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        {[...phrases, ...phrases].map((phrase, idx) => (
          <div key={idx} className="mx-8 flex items-center gap-4">
            <span className="text-xl font-bold uppercase tracking-widest text-zinc-400">
              {phrase}
            </span>
            <div className="h-2 w-2 rounded-full bg-red-600" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
