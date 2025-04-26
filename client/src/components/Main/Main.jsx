import React from "react";

const Main = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center p-6">
      <header className="mb-10">
        <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-bounce">
          SeaSavr
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          A place where every small action makes a wave. 🌊  
          Join us in tracking and protecting our oceans — one story, one report, one dream at a time.
        </p>
      </header>

      <main className="flex flex-col gap-6">
        <a
          href="/report"
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          Report Pollution
        </a>

        <a
          href="/map"
          className="bg-teal-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-teal-600 transition"
        >
          View Pollution Map
        </a>
      </main>

      <footer className="mt-16 text-sm text-blue-500">
        🌎 Made with love by ocean dreamers.
      </footer>
    </div>
  );
};

export default Main;
