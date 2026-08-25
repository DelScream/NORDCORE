import { CtaBand } from "@/components/CtaBand";
import { EquipmentCatalog } from "@/components/EquipmentCatalog";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Оборудование",
  description:
    "Каталог промышленного оборудования НОРДКОР: конвейеры, автоматизация, насосные агрегаты и производственные линии.",
  path: "/oborudovanie",
});

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        kicker="Оборудование"
        title="Каталог промышленных систем"
        image="/images/warehouse.jpg"
        alt="Промышленное оборудование НОРДКОР"
      >
        <p className="lead">
          Типовые позиции и конфигурируемые комплексы. Технические данные —
          ориентир для ТЗ и закупки.
        </p>
      </PageHero>
      <section className="section">
        <div className="container">
          <EquipmentCatalog />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
