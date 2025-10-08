"use client";

import { useState } from "react";

const tabs = [
  { id: "mission", label: "Our Mission", content: "We empower makers to learn by doing through quests and community." },
  { id: "team", label: "Team", content: "A small team of educators, engineers, and designers." },
  { id: "contact", label: "Contact", content: "Reach us at hello@maker.example" },
];

export default function AboutPage() {
  const [active, setActive] = useState("mission");
  const current = tabs.find((t) => t.id === active);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="rounded-2xl bg-white/10 border border-white/20 p-2 inline-flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 rounded-xl text-sm ${active === t.id ? "bg-white text-[#1a2a3a]" : "text-white hover:bg-white/10"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="card rounded-2xl mt-6 p-6 text-[#1a2a3a]">
        <div className="text-lg font-semibold">{current.label}</div>
        <p className="mt-2 text-[#2a3b4f]">{current.content}</p>
      </div>
    </main>
  );
}



