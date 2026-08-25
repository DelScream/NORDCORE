import Image from "next/image";
import Link from "next/link";
import type { EquipmentItem } from "@/data/equipment";
import styles from "./EquipmentCard.module.css";

export function EquipmentCard({ item }: { item: EquipmentItem }) {
  return (
    <article className={styles.card}>
      <Link href={`/oborudovanie/${item.slug}`} className={styles.media}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </Link>
      <div className={styles.body}>
        <h3>
          <Link href={`/oborudovanie/${item.slug}`}>{item.title}</Link>
        </h3>
        <dl>
          {item.specs.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
        <Link href={`/kontakty?model=${item.slug}#zayavka`} className="btn btn--ghost">
          Получить техническую информацию
        </Link>
      </div>
    </article>
  );
}
