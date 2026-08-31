import { SiteImage } from "@/components/SiteImage";
import { AnchorLink } from "@/components/AnchorLink";
import { ContactsBlock } from "@/components/ContactsBlock";
import { IndustryGallery } from "@/components/IndustryGallery";
import { LeadSection } from "@/components/LeadSection";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { aboutStats, site, stats } from "@/data/site";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <SiteImage
            src="/images/hero.jpg"
            alt="Промышленное оборудование в производственном цехе"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroKicker}>
            {site.name} / {site.tagline}
          </p>
          <h1 className="display">
            Инженерные решения
            <br />
            для промышленности
          </h1>
          <p className={styles.heroLead}>
            Проектируем, производим и модернизируем промышленное оборудование для
            предприятий России.
          </p>
          <div className={styles.heroActions}>
            <AnchorLink href="/#resheniya" className="btn btn--primary">
              Наши решения
            </AnchorLink>
            <AnchorLink href="/kontakty#zayavka" className="btn btn--ghost">
              Обсудить проект
            </AnchorLink>
          </div>
          <div className={styles.heroStats}>
            {stats.map((item) => (
              <div key={item.label}>
                <p className="stat-value">
                  <StatCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroMeta} aria-hidden>
          <span>DWG-01</span>
          <span>A1 / 1:50</span>
          <span>REV. 2026</span>
        </div>
      </section>

      <section className={`section section--paper ${styles.about}`} id="o-kompanii">
        <div className={`container ${styles.aboutGrid}`}>
          <Reveal>
            <p className="kicker">О компании</p>
            <h2 className="display h2">Инженерия, которая работает</h2>
            <p className="lead">
              НОРДКОР проектирует, изготавливает и сопровождает промышленное
              оборудование для предприятий, которым нужна точность, а не
              презентация. Работаем с производственными директорами, главными
              инженерами и службами закупок — от технического задания до
              регламентного сервиса.
            </p>
          </Reveal>
          <Reveal className="media" delay={2}>
            <SiteImage
              src="/images/about.jpg"
              alt="Производственный участок НОРДКОР"
              width={960}
              height={720}
            />
          </Reveal>
        </div>
        <div className="container">
          <div className={`stat-grid ${styles.aboutStats}`}>
            {aboutStats.map((item) => (
              <div className="stat-item" key={item.label}>
                <p className="stat-value">
                  <StatCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="uslugi">
        <div className="container">
          <Reveal>
            <p className="kicker">Компетенции</p>
            <h2 className="display h2">Что мы делаем</h2>
          </Reveal>
          <div className={styles.services}>
            {services.map((item, index) => (
              <Reveal key={item.slug} as="article" delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className={styles.service}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--graphite">
        <div className="container">
          <Reveal>
            <p className="kicker">Отрасли</p>
            <h2 className="display h2">Работаем не с одной сферой</h2>
            <p className="lead">
              Одно инженерное ядро — разные промышленные контуры. Линии, насосные
              группы, АСУ ТП и сервис под регламент конкретного производства.
            </p>
          </Reveal>
        </div>
        <div className={`container ${styles.industries}`}>
          <IndustryGallery />
        </div>
      </section>

      <section className="section" id="resheniya">
        <div className="container">
          <Reveal>
            <p className="kicker">Наши решения</p>
            <h2 className="display h2">Системы, которые встают в цех</h2>
          </Reveal>
          <div className={styles.solutions}>
            {solutions.map((item, index) => (
              <Reveal key={item.slug} as="article" className={styles.solution} delay={index % 2 === 0 ? 1 : 2}>
                <div className={styles.solutionCopy}>
                  <h3 className="h3">{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
                <div className={styles.solutionSpecs}>
                  {item.specs.map((spec) => (
                    <div key={spec.label}>
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactsBlock />

      <LeadSection />
    </>
  );
}
