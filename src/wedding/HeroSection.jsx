import { motion } from "framer-motion";
import floralTop from "../assets/floral-top.png";
// import coupleImage from "@/assets/couple-hero.jpg";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Floral decoration top */}
      <motion.img
        src={floralTop}
        alt="Floral decoration"
        className="absolute top-0 left-0 w-full h-auto opacity-90"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Main content */}
      <div className="relative z-20 text-center px-4 pt-32 pb-16">
        <motion.p
          className="text-primary font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Wedding Invitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gradient-gold mb-2">
            Prakash
          </h1>

          <div className="flex items-center justify-center gap-4 my-4">
            <div className="gold-divider flex-1 max-w-24" />
            <Heart
              className="w-6 h-6 text-primary animate-pulse-soft"
              fill="currentColor"
            />
            <div className="gold-divider flex-1 max-w-24" />
          </div>

          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gradient-gold">
            Varsha
          </h1>
        </motion.div>

        {/* Couple image */}
        {/* <motion.div
          className="mt-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl transform scale-110" />
            <img
              src={coupleImage}
              alt="Pirakaash & Varsha"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/30 shadow-glow mx-auto"
            />
          </div>
        </motion.div> */}

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-display text-2xl md:text-3xl text-foreground/80">
            Are Getting Married
          </p>
          <p className="font-display text-xl md:text-2xl text-primary font-semibold">
            March 6, 2026 • Friday
          </p>
          <p className="font-body text-muted-foreground mt-2">
            06.03.2026 • வெள்ளிக்கிழமை
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary/60"
          >
            <svg className="w-6 h-10 mx-auto" viewBox="0 0 24 40">
              <rect
                x="1"
                y="1"
                width="22"
                height="38"
                rx="11"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="12"
                cy="12"
                r="4"
                fill="currentColor"
                animate={{ cy: [10, 20, 10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
