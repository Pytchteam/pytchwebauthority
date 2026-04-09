import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Database, 
  CreditCard,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import Navbar from "./components/Navbar";
import HorizontalPortfolio from "./components/HorizontalPortfolio";
import TrustMarquee from "./components/TrustMarquee";
import BuildQuiz from "./components/BuildQuiz";
import { cn } from "./lib/utils";

const systemSteps = [
  {
    title: "Attract",
    desc: "We don't just find traffic; we find your future customers.",
    icon: <Target className="text-red-500" size={24} />
  },
  {
    title: "Engage",
    desc: "Your site shouldn't just look good; it should speak their language.",
    icon: <Users className="text-red-500" size={24} />
  },
  {
    title: "Convert",
    desc: "Turning attention into action with seamless lead capture.",
    icon: <Zap className="text-red-500" size={24} />
  },
  {
    title: "Close",
    desc: "Infrastructure that turns leads into long-term revenue.",
    icon: <BarChart3 className="text-red-500" size={24} />
  }
];

const features = [
  {
    title: "Websites",
    desc: "High-performance, conversion-first digital storefronts.",
    icon: <Globe size={24} />
  },
  {
    title: "Lead Systems",
    desc: "Automated WhatsApp and form flows that never sleep.",
    icon: <Zap size={24} />
  },
  {
    title: "Backend Infrastructure",
    desc: "Custom inventory and admin tools to run your business.",
    icon: <Database size={24} />
  },
  {
    title: "Payment Systems",
    desc: "Secure, global checkout flows for Stripe and local banks.",
    icon: <CreditCard size={24} />
  },
  {
    title: "Custom Apps",
    desc: "Bespoke software solutions for unique business problems.",
    icon: <Smartphone size={24} />
  }
];

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const whatsappUrl = "https://wa.me/18765555555";
  
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      <Navbar onBuildClick={() => setIsQuizOpen(true)} />
      <BuildQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* 1. HERO SECTION */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="mb-6 text-7xl font-extrabold tracking-tighter sm:text-8xl lg:text-9xl leading-[0.9]">
            Your Website Should <br/> <span className="text-red-600">Close Deals.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400 sm:text-2xl font-light leading-relaxed">
            Stop losing customers to a passive digital presence. We build <span className="text-white font-medium">revenue systems</span> that work while you sleep.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-lg font-bold transition-all hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
            >
              Build With Pytch
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#work"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold transition-all hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </motion.section>

      <TrustMarquee />

      {/* 2. PROBLEM CONTRAST SECTION */}
      <section className="border-y border-white/5 bg-zinc-950 py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold sm:text-7xl leading-tight">Most websites look good. <br/><span className="text-zinc-500">Ours move people.</span></h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed">You don't need a digital brochure. You need an infrastructure that identifies, engages, and converts your ideal customers automatically.</p>
            </motion.div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div 
                whileHover={{ y: -10 }}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
              >
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-zinc-500">The Norm</p>
                <h3 className="mb-4 text-2xl font-bold">Pretty Website</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-zinc-700" /> Static Content</li>
                  <li className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-zinc-700" /> Passive Presence</li>
                  <li className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-zinc-700" /> Cost Center</li>
                </ul>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 shadow-[0_0_40px_rgba(255,0,0,0.05)] transition-colors hover:border-red-500/40"
              >
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-500">The Pytch Way</p>
                <h3 className="mb-4 text-2xl font-bold">Revenue System</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-red-500" /> Dynamic Flow</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-red-500" /> Active Conversion</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-red-500" /> Profit Center</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYSTEM FLOW SECTION */}
      <section id="systems" className="py-32 px-6 bg-black">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="mb-4 text-5xl font-bold sm:text-7xl">We don't build pages. <br/><span className="text-red-600">We build flow.</span></h2>
            <p className="text-xl text-zinc-400">Our 4-step architecture is designed to scale your business, not just your traffic.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {systemSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center p-8 rounded-2xl bg-zinc-900/30 running-border transition-all hover:bg-zinc-900/50"
              >
                <div className="mb-6 rounded-full bg-red-500/10 p-4">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                {idx < systemSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 md:block z-10">
                    <ChevronRight className="text-zinc-800" size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO SECTION (HORIZONTAL SCROLL) */}
      <HorizontalPortfolio />

      {/* 5. FEATURES SECTION */}
      <section className="py-32 px-6 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-5xl font-bold sm:text-7xl">Infrastructure for Growth.</h2>
            <p className="text-xl text-zinc-400">Everything you need to run a world-class digital operation.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all hover:border-red-500/30 hover:bg-zinc-900"
              >
                <div className="mb-6 text-red-500 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROBLEM AWARENESS SECTION */}
      <section className="bg-red-600 py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-5xl"
        >
          <h2 className="mb-8 text-5xl font-extrabold sm:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
            Your business doesn't have a traffic problem. It has a <span className="text-black">conversion problem.</span>
          </h2>
          <p className="text-2xl font-light opacity-90 max-w-2xl mx-auto">
            Stop pouring money into ads that lead to a broken system. Build a foundation that scales.
          </p>
        </motion.div>
      </section>

      {/* 7. AUTHORITY SECTION */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold sm:text-7xl leading-tight">Not just websites. <br/><span className="text-red-600">Infrastructure.</span></h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed">We don't just design; we engineer. From custom SaaS storefronts to automated lead capture tools, we build the tools that power modern business.</p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="rounded-full bg-red-500/10 p-2 text-red-500"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold">SaaS Apps</h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">QuickMenu Storefront</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="rounded-full bg-red-500/10 p-2 text-red-500"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold">Dashboards</h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Internal Ops Tools</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="System Dashboard"
                className="h-full w-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="w-full space-y-6 rounded-2xl bg-black/60 p-8 backdrop-blur-2xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-24 rounded-full bg-red-600" />
                    <div className="h-8 w-8 rounded-full bg-red-600/20 flex items-center justify-center">
                      <Zap size={14} className="text-red-500" />
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-800" />
                  <div className="h-2 w-2/3 rounded-full bg-zinc-800" />
                  <div className="mt-12 grid grid-cols-3 gap-4">
                    <div className="h-16 rounded-xl bg-zinc-900/80 border border-white/5" />
                    <div className="h-16 rounded-xl bg-zinc-900/80 border border-white/5" />
                    <div className="h-16 rounded-xl bg-zinc-900/80 border border-white/5" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section id="pricing" className="py-32 px-6 bg-black border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-5xl font-bold sm:text-7xl">Transparent Investment.</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-red-600" />
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">Starting at</p>
            <div className="mb-8 flex items-baseline justify-center gap-3">
              <span className="text-8xl font-black tracking-tighter">$300</span>
              <span className="text-2xl font-bold text-zinc-500">USD</span>
            </div>
            <p className="text-2xl text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
              We don't sell hours. We sell outcomes. Every build is customized to your vision and scaled to your needs.
            </p>
            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="mt-12 rounded-full bg-white px-10 py-4 text-lg font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105"
            >
              Start Your Build
            </button>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section id="contact" className="relative py-40 px-6 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-red-600/10 blur-[150px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-6xl font-bold sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85]">
            If your website isn't working— <br/><span className="text-red-600">it's costing you.</span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="group flex items-center gap-3 rounded-full bg-white px-12 py-6 text-xl font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 shadow-2xl"
            >
              Build With Pytch
              <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-black/50 px-12 py-6 text-xl font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <MessageSquare size={24} className="text-red-500" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black py-16 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770298701/ChatGPT_Image_Sep_6_2025_08_27_53_AM_raorxf.png"
              alt="Pytch Logo"
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold tracking-tighter">PYTCH</span>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="text-sm text-zinc-500">© 2026 Pytch Marketing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
