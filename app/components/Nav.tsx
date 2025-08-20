"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/inbox", label: "Inbox" },
  { href: "/daily", label: "Daily" },
  { href: "/monthly", label: "Monthly" },
  { href: "/future", label: "Future" },
  { href: "/review", label: "Review" },
  { href: "/journal", label: "Journal" },
  { href: "/habits", label: "Habits" },
  { href: "/goals", label: "Goals" },
  { href: "/settings", label: "Settings" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-white/50 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex gap-4 p-3 text-sm">
        {navLinks.map((l) => {
          const isActive = pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={isActive ? "text-black" : "text-gray-700 hover:text-black"}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

