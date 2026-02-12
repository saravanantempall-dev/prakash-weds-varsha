import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import floralTop from "../assets/floral-top.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background relative overflow-hidden">
      {/* Floral decoration */}
      <motion.img
        src={floralTop}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-30 rotate-180"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-3xl md:text-4xl text-gradient-gold mb-4">
            We can't wait to celebrate with you!
          </h2>

          <div className="flex items-center justify-center gap-2 my-6">
            <div className="gold-divider flex-1 max-w-16" />
            <Heart
              className="w-5 h-5 text-primary animate-pulse-soft"
              fill="currentColor"
            />
            <div className="gold-divider flex-1 max-w-16" />
          </div>

          <p className="font-display text-xl text-foreground mb-2">
            Prakash & Varsha
          </p>
          <p className="font-body text-muted-foreground">06.03.2026</p>

          <p className="font-body text-sm text-muted-foreground mt-8">
            Made with{" "}
            <Heart
              className="w-3 h-3 inline text-primary"
              fill="currentColor"
            />{" "}
            for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
