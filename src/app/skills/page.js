"use client";

import { useState } from "react";
import Modal from "../components/Modal";

function SkillCard({ title }) {
  const [openCert, setOpenCert] = useState(false);
  const [openBadge, setOpenBadge] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card rounded-2xl p-6 text-[#1a2a3a]">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-[#0f5fb0] text-white flex items-center justify-center">
          📡
        </div>
        <div className="flex-1">
          <div className="text-[11px] tracking-wide text-[#6a7b8d]">ARDUINO1</div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="mt-2 h-2 w-40 bg-black rounded-full"></div>
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-[#e9edf3] max-w-[520px]"></div>
            <div className="h-3 rounded-full bg-[#e9edf3] max-w-[520px]"></div>
            <div className="h-3 rounded-full bg-[#e9edf3] max-w-[420px]"></div>
            <div className="text-xs text-[#6a7b8d] pt-1">Event Lorem Ipsum</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => setOpenCert(true)} className="px-4 py-2 rounded-md bg-[#d3d7de] text-[#1a2a3a] text-xs hover:bg-[#c7ccd6]">View Certificate</button>
          <button onClick={() => setOpenBadge(true)} className="px-4 py-2 rounded-md bg-[#d3d7de] text-[#1a2a3a] text-xs hover:bg-[#c7ccd6]">View Badge</button>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={() => setExpanded((v) => !v)} className="text-sm text-[#1463bf]">{expanded ? "Hide Details" : "Show Details"}</button>
        {expanded && (
          <div className="mt-3 text-sm text-[#2a3b4f]">
            This course covered basics of Arduino programming, digital/analog IO, and sensor integration.
          </div>
        )}
      </div>

      <Modal open={openCert} onClose={() => setOpenCert(false)} title="Certificate">
        Add your certificate image or details here.
      </Modal>
      <Modal open={openBadge} onClose={() => setOpenBadge(false)} title="Badge">
        Add your badge image or details here.
      </Modal>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-white">
      <div className="space-y-6">
        <SkillCard title="Light The Tower" />
        <SkillCard title="Light The Tower" />
      </div>
    </main>
  );
}



