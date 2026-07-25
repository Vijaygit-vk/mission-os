"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Bot, Rocket } from "lucide-react";

export default function Hero({
   onLaunch,
}: {
  onLaunch: () => void;
}) {
  const [idea, setIdea] = useState("");
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white">

      {/* Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59,130,246,.12) 1px,transparent 1px),
          linear-gradient(90deg,rgba(59,130,246,.12) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl"
        >
          🚀 Autonomous Startup Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-black leading-tight md:text-8xl"
        >
          MISSION
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            OS
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-3xl font-semibold text-cyan-300"
        >
          Where Autonomous AI Agents Build
          <br />
          Your Startup From One Prompt
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-3xl text-xl leading-9 text-slate-300"
        >
          CEO • CTO • Finance • Marketing AI collaborate in real time to
          validate, plan, architect, estimate and launch your startup
          automatically.
        </motion.p>

        {/* AI Prompt */}
        <motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="mt-14 w-full max-w-5xl rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-4 backdrop-blur-xl shadow-[0_0_70px_rgba(59,130,246,.35)]"
>

  <div className="flex flex-col gap-4 md:flex-row">

    <input
      value={idea}
      onChange={(e) => setIdea(e.target.value)}
      placeholder="Describe your startup idea..."
      className="flex-1 rounded-2xl bg-slate-950/80 px-6 py-5 text-lg text-cyan-300 outline-none"
    />

    <button
      onClick={onLaunch}
      className="rounded-2xl bg-cyan-500 px-8 py-5 font-bold text-slate-950 transition hover:scale-105"
    >
      Launch Mission 🚀
    </button>

  </div>

</motion.div>

       
                {/* AI Agents */}

        <div className="mt-16 grid w-full max-w-5xl gap-5 md:grid-cols-4">

          {[
            ["CEO Agent", Bot],
            ["CTO Agent", Cpu],
            ["Finance AI", Rocket],
            ["Marketing AI", Bot],
          ].map(([name, Icon]) => {

            const Comp = Icon as React.ElementType;

            return (

              <motion.div
                key={name}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-xl shadow-lg"
              >

                <Comp
                  size={34}
                  className="mx-auto mb-4 text-cyan-400"
                />

                <h3 className="font-bold text-lg">

                  {name}

                </h3>

                <div className="mt-4 flex items-center justify-center gap-2">

                  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

                  <span className="text-sm text-green-400">

                    ONLINE

                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 text-center text-slate-400"
        >

          Powered by Gemini • LangGraph • FastAPI • Next.js • Firebase

        </motion.div>

      </div>

    </section>
  );
}