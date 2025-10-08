"use client";

import Link from "next/link";
import { useState } from "react";

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <div className="rounded-t-2xl bg-[#1463bf] text-white px-6 py-4 font-semibold">{title}</div>
      <div className="card rounded-b-2xl px-4 md:px-6 py-4 bg-white">
        {children}
      </div>
    </section>
  );
}

function TopicRow({ title, subtitle, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block"
    >
      <div className="flex items-start gap-4 py-4 border-b last:border-b-0">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${hovered ? "bg-[#1463bf] text-white" : "bg-[#eef3fb] text-[#1463bf]"}`}>
          💬
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#1a2a3a]">{title}</div>
          <div className="text-xs text-[#6a7b8d] mt-1">{subtitle}</div>
        </div>
      </div>
    </Link>
  );
}

export default function ForumsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-white">
      <Section title="Hello Julia!">
        <TopicRow
          title="Introduce Yourself"
          subtitle="Welcome to Maker, now tell us about yourself and how you found us."
          href="/forums/thread/introduce-yourself"
        />
        <TopicRow
          title="General Discussion"
          subtitle="Hobby Corner, Member Milestone, Poll Stations"
          href="/forums/thread/general-discussion"
        />
      </Section>

      <Section title="Discussion on ARDUINO1">
        <TopicRow
          title="What did you enjoy the most?"
          subtitle="What Part of ARDUINO1 did you enjoy the most"
          href="/forums/thread/enjoy-the-most"
        />
        <TopicRow
          title="What was Challenging?"
          subtitle="What was the hardest part of ARDUINO1"
          href="/forums/thread/what-was-challenging"
        />
      </Section>
    </main>
  );
}


