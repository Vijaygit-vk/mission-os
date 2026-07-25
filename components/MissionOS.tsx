"use client";

import { useState } from "react";
import BootScreen from "./BootScreen";
import Hero from "@/components/landing/Hero";
import AgentCards from "@/components/landing/AgentCards";
import MissionStatus from "@/components/landing/MissionStatus";
import Dashboard from "@/components/dashboard/Dashboard";

export default function MissionOS() {
  const [started, setStarted] = useState(false);
  const [booted, setBooted] = useState(false);

  if (started && !booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  if (started && booted) {
    return <Dashboard />;
  }

  return (
    <>
      <Hero onLaunch={() => setStarted(true)} />
      <AgentCards />
      <MissionStatus />
    </>
  );
}