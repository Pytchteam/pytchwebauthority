import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

interface NavbarProps {
  onBuildClick: () => void;
}

export default function Navbar({ onBuildClick }: NavbarProps) {
  const whatsappNumber = "18765555555"; // Placeholder, user can update
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770298701/ChatGPT_Image_Sep_6_2025_08_27_53_AM_raorxf.png"
            alt="Pytch Logo"
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-tighter text-white">PYTCH</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Our Work</a>
          <a href="#systems" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Systems</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-white/10 md:flex"
          >
            <MessageSquare size={16} className="text-red-500" />
            WhatsApp
          </a>
          <button
            onClick={onBuildClick}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
          >
            Build With Pytch
          </button>
        </div>
      </div>
    </nav>
  );
}
