import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="flex items-center gap-6 md:gap-10">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/10 border border-white/20 shadow-lg"></div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">Hi there, Julia!</h1>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/continue" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 text-sm">
              Continue Quest
            </Link>
            <Link href="/skills" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 text-sm">
              View My Skills
            </Link>
            <Link href="/quests/light-the-tower" className="px-4 py-2 rounded-lg bg-[#f44336] text-white hover:bg-[#e23b2f] text-sm">
              Start New Quest
            </Link>
          </div>
        </section>

        {/* Quest Highlight Card */}
        <section className="mt-12">
          <div className="card rounded-3xl overflow-hidden">
            <div className="bg-[#0f5fb0] text-white px-6 py-4 relative">
              <div className="text-xs opacity-90">DEPARTMENT OF SCIENCE AND TECHNOLOGY</div>
              <div className="text-sm font-semibold">Science and Technology Information Institute</div>
              <div className="absolute right-6 -bottom-6 w-40 h-12 rounded-[999px] bg-[#0a57a8]"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              <div>
                <div className="bg-[#3278bf] text-white rounded-2xl p-6">
                  <h3 className="text-xl font-semibold">Light The Tower</h3>
                  <div className="mt-4 rounded-xl bg-white/10 p-4">
                    <div className="text-xs">Will you be a keeper of the Tower Flame?</div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#ff6b6b] text-white">Beginner</span>
                      <div className="ml-4 h-2 rounded-full bg-white/30 w-24">
                        <div className="h-2 rounded-full bg-white w-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2a3a]">Goal Of This Quest</h3>
                <p className="mt-3 text-sm text-[#3b4450] leading-6">
                  Design and build a functional sensor array using an Arduino that can detect motion or environmental changes, triggering a signal to light up a watchtower. This quest introduces the basics of physical computing, wiring, and sensor integration — your mission is to bring the tower to life and guard the realm!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
