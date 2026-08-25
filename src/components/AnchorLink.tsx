"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type MouseEvent, type ReactNode } from "react";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => scrollToId(id), 40);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

function normalizePath(pathname: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  let path = pathname;
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || "/";
  }
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function AnchorLink({ href, children, className, onClick }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const targetPath = (href.slice(0, hashIndex) || "/").split("?")[0] || "/";
      const hash = href.slice(hashIndex + 1);
      if (normalizePath(window.location.pathname) === normalizePath(targetPath)) {
        event.preventDefault();
        const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
        window.history.pushState(null, "", `${base}${href}`);
        scrollToId(hash);
      }
    }
    onClick?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
