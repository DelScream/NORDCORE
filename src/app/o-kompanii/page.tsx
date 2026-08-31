import { SiteImage } from "@/components/SiteImage";
import { CertificateGrid } from "@/components/CertificateGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { capacities, partners, team, timeline } from "@/data/about";
import { cities } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata = pageMetadata({
  title: "О компании",
  description:
    "История, миссия, производственные мощности, команда и география НОРДКОР.",
  path: "/o-kompanii",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="О компании"
        title="Инженерия промышленного масштаба"
        image="/images/workshop.jpg"
        alt="Производственные мощности НОРДКОР"
      >
        <p className="lead">
          Проектируем, производим и обслуживаем оборудование для предприятий,
          которым нужна предсказуемая работа цеха.
        </p>
      </PageHero>

      <section className="section section--paper">
        <div className={`container ${styles.split}`}>
          <Reveal>
            <p className="kicker">Миссия</p>
            <h2 className="display h2">Точность. Срок. Контур.</h2>
            <p className="lead">
              Мы не продаём «цифровую трансформацию». Мы встраиваем техническое
              решение в действующее производство: с документацией, монтажом,
              обучением смены и сервисом 24/7.
            </p>
          </Reveal>
          <Reveal className="media" delay={2}>
            <SiteImage
              src="/images/precision.jpg"
              alt="Механообработка на производственной площадке"
              width={900}
              height={680}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">История</p>
          <h2 className="display h2">Таймлайн развития</h2>
          <ol className={styles.timeline}>
            {timeline.map((item) => (
              <li key={item.year}>
                <time>{item.year}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--graphite">
        <div className="container">
          <p className="kicker">Мощности</p>
          <h2 className="display h2">Собственное производство</h2>
          <div className="stat-grid">
            {capacities.map((item) => (
              <div className="stat-item" key={item.label}>
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="komanda">
        <div className="container">
          <p className="kicker">Команда</p>
          <h2 className="display h2">Инженерный состав</h2>
          <div className={styles.team}>
            {team.map((person) => (
              <article key={person.name}>
                <p className="mono">{person.years}</p>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="geografiya">
        <div className="container">
          <p className="kicker">География</p>
          <h2 className="display h2">35+ регионов</h2>
          <p className="lead">Работаем с предприятиями по всей России.</p>
          <ul className={styles.cities}>
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="partnery">
        <div className="container">
          <p className="kicker">Партнёры</p>
          <h2 className="display h2">Промышленная кооперация</h2>
          <ul className={styles.partners}>
            {partners.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--graphite" id="sertifikaty">
        <div className="container">
          <p className="kicker">Документы</p>
          <h2 className="display h2">Сертификаты</h2>
          <CertificateGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
