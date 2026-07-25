"use client";

import { motion } from "framer-motion";

const agents = [
  { name: "CEO Agent", status: "Planning...", color: "bg-green-500" },
  { name: "CTO Agent", status: "Designing...", color: "bg-blue-500" },
  { name: "Finance Agent", status: "Calculating...", color: "bg-yellow-500" },
  { name: "Marketing Agent", status: "Researching...", color: "bg-pink-500" },
];

export default function MissionStatus() {
  return (
    <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur">

      <h2 className="mb-8 text-center text-4xl font-bold">
        🚀 Mission Status
      </h2>

      <div className="space-y-6">

        {agents.map((agent, index) => (

          <motion.div
            key={agent.name}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center justify-between rounded-xl bg-gray-50 p-5"
          >

            <div className="flex items-center gap-4">

              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className={`h-4 w-4 rounded-full ${agent.color}`}
              />

              <h3 className="text-xl font-semibold">
                {agent.name}
              </h3>

            </div>

            <span className="text-gray-600">
              {agent.status}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}