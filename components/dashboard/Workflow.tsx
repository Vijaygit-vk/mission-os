"use client";

import {
  Brain,
  Search,
  Lightbulb,
  Cpu,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Idea Analysis",
    desc: "Understanding your startup idea",
    status: "completed",
  },
  {
    icon: Search,
    title: "Market Research",
    desc: "Finding competitors & opportunities",
    status: "completed",
  },
  {
    icon: Lightbulb,
    title: "Business Strategy",
    desc: "Revenue & growth planning",
    status: "running",
  },
  {
    icon: Cpu,
    title: "AI Architecture",
    desc: "Backend & agent planning",
    status: "pending",
  },
  {
    icon: Rocket,
    title: "Launch Plan",
    desc: "Deployment roadmap",
    status: "pending",
  },
];

export default function Workflow() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-bold mb-8">
        AI Workflow
      </h2>

      <div className="space-y-6">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="flex items-start gap-5"
            >

              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center

                ${
                  step.status === "completed"
                    ? "bg-green-500/20 text-green-400"
                    : step.status === "running"
                    ? "bg-blue-500/20 text-blue-400 animate-pulse"
                    : "bg-white/10 text-gray-400"
                }

                `}
              >

                {step.status === "completed" ? (
                  <CheckCircle2 size={24} />
                ) : (
                  <Icon size={24} />
                )}

              </div>

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-semibold text-lg">

                    {step.title}

                  </h3>

                  <span
                    className={`text-sm

                    ${
                      step.status === "completed"
                        ? "text-green-400"
                        : step.status === "running"
                        ? "text-blue-400"
                        : "text-gray-500"
                    }

                    `}
                  >

                    {step.status.toUpperCase()}

                  </span>

                </div>

                <p className="text-gray-400 mt-1">

                  {step.desc}

                </p>

                {index !== steps.length - 1 && (

                  <div className="ml-6 mt-4 h-8 border-l border-dashed border-white/20"/>

                )}

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}