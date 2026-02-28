import { motion } from "framer-motion";
import Section from "../Components/Section";
import CapabilityCard from "../Components/CapabilityCard";
import ProgressBar from "../Components/ProgressBar";
import { capabilities, modulesProgress } from "../data/PoeageHubData";
import SEO from "../Components/SEO";


export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
       <SEO
        title="Building Poeage Hub"
        description="Poeage Hub is a multi-vendor shopping platform developed by Poeage IT Solutions under Poeage Groups."
        path="/poeage-hub"
      />

      {/* HERO */}
      <header className="text-center py-16 px-6 bg-white shadow-sm">
        <motion.h1
          className="text-xl lg:text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building Poeage Hub
          
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Poeage Hub is an upcoming multi-vendor shopping platform developed by
          Poeage IT Solutions under Poeage Groups. Our engineering division is
          actively building a secure, scalable, and user-focused marketplace.
        </motion.p>

        <motion.span
          className="mt-6 inline-block bg-cyan-100 text-yellow-800 px-4 py-2 rounded-full font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          🚧 Platform in Development
        </motion.span>
      </header>

    
      {/* ENGINEERING CAPABILITIES */}
      <Section title="Engineering Capabilities" className=" text-xl lg:text-3xl text-gray-900">
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((item, i) => (
            <CapabilityCard
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* DEVELOPMENT PROGRESS */}
      <Section title="Development Progress">
        <div className="space-y-6">
          {modulesProgress.map((module, i) => (
            <ProgressBar
              key={i}
              label={module.name}
              value={module.progress}
            />
          ))}
        </div>
      </Section>

      {/* TRANSPARENCY SECTION */}
<section className="py-16 px-6 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-center">       
   <motion.h2
          className="text-xl lg:text-3xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Transparency & Commitment
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl mx-auto text-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Poeage Hub is being developed with a strong focus on performance,
          security, and reliability. We are committed to delivering a trusted
          shopping experience for both customers and vendors.
        </motion.p>
      </section>
    </main>
  );
}