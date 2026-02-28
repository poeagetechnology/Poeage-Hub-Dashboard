import { motion } from "framer-motion";

export default function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
        <motion.div
          className="bg-cyan-500 h-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}