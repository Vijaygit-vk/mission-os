function Navbar() {
    return (
      <nav className="border-b border-slate-800 bg-slate-950">
  
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
  
          <h2 className="text-2xl font-bold text-blue-400">
            MissionOS
          </h2>
  
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
  
            Dashboard
  
          </button>
  
        </div>
  
      </nav>
    );
  }
  
  export default Navbar;