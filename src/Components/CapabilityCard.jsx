import { motion } from "framer-motion";

export default function CapabilityCard({ title, description }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-lg font-semibold text-cyan-600">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}