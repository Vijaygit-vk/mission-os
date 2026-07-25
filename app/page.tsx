import MissionOS from "@/components/MissionOS";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817]">

      {/* Background Glow */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      {/* Grid */}

      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,.10) 1px,transparent 1px),
            linear-gradient(90deg,rgba(59,130,246,.10) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <MissionOS />

    </main>
  );
}