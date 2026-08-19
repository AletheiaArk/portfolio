"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="card sidebar" aria-label="Primary">
      <p className="nav-label">GENERAL</p>
      <ul className="nav-list">
        {nav.map((n) => {
          const NavIcon = Icon[n.icon];
          const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
          return (
            <li key={n.key}>
              <Link
                href={n.href}
                className={"nav-item" + (active ? " active" : "")}
                aria-current={active ? "page" : undefined}
                aria-label={n.label}
              >
                <NavIcon aria-hidden="true" />
                {/* Both labels ship; CSS picks one. aria-label above carries
                    the real name, so the swap is purely visual. */}
                <span className="nav-text" aria-hidden="true">{n.label}</span>
                <span className="nav-short" aria-hidden="true">{n.short || n.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
