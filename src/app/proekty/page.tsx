import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Проекты",
  description:
    "Кейсы внедрения НОРДКОР: модернизация линий, автоматизация участков, насосные группы и АСУ ТП на предприятиях России.",
  path: "/proekty",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Проекты"
        title="Кейсы внедрения"
        image="/images/assembly.jpg"
        alt="Производственная линия после внедрения НОРДКОР"
      >
        <p className="lead">
          Реализованные контуры: от точечной модернизации до комплектной поставки.
          Каждый кейс — задача, решение и измеримый результат.
        </p>
      </PageHero>
      <section className="section">
        <div className="container">
          <ProjectsGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
