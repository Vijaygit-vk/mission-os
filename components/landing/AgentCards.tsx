"use client";

import { motion } from "framer-motion";

const agents = [
  {
    emoji: "🧠",
    title: "CEO Agent",
    description: "Creates business strategies and validates startup ideas."
  },
  {
    emoji: "💻",
    title: "CTO Agent",
    description: "Designs software architecture and technical roadmap."
  },
  {
    emoji: "📈",
    title: "Marketing Agent",
    description: "Plans campaigns, branding and customer acquisition."
  },
  {
    emoji: "💰",
    title: "Finance Agent",
    description: "Creates budgets, forecasts and investment plans."
  },
];

export default function AgentCards() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-bold"
      >
        Meet Your AI Team
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border bg-white/80 p-6 shadow-xl backdrop-blur"
          >
            <div className="text-5xl">{agent.emoji}</div>

            <h3 className="mt-5 text-2xl font-bold">
              {agent.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {agent.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}