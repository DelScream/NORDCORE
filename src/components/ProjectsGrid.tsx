import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import styles from "./ProjectsGrid.module.css";

export function ProjectsGrid() {
  return (
    <div className={styles.list}>
      {projects.map((item) => (
        <Reveal key={item.slug} as="article">
          <Link href={`/proekty/${item.slug}`} className={styles.item}>
            <div className="media">
              <SiteImage src={item.image} alt={item.title} width={1200} height={760} />
            </div>
            <div className={styles.body}>
              <p className="mono">Проект №{item.number}</p>
              <h3>{item.title}</h3>
              <p>
                {item.region} / {item.year}
              </p>
              <ul>
                {item.results.map((result) => (
                  <li key={result.label}>
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
