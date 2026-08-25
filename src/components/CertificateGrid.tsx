"use client";

import { useState } from "react";
import { certificates } from "@/data/about";
import styles from "./CertificateGrid.module.css";

export function CertificateGrid() {
  const [active, setActive] = useState<(typeof certificates)[number] | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {certificates.map((item) => (
          <button
            key={item.slug}
            className={styles.card}
            onClick={() => setActive(item)}
            type="button"
          >
            <article className={styles.doc}>
              <p className={styles.meta}>NORDCORE · {item.year}</p>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.type}>{item.type}</p>
              <span className={styles.seal} aria-hidden />
            </article>
          </button>
        ))}
      </div>

      {active ? (
        <div className={styles.overlay} onClick={() => setActive(null)} role="presentation">
          <div
            className={styles.viewer}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="kicker">Документ</p>
            <h2 className="display">{active.title}</h2>
            <p>{active.type}</p>
            <p className={styles.note}>
              Концептуальный образец документа. Реквизиты и печати приведены
              условно.
            </p>
            <div className={styles.preview}>
              <p>НОРДКОР / NORDCORE</p>
              <strong>{active.title}</strong>
              <span>{active.year}</span>
            </div>
            <button className="btn btn--primary" onClick={() => setActive(null)}>
              Закрыть
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
