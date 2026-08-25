import Image from "next/image";
import { notFound } from "next/navigation";
import { AnchorLink } from "@/components/AnchorLink";
import { PageHero } from "@/components/PageHero";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import styles from "../../inner.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.task,
    path: `/proekty/${item.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        kicker={`Проект №${item.number}`}
        title={item.title}
        image={item.image}
        alt={item.title}
      >
        <p className="tech-meta">
          <span>Клиент: {item.client}</span>
          <span>Регион: {item.region}</span>
          <span>Срок: {item.duration}</span>
        </p>
      </PageHero>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: 40, maxWidth: 860 }}>
          <div>
            <h2 className="h3">Задача</h2>
            <p style={{ marginTop: 12, color: "var(--mist)" }}>{item.task}</p>
          </div>
          <div>
            <h2 className="h3">Решение</h2>
            <p style={{ marginTop: 12, color: "var(--mist)" }}>{item.solution}</p>
          </div>
        </div>
      </section>

      <section className="section section--graphite">
        <div className="container">
          <h2 className="h3">Реализация</h2>
          <p style={{ margin: "12px 0 28px", color: "var(--mist)", maxWidth: 720 }}>
            {item.implementation}
          </p>
          <div className={styles.gallery}>
            {item.gallery.map((src, index) => (
              <div className="media" key={src}>
                <Image
                  src={src}
                  alt={`${item.title} — кадр ${index + 1}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <h2 className="display h2">Результат</h2>
          <div className="stat-grid">
            {item.results.map((result) => (
              <div className="stat-item" key={result.label}>
                <p className="stat-value">{result.value}</p>
                <p className="stat-label">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container frame" style={{ padding: 40, border: "1px solid var(--line)" }}>
          <h2 className="display h2">Нужна похожая инженерная задача?</h2>
          <AnchorLink href="/kontakty#zayavka" className="btn btn--primary">
            Обсудить проект
          </AnchorLink>
        </div>
      </section>
    </>
  );
}
