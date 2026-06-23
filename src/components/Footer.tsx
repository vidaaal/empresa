import { site, nav } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="headline text-2xl">{site.mark}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{site.line}</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="link-line text-[var(--muted)] hover:text-[var(--fg)]">
              {n.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-[var(--muted)]">© {year} {site.name}</p>
      </div>
    </footer>
  );
}
