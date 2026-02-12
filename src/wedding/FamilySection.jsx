import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FamilySection = () => {
  const families = [
    {
      title: "Groom's Family",
      titleTamil: "மணமகன் அன்புள்ள",
       members: [
        { name: "K. Cinraj", role: "Father" },
        { name: "C. Amutha", role: "Mother" },
        { address: "Thoraipakkam, Chennai-97" },
      ],
      bride: false,
    },
    {
      title: "Bride's Family",
      titleTamil: "மணமகள் அன்புள்ள",
     
      members: [
        { name: "M. Ramachandran", role: "Father" },
        { name: "R. Lakshmi", role: "Mother" },
        { address: "Redhills, Chennai-52" },
      ],
      bride: true,
    },
  ];

  const coupleInfo = [
    {
      name: "C. Prakash",
      title: "Groom",
      education: "DAE., (FCS Pvt. Ltd.,)",
      parents: "S/o K. Cinraj & C. Amutha",
    },
    {
      name: "R. Varsha",
      title: "Bride",
      education: "DCE., BCA.,",
      parents: "D/o M. Ramachandran & R.Lakshmi",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient-gold mb-4">
            The Couple
          </h2>
          <p className="font-display text-xl text-muted-foreground">
            மணமக்கள்
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Couple Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coupleInfo.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="wedding-card text-center"
            >
              <p className="font-body text-sm text-primary uppercase tracking-wider mb-2">
                {person.title}
              </p>
              <h3 className="font-script text-3xl md:text-4xl text-gradient-gold mb-3">
                {person.name}
              </h3>
              <p className="font-display text-muted-foreground mb-2">
                {person.education}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {person.parents}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Heart Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="gold-divider flex-1 max-w-32" />
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          <div className="gold-divider flex-1 max-w-32" />
        </div>

        {/* Family Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {families.map((family, index) => (
            <motion.div
              key={family.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="wedding-card text-center"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                {family.title}
              </h3>
              <p className="font-body text-sm text-primary mb-4">
                {family.titleTamil}
              </p>
              <div className="space-y-2">
                {family.members.map((member, idx) => (
                  <p key={idx} className="font-body text-muted-foreground">
                    {member.name && (
                      <>
                        <span className="text-foreground font-medium">
                          {member.name}
                        </span>
                        {member.role && (
                          <span className="text-sm"> ({member.role})</span>
                        )}
                      </>
                    )}
                    {member.address && (
                      <span className="text-sm italic">
                        {member.address}
                      </span>
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
