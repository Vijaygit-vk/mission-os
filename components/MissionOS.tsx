"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BootScreen from "./BootScreen";
import Hero from "@/components/landing/Hero";
import Dashboard from "@/components/dashboard/Dashboard";

export default function MissionOS() {
  const [booted, setBooted] = useState(false);
  const [started, setStarted] = useState(false);

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  if (started) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, scale: .98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
        >
          <Dashboard />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .7 }}
        className="relative min-h-screen overflow-hidden bg-[#020817]"
      >

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

          <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

          <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        </div>

        {/* Animated Grid */}

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

        {/* Hero */}

        <div className="relative z-20">

          <Hero />

        </div>

        {/* Launch Button */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-20 flex justify-center pb-24"
        >

          <button
            onClick={() => setStarted(true)}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-12 py-5 text-lg font-bold text-white shadow-[0_0_50px_rgba(59,130,246,.45)] transition hover:scale-105"
          >
            🚀 Launch Mission
          </button>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}