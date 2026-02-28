import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}