import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";

const events = [
  {
    id: 1,
    name: "Pandakkal Pooja",
    nameTamil: "பந்தக்கால்",
    date: "04 March 2026",
    time: "5:00 AM - 6:00 AM",
    icon: "calendar",
  },
  {
    id: 2,
    name: "Reception Ceremony",
    nameTamil: "வரவேற்பு",
    date: "05 March 2026",
    time: "6:00 PM",
    icon: "sparkles",
  },
//   {
//     id: 3,
//     name: "Varaverpu",
//     nameTamil: "வரவேற்பு",
//     date: "05 March 2026",
//     time: "6:30 PM",
//     icon: "clock",
//   },
  {
    id: 4,
    name: "Wedding Ceremony",
    nameTamil: "முகூர்த்தம்",
    date: "06 March 2026",
    time: "6:00 AM - 7:30 AM",
    icon: "sparkles",
  },
];

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  sparkles: Sparkles,
};

const EventsTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient-gold mb-4">
            Wedding Events
          </h2>
          <p className="font-display text-xl text-muted-foreground">
            நிகழ்ச்சி நிரல்
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const Icon = iconMap[event.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-4 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="wedding-card inline-block">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {event.name}
                      </h3>
                      <p className="font-body text-primary text-sm mt-1">
                        {event.nameTamil}
                      </p>

                      <div className="flex items-center gap-2 mt-3 text-muted-foreground justify-center md:justify-start">
                        <Calendar className="w-4 h-4" />
                        <span className="font-body text-sm">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-muted-foreground justify-center md:justify-start">
                        <Clock className="w-4 h-4" />
                        <span className="font-body text-sm">{event.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
                    >
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
