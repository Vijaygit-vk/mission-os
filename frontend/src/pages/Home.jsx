import Navbar from "../components/Navbar";
import MissionForm from "../components/MissionForm";
import OutputCard from "../components/OutputCard";
import { useState } from "react";

function Home() {
  const [response, setResponse] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            🚀 MissionOS
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            AI Powered Startup Operating System
          </p>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Turn your startup idea into a complete business strategy,
            roadmap, technology stack and execution plan within seconds.
          </p>

        </div>

        <div className="mt-12">

          <MissionForm setResponse={setResponse} />

        </div>

        <div className="mt-12">

          <OutputCard response={response} />

        </div>

      </div>

    </div>
  );
}

export default Home;