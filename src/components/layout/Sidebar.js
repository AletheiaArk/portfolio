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
              >
                <NavIcon aria-hidden="true" />
                <span>{n.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
