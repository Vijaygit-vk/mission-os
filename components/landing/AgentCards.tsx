"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  Megaphone,
  DollarSign,
} from "lucide-react";

const agents = [
  {
    title: "CEO Agent",
    role: "Business Strategy",
    icon: Briefcase,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "CTO Agent",
    role: "System Architecture",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Marketing Agent",
    role: "Market Intelligence",
    icon: Megaphone,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Finance Agent",
    role: "Financial Planning",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-400",
  },
];

export default function AgentCards() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-5xl font-black text-white"
      >
        Meet Your Autonomous AI Team
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {agents.map((agent, index) => {

          const Icon = agent.icon;

          return (

            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0f172a]/70 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,.12)]"
            >

              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

              <div
                className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${agent.color} shadow-lg`}
              >

                <Icon size={36} className="text-white" />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {agent.title}

              </h3>

              <p className="mt-2 text-cyan-300">

                {agent.role}

              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-green-400 text-sm font-semibold">

                  ● ONLINE

                </span>

                <span className="text-gray-400 text-sm">

                  AI Ready

                </span>

              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  animate={{
                    width: ["40%", "100%", "70%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${agent.color}`}
                />

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}