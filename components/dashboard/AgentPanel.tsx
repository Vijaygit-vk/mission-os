"use client";

import { Bot, Activity, Cpu, Database, ShieldCheck } from "lucide-react";

const agents = [
  {
    name: "CEO Agent",
    role: "Business Strategy",
    icon: Activity,
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "CTO Agent",
    role: "System Architecture",
    icon: Cpu,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Finance Agent",
    role: "Budget Planning",
    icon: Database,
    color: "from-yellow-500 to-orange-400",
  },
  {
    name: "Marketing Agent",
    role: "Competitor Research",
    icon: ShieldCheck,
    color: "from-pink-500 to-purple-500",
  },
];

export default function AgentPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          AI Agents
        </h2>

        <Bot className="text-blue-400"/>

      </div>

      <div className="mt-8 space-y-5">

        {agents.map((agent) => {

          const Icon = agent.icon;

          return (

            <div
              key={agent.name}
              className="rounded-2xl bg-white/5 p-5 hover:bg-white/10 transition border border-white/5"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg`}
                  >

                    <Icon size={24}/>

                  </div>

                  <div>

                    <h3 className="font-bold">

                      {agent.name}

                    </h3>

                    <p className="text-gray-400 text-sm">

                      {agent.role}

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <div className="h-3 w-3 rounded-full bg-green-500 animate-ping"/>

                  <span className="text-green-400 text-sm">

                    Active

                  </span>

                </div>

              </div>

              <div className="mt-5">

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                  <div
                    className={`h-full bg-gradient-to-r ${agent.color} rounded-full animate-pulse`}
                    style={{ width: "85%" }}
                  />

                </div>

                <div className="mt-2 flex justify-between text-xs text-gray-400">

                  <span>Task Progress</span>

                  <span>85%</span>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}