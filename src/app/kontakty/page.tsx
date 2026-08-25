import { ContactsBlock } from "@/components/ContactsBlock";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Контакты и заявка",
  description:
    "Контакты НОРДКОР и форма заявки: отдел продаж, технический отдел, сервис 24/7. Опишите задачу — инженер свяжется с вами.",
  path: "/kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <PageHero
        kicker="Контакты"
        title="Офис, отделы и заявка"
        image="/images/control.jpg"
        alt="Инженерный контур управления НОРДКОР"
      >
        <p className="lead">
          Телефоны отделов, адрес офиса и форма заявки. Если уже есть модель
          оборудования — укажите её в запросе, подготовим техническую информацию.
        </p>
      </PageHero>
      <ContactsBlock />
      <LeadSection />
    </>
  );
}
