"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function ThreadPage() {
  const params = useParams();
  const [messages, setMessages] = useState([
    { id: 1, author: "Caroline", text: "Welcome to the thread!" },
    { id: 2, author: "Justin", text: "Excited to share thoughts." },
  ]);
  const [draft, setDraft] = useState("");

  function post() {
    if (!draft.trim()) return;
    setMessages((m) => [
      ...m,
      { id: Date.now(), author: "You", text: draft.trim() },
    ]);
    setDraft("");
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 text-white">
      <div className="rounded-t-2xl bg-[#1463bf] px-6 py-4 font-semibold">{decodeURIComponent(params.slug)}</div>
      <div className="card rounded-b-2xl bg-white p-6 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#d9e7ff]"></div>
            <div>
              <div className="text-sm font-semibold text-[#1a2a3a]">{m.author}</div>
              <div className="text-sm text-[#2a3b4f]">{m.text}</div>
            </div>
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 rounded-md border border-[#d9e7ff] px-3 py-2 text-[#1a2a3a] outline-none focus:ring-2 focus:ring-[#1463bf]"
          />
          <button onClick={post} className="px-4 py-2 rounded-md bg-[#1463bf] text-white">Post</button>
        </div>
      </div>
    </main>
  );
}


