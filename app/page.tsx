import MissionOS from "@/components/MissionOS";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100">

      <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold">
          🚀 MissionOS
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Features</a>
          <a href="#">Agents</a>
          <a href="#">About</a>
        </div>

      </nav>

      <MissionOS />

    </main>
  );
}