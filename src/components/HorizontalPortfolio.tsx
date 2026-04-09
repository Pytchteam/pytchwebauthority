import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import PortfolioCard from "./PortfolioCard";

const portfolioData = [
  {
    name: "Eden Gardens",
    type: "Hospitality / Service",
    built: ["Website", "Booking System", "Inventory"],
    does: "Converts visitors into guests with a seamless booking experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    link: "https://edengardensja.com"
  },
  {
    name: "Ballast Logistics",
    type: "Logistics / Supply Chain",
    built: ["Tracking System", "Client Portal", "Automation"],
    does: "Streamlines shipping operations and client communication.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    link: "https://ballastlogistics.com"
  },
  {
    name: "KN Import Export",
    type: "Logistics / Commerce",
    built: ["Corporate Site", "Inventory System", "Lead Gen"],
    does: "Facilitates global trade with a robust digital infrastructure.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    link: "https://knimportexport.com"
  },
  {
    name: "Cash Closers",
    type: "Sales Agency",
    built: ["Lead Funnel", "CRM Integration", "Sales Systems"],
    does: "Elite sales talent bridging the gap between global businesses and human connection.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "https://cashclosersja.com"
  },
  {
    name: "QuickMenu Storefront",
    type: "SaaS / Food Tech",
    built: ["Web App", "Ordering System", "Admin Panel"],
    does: "Coming Soon: The future of digital ordering and storefront management.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    link: "https://quickmenuja.com/storefront"
  },
  {
    name: "Exclusive Comfort Decor",
    type: "E-commerce / Retail",
    built: ["Online Store", "Payment Gateway", "Inventory"],
    does: "Drives high-ticket furniture sales through a premium digital showroom.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    link: "https://exclusivecomfortdecor.com"
  }
];

export default function HorizontalPortfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20">
        <div className="px-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl">
              Our Work <span className="text-zinc-500">In Motion.</span>
            </h2>
            <p className="mt-4 max-w-md text-zinc-400 text-lg">
              Scroll to explore the systems we've built for industry leaders.
            </p>
          </motion.div>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-12">
          {portfolioData.map((project) => (
            <div key={project.name} className="w-[450px] shrink-0">
              <PortfolioCard {...project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
