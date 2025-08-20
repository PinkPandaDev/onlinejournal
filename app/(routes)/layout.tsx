import Link from 'next/link';

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/inbox', label: 'Inbox' },
    { href: '/daily', label: 'Daily' },
    { href: '/monthly', label: 'Monthly' },
    { href: '/future', label: 'Future' },
    { href: '/review', label: 'Review' },
    { href: '/journal', label: 'Journal' },
    { href: '/habits', label: 'Habits' },
    { href: '/goals', label: 'Goals' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <nav className="border-b bg-white/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex gap-4 p-3 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-black">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="max-w-5xl mx-auto w-full">{children}</main>
    </div>
  );
}

