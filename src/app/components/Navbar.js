"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/quests", label: "Quests" },
  { href: "/skills", label: "Skills" },
  { href: "/forums", label: "Forums" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Account" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="text-white font-semibold tracking-wide">MAKER</div>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "px-3 py-1.5 rounded-full text-sm transition-colors " +
                  (isActive
                    ? "bg-white text-sky-700"
                    : "text-white/90 hover:text-white hover:bg-white/10")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          {/* Placeholder for mobile menu if needed later */}
        </div>
      </div>
    </header>
  );
}


