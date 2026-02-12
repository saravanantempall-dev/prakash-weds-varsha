import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import floralBottom from "../assets/floral-bottom.png";

const VenueSection = () => {
  const venueAddress =
    "K.V.L. Kalyana mahal, Chennai - 119, Sholinganallur, OMR";
  const mapUrl =
    "https://maps.app.goo.gl/KE5TseLQAsEW71Qy8";
  const busRoutes = "521, 568, 570X, 119C, 119, 102P, 102C, 95, 19A, 19B";

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Floral decoration */}
      <motion.img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 right-0 w-64 md:w-96 opacity-50"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient-gold mb-4">
            Venue
          </h2>
          <p className="font-display text-xl text-muted-foreground">
            திருமண மண்டபம்
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="wedding-card max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
            >
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            K.V.L. Thirumana Mahal
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            {venueAddress}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-wedding inline-flex items-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.a>
          </div>

          <div className="border-t border-border/50 pt-6 mt-6">
            <p className="font-body text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Bus Routes:</span>
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {busRoutes}
            </p>
          </div>

          <div className="border-t border-border/50 pt-6 mt-6">
            <p className="font-body text-sm text-muted-foreground mb-3">
              <span className="font-semibold text-foreground">Contact:</span>
            </p>
            <div className="flex flex-col items-center gap-2">
              <a
                href="tel:+918015403752"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <span className="font-semibold text-foreground">Groom:</span>
                <Phone className="w-4 h-4" />
                <span className="font-body">+91 80154 03752</span>
              </a>
              <a
                href="tel:+918939363082"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <span className="font-semibold text-foreground">Bride:</span>
                <Phone className="w-4 h-4" />
                <span className="font-body">+91 89393 63082</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
