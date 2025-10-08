"use client";

import { useMemo, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Scenario",
    text:
      "In a remote village, a medieval-themed park features a tall watch tower as part of its attraction. At night, the watch tower must be illuminated for visibility and safety, but to conserve energy, it should only light up when it's dark and motion is detected nearby.",
  },
  {
    id: 2,
    title: "Task",
    text:
      "Your task is to build an automated lighting system for the tower using an Arduino.",
  },
  {
    id: 3,
    title: "Materials You Would Need:",
    list: [
      "1 x Arduino Uno",
      "1 x PIR Motion Sensor",
      "1 x LDR (Light Dependent Resistor)",
      "1 x 10kΩ resistor (for LDR voltage divider)",
      "1 x LED or small lamp module (representing the tower light)",
      "Jumper wires",
      "Breadboard",
    ],
  },
];

export default function LightTheTowerQuest() {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  const canPrev = index > 0;
  const canNext = index < steps.length - 1;

  const backgroundClass = useMemo(
    () =>
      "relative min-h-[70vh] bg-[url('/quest-bg-placeholder.jpg')] bg-cover bg-center flex items-center justify-center",
    []
  );

  return (
    <main className="mx-auto max-w-none">
      <section className={backgroundClass}>
        <div className="relative max-w-2xl mx-4 md:mx-auto w-full">
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#ffb703] border-4 border-white shadow-lg z-10"></div>

          {/* Modal Card */}
          <div className="card relative z-20 rounded-2xl p-6 md:p-8 text-center">
          {step.title && (
            <h2 className="text-lg md:text-xl font-bold text-[#1a2a3a] mb-3">{step.title}</h2>
          )}
          {step.text && (
            <p className="text-[#2a3b4f] leading-7">
              {step.text}
            </p>
          )}
          {step.list && (
            <ul className="text-left text-[#2a3b4f] mt-2 space-y-2">
              {step.list.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-4 h-4 rounded bg-[#2f7bd1]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              disabled={!canPrev}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className={
                "px-4 py-2 rounded-md text-white text-sm " +
                (canPrev ? "bg-[#e23b2f] hover:brightness-110" : "bg-[#e23b2f]/40 cursor-not-allowed")
              }
            >
              {index === 0 ? "" : "Previous"}
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))}
              className="px-5 py-2 rounded-md bg-[#2f7bd1] text-white text-sm hover:bg-[#2a6fbe]"
            >
              {index === steps.length - 1 ? "Finish" : "Proceed"}
            </button>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}


