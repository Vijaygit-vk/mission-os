"use client";

import { Activity, Bot, FileText, MessageSquare, Settings, Sparkles } from "lucide-react";
import AgentPanel from "./AgentPanel";
import ChatPanel from "./ChatPanel";
import Workflow from "./Workflow";

export default function Dashboard() {
  const stats = [
    {
      title: "AI Agents",
      value: "4",
    },
    {
      title: "Tasks",
      value: "24",
    },
    {
      title: "Completion",
      value: "74%",
    },
    {
      title: "Generated Files",
      value: "12",
    },
  ];

  const deliverables = [
    "Business Model Canvas",
    "Competitor Analysis",
    "System Architecture",
    "Financial Plan",
    "Pitch Deck",
    "Prototype",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* SIDEBAR */}

      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-white/10 bg-[#07101F] backdrop-blur-xl lg:block">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Sparkles className="text-blue-500"/>

            <div>

              <h1 className="text-2xl font-bold">
                MissionOS
              </h1>

              <p className="text-xs text-gray-400">
                AI Startup Studio
              </p>

            </div>

          </div>

          <div className="mt-12 space-y-3">

            <button className="flex w-full items-center gap-3 rounded-xl bg-blue-600 p-3">
              <Activity size={18}/>
              Mission
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5">
              <Bot size={18}/>
              AI Agents
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5">
              <MessageSquare size={18}/>
              Conversations
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5">
              <FileText size={18}/>
              Deliverables
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5">
              <Settings size={18}/>
              Settings
            </button>

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <main className="lg:ml-64">

        {/* HEADER */}

        <div className="sticky top-0 z-40 border-b border-white/10 bg-[#020617]/90 backdrop-blur">

          <div className="flex items-center justify-between p-6">

            <div>

              <h1 className="text-4xl font-black">
                Mission Control
              </h1>

              <p className="mt-2 text-gray-400">
                Autonomous Startup Builder
              </p>

            </div>

            <div className="rounded-full bg-green-500/10 px-5 py-2 text-green-400 border border-green-500/20">

              ● Mission Running

            </div>

          </div>

        </div>

        {/* BODY */}

        <div className="p-6">

          {/* STATS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6 hover:border-blue-500 transition"
              >

                <p className="text-gray-400">

                  {item.title}

                </p>

                <h2 className="mt-3 text-4xl font-bold">

                  {item.value}

                </h2>

              </div>

            ))}

          </div>

          {/* AGENTS + CHAT */}

          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            <AgentPanel />

            <div className="xl:col-span-2">

              <ChatPanel />

            </div>

          </div>

          {/* WORKFLOW */}

          <div className="mt-8">

            <Workflow />

          </div>

          {/* DELIVERABLES */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6">

              <h2 className="mb-6 text-2xl font-bold">

                Deliverables

              </h2>

              <div className="space-y-4">

                {deliverables.map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/5 p-4 hover:bg-white/10 transition"
                  >

                    <span>

                      {item}

                    </span>

                    <span className="text-green-400">

                      Ready

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6">

              <h2 className="mb-6 text-2xl font-bold">

                Mission Progress

              </h2>

              <div className="h-4 rounded-full bg-gray-700 overflow-hidden">

                <div className="h-4 w-3/4 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"/>

              </div>

              <h1 className="mt-8 text-6xl font-black">

                74%

              </h1>

              <p className="mt-4 text-gray-400">

                AI agents are collaboratively generating your startup.

              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-gray-400 text-sm">
                    Active Agents
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    4
                  </h3>

                </div>

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-gray-400 text-sm">
                    Files Generated
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    12
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}