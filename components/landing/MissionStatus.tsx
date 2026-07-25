"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  DollarSign,
  Megaphone,
} from "lucide-react";

const agents = [
  {
    name: "CEO Agent",
    status: "Generating Business Strategy",
    progress: 95,
    color: "from-green-500 to-emerald-400",
    icon: Briefcase,
  },
  {
    name: "CTO Agent",
    status: "Designing System Architecture",
    progress: 88,
    color: "from-cyan-500 to-blue-500",
    icon: Cpu,
  },
  {
    name: "Finance Agent",
    status: "Preparing Revenue Forecast",
    progress: 81,
    color: "from-yellow-500 to-orange-400",
    icon: DollarSign,
  },
  {
    name: "Marketing Agent",
    status: "Scanning Competitors",
    progress: 92,
    color: "from-pink-500 to-purple-500",
    icon: Megaphone,
  },
];

export default function MissionStatus() {
  return (
    <section className="mx-auto mt-24 max-w-6xl rounded-3xl border border-cyan-500/20 bg-[#0f172a]/70 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,.15)]">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-black text-white">

            Live Mission Status

          </h2>

          <p className="mt-2 text-cyan-300">

            Autonomous AI agents are building your startup

          </p>

        </div>

        <div className="flex items-center gap-3 rounded-full bg-green-500/10 px-5 py-2">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-ping"></div>

          <span className="font-semibold text-green-400">

            LIVE

          </span>

        </div>

      </div>

      <div className="space-y-6">

        {agents.map((agent, index) => {

          const Icon = agent.icon;

          return (

            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.color}`}
                  >

                    <Icon className="text-white" size={30} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {agent.name}

                    </h3>

                    <p className="text-cyan-300">

                      {agent.status}

                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h3 className="text-3xl font-black text-white">

                    {agent.progress}%

                  </h3>

                  <span className="text-green-400">

                    ACTIVE

                  </span>

                </div>

              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${agent.progress}%` }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
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