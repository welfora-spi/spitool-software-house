import { motion, useReducedMotion } from "framer-motion";

// Masked line-by-line reveal for kinetic hero headings.
// lines: array of strings (or nodes). Each line clips + springs up.
export const MaskedReveal = ({ lines, className = "", delay = 0.15, lineClass = "" }) => {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className={`block ${lineClass}`}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
