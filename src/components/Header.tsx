"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnchorLink } from "@/components/AnchorLink";
import { nav, site } from "@/data/site";
import styles from "./Header.module.css";

function subscribeScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollCompact() {
  return window.scrollY > 24;
}

function getScrollCompactServer() {
  return false;
}

export function Header() {
  const compact = useSyncExternalStore(
    subscribeScroll,
    getScrollCompact,
    getScrollCompactServer,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${compact ? styles.compact : ""}`}>
      <div className={`container ${styles.bar}`}>
        <AnchorLink href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden>
            НК
          </span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.nameLatin}</small>
          </span>
        </AnchorLink>

        <nav className={styles.desktop} aria-label="Основная навигация">
          {nav.map((item) => (
            <AnchorLink key={item.label} href={item.href}>
              {item.label}
            </AnchorLink>
          ))}
        </nav>

        <AnchorLink href="/kontakty#zayavka" className={`btn btn--primary ${styles.cta}`}>
          Обсудить проект
        </AnchorLink>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        <nav aria-label="Мобильная навигация">
          {nav.map((item) => (
            <AnchorLink key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </AnchorLink>
          ))}
        </nav>
        <AnchorLink href="/kontakty#zayavka" className="btn btn--primary" onClick={() => setOpen(false)}>
          Обсудить проект
        </AnchorLink>
      </div>
    </header>
  );
}
