"use client";

import { Bot, User } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function ChatPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6 h-full">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Live AI Conversation
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Multi-Agent Collaboration
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">

          <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"/>

          <span className="text-green-400 text-sm">
            LIVE
          </span>

        </div>

      </div>

      <div className="space-y-5">

        {/* USER */}

        <div className="flex justify-end">

          <div className="max-w-md rounded-2xl bg-blue-600 p-4">

            <div className="flex items-center gap-2 mb-2">

              <User size={16}/>

              <span className="font-semibold">
                Founder
              </span>

            </div>

            Build an AI startup that automatically creates businesses from a single prompt.

          </div>

        </div>

        {/* CEO */}

        <div className="flex">

          <div className="max-w-md rounded-2xl bg-white/5 border border-white/10 p-4">

            <div className="flex items-center gap-2 mb-3 text-green-400">

              <Bot size={16}/>

              <span className="font-semibold">
                CEO Agent
              </span>

            </div>

            <TypeAnimation
              sequence={[
                "Analyzing startup feasibility...",
                1000,
                "Market demand identified successfully.",
                1000,
                "Business opportunity score : 95%",
                1000,
              ]}
              speed={60}
              repeat={Infinity}
            />

          </div>

        </div>

        {/* CTO */}

        <div className="flex">

          <div className="max-w-md rounded-2xl bg-white/5 border border-white/10 p-4">

            <div className="flex items-center gap-2 mb-3 text-blue-400">

              <Bot size={16}/>

              <span className="font-semibold">
                CTO Agent
              </span>

            </div>

            <TypeAnimation
              sequence={[
                "Designing scalable architecture...",
                1000,
                "Generating API endpoints...",
                1000,
                "Tech stack finalized.",
                1000,
              ]}
              speed={60}
              repeat={Infinity}
            />

          </div>

        </div>

        {/* Finance */}

        <div className="flex">

          <div className="max-w-md rounded-2xl bg-white/5 border border-white/10 p-4">

            <div className="flex items-center gap-2 mb-3 text-yellow-400">

              <Bot size={16}/>

              <span className="font-semibold">
                Finance Agent
              </span>

            </div>

            <TypeAnimation
              sequence={[
                "Calculating MVP budget...",
                1000,
                "Forecasting revenue...",
                1000,
                "Investor report generated.",
                1000,
              ]}
              speed={60}
              repeat={Infinity}
            />

          </div>

        </div>

        {/* Marketing */}

        <div className="flex">

          <div className="max-w-md rounded-2xl bg-white/5 border border-white/10 p-4">

            <div className="flex items-center gap-2 mb-3 text-pink-400">

              <Bot size={16}/>

              <span className="font-semibold">
                Marketing Agent
              </span>

            </div>

            <TypeAnimation
              sequence={[
                "Scanning competitors...",
                1000,
                "Brand strategy generated...",
                1000,
                "Marketing campaign ready.",
                1000,
              ]}
              speed={60}
              repeat={Infinity}
            />

          </div>

        </div>

      </div>

    </div>
  );
}