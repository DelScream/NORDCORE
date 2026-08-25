"use client";

import { useEffect, useState } from "react";
import { developer } from "@/data/site";
import styles from "./PortfolioPopup.module.css";

export function PortfolioPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={() => setOpen(false)}>
      <div
        className={styles.sheet}
        role="dialog"
        aria-labelledby="portfolio-popup-title"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="kicker" id="portfolio-popup-title">
          Портфолио / Concept
        </p>
        <p className={styles.text}>
          Этот сайт создан в рамках портфолио веб-разработчика и является
          концептуальным проектом. Компания НОРДКОР является вымышленной.
        </p>
        <p className={styles.dev}>
          Сделано в рамках портфолио:
          <strong>
            {developer.name} {developer.handle}
          </strong>
        </p>
        <div className={styles.links}>
          {developer.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <button className="btn btn--primary" onClick={() => setOpen(false)}>
          Понятно <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}
