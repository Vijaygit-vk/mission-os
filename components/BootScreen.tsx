"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

const steps = [
  "Booting MissionOS Core...",
  "Initializing CEO Agent...",
  "Initializing CTO Agent...",
  "Initializing Finance Agent...",
  "Initializing Marketing Agent...",
  "Connecting Neural Engine...",
  "Synchronizing AI Agents...",
  "MISSION READY",
];

export default function BootScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => onComplete(), 800);
      return () => clearTimeout(t);
    }

    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, 70);

    return () => clearInterval(timer);
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#020817] text-cyan-300">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,.15) 1px,transparent 1px),
            linear-gradient(90deg,rgba(59,130,246,.15) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanner */}

      <motion.div
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="absolute left-0 h-32 w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
      />

      <div className="relative z-10 flex h-screen items-center justify-center">

        <div className="w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-10 backdrop-blur-xl">

          <h1 className="text-center text-6xl font-black tracking-widest">

            MISSION<span className="text-blue-400">OS</span>

          </h1>

          <p className="mt-4 text-center text-cyan-400">

            AUTONOMOUS STARTUP INTELLIGENCE

          </p>

          <div className="mt-10">

            <div className="mb-3 flex justify-between">

              <span>Initializing Neural Engine</span>

              <span>{progress}%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              />

            </div>

          </div>

          <div className="mt-10 space-y-4">

            {steps.map((step, index) => {

              const active = progress >= (index + 1) * 12;

              return (

                <div
                  key={step}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3"
                >

                  <span>{step}</span>

                  <span
                    className={
                      active
                        ? "text-green-400"
                        : "text-gray-500"
                    }
                  >
                    {active ? "ONLINE" : "..."}
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </div>
  );
}