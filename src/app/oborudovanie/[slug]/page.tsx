import Image from "next/image";
import { notFound } from "next/navigation";
import { AnchorLink } from "@/components/AnchorLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { equipment, getEquipment } from "@/data/equipment";
import { pageMetadata } from "@/lib/seo";
import styles from "../../inner.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipment.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.description,
    path: `/oborudovanie/${item.slug}`,
  });
}

export default async function EquipmentItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        kicker="Оборудование"
        title={item.title}
        image={item.image}
        alt={item.title}
      />
      <section className="section">
        <div className={`container ${styles.detail}`}>
          <div className="media">
            <Image src={item.image} alt={item.title} width={960} height={680} />
          </div>
          <div>
            <p>{item.description}</p>
            <div className={styles.facts} style={{ overflowX: "auto" }}>
              {item.specs.map((spec) => (
                <div key={spec.label}>
                  <span className="mono">{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>
            <AnchorLink href={`/kontakty?model=${item.slug}#zayavka`} className="btn btn--primary">
              Получить техническую информацию
            </AnchorLink>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
