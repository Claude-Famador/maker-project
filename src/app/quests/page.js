import Link from "next/link";

export default function QuestsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="text-2xl font-bold mb-6">Quests</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6 items-start">
        {/* Quest Card */}
        <div className="card rounded-2xl p-6 text-[#1a2a3a]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0f5fb0]/15 flex items-center justify-center">
              {/* icon placeholder */}
              <div className="w-8 h-8 rounded-full bg-[#0f5fb0]"></div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] tracking-wide text-[#6a7b8d]">ARDUINO1</div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-[#1a2a3a]">Light The Tower</h2>
                <Link href="/quests/light-the-tower" className="px-4 py-2 rounded-md bg-[#2f7bd1] text-white text-sm hover:bg-[#2a6fbe]">Start this Quest</Link>
              </div>
              <div className="mt-3 h-3 w-40 bg-[#d9d3d3] rounded-full overflow-hidden">
                <div className="h-3 w-16 bg-[#6c5961]"></div>
              </div>
              <p className="mt-4 text-sm text-[#516072] leading-6">
                🔔 Do You Have What It Takes?
                <br />
                Can you light the watchtower, defend the realm, and prove your maker skills? Step into the quest and show what you're made of!
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-[#6a7b8d]">
                <span>Arduino 101</span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#33c26d] text-white">Beginner</span>
                  <span className="px-3 py-1 rounded-full bg-[#ff4e4e] text-white">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <aside className="card rounded-2xl p-4 text-[#1a2a3a]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded bg-[#dbe8ff]"></div>
            <div className="w-6 h-6 rounded bg-[#ffe7a3]"></div>
            <div className="w-6 h-6 rounded bg-[#ffd2d2]"></div>
          </div>
          <ul className="space-y-2">
            {["Caroline","John","Justin","Michael","Rochelle","Vic"].map((name, idx) => (
              <li key={name} className="flex items-center justify-between bg-[#f3f6fb] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#d9e7ff]"></div>
                  <span className="text-sm text-[#2a3b4f]">{name}</span>
                </div>
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-[10px] text-[#2a3b4f]">
                  V{idx+1}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Explore Resources */}
      <section className="card rounded-2xl mt-8 p-6 text-[#1a2a3a]">
        <h3 className="font-semibold">Explore Resources</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-[#1a5aa0] text-white p-6 h-40 flex flex-col justify-between">
            <div className="text-xl font-semibold">Introduction to Arduino</div>
            <div className="self-end text-2xl">→</div>
          </div>
          <div className="rounded-xl bg-[#1a5aa0] text-white p-6 h-40 flex flex-col justify-between">
            <div className="text-xl font-semibold">Common Syntaxes</div>
            <div className="self-end text-2xl">→</div>
          </div>
        </div>
      </section>
    </main>
  );
}


