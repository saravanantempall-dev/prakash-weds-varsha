import { motion } from "framer-motion";
// import petalImage from "@/assets/petal.png";
import petalImage from "../assets/petal.png";

const FloatingPetals = () => {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 20 + Math.random() * 30,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.img
          key={petal.id}
          src={petalImage}
          alt=""
          className="absolute opacity-60"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
          }}
          initial={{
            y: -100,
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: petal.rotation + 720,
            opacity: [0, 0.7, 0.7, 0.3],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
