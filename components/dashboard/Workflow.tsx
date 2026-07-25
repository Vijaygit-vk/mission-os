"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Search,
  Lightbulb,
  Cpu,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const workflow = [
  {
    title: "Idea Analysis",
    desc: "Understanding startup vision",
    icon: Brain,
  },
  {
    title: "Market Research",
    desc: "Scanning competitors",
    icon: Search,
  },
  {
    title: "Business Strategy",
    desc: "Generating revenue model",
    icon: Lightbulb,
  },
  {
    title: "System Architecture",
    desc: "Building AI architecture",
    icon: Cpu,
  },
  {
    title: "Launch Plan",
    desc: "Preparing deployment",
    icon: Rocket,
  },
];

export default function Workflow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % workflow.length);
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#111827]/80 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold text-white">
          AI Mission Workflow
        </h2>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

          <div className="h-2 w-2 rounded-full bg-green-400 animate-ping"></div>

          <span className="text-green-400 text-sm">
            LIVE
          </span>

        </div>

      </div>

      <div className="space-y-8">

        {workflow.map((item, index) => {
          const Icon = item.icon;

          const completed = index < active;

          const running = index === active;

          return (
            <div key={item.title} className="relative flex gap-5">

              <div className="flex flex-col items-center">

                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all duration-500

                  ${
                    completed
                      ? "bg-green-500/20 text-green-400 shadow-[0_0_25px_rgba(34,197,94,.5)]"
                      : running
                      ? "bg-cyan-500/20 text-cyan-400 animate-pulse shadow-[0_0_35px_rgba(59,130,246,.8)]"
                      : "bg-white/5 text-gray-500"
                  }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 size={30} />
                  ) : (
                    <Icon size={30} />
                  )}
                </div>

                {index !== workflow.length - 1 && (
                  <div
                    className={`mt-2 h-14 w-1 rounded-full transition-all duration-700

                    ${
                      completed
                        ? "bg-green-400"
                        : running
                        ? "bg-cyan-400 animate-pulse"
                        : "bg-white/10"
                    }
                    `}
                  />
                )}
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <span
                    className={`text-sm font-semibold

                    ${
                      completed
                        ? "text-green-400"
                        : running
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }
                    `}
                  >
                    {completed
                      ? "COMPLETED"
                      : running
                      ? "RUNNING"
                      : "WAITING"}
                  </span>

                </div>

                <p className="mt-2 text-gray-400">
                  {item.desc}
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className={`h-full rounded-full transition-all duration-700

                    ${
                      completed
                        ? "w-full bg-green-400"
                        : running
                        ? "w-2/3 animate-pulse bg-cyan-400"
                        : "w-0"
                    }
                    `}
                  />

                </div>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}