import { departments, site } from "@/data/site";
import styles from "@/app/inner.module.css";

export function ContactsBlock() {
  return (
    <section className="section" id="kontakty">
      <div className={`container ${styles.contacts}`}>
        <div>
          <p className="kicker">Офис</p>
          <h2 className="display h2">НОРДКОР</h2>
          <p className="lead">{site.tagline}</p>
          <div className={styles.facts}>
            <div>
              <span>Телефон</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <span>Адрес офиса</span>
              <strong>{site.address}</strong>
            </div>
          </div>
          <div className={styles.depts}>
            {departments.map((item) => (
              <article key={item.name}>
                <h3 className="h3" style={{ fontSize: 18 }}>
                  {item.name}
                </h3>
                <p>
                  <a href={`tel:${item.phone.replace(/[^\d+]/g, "")}`}>{item.phone}</a>
                  <br />
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            title="Карта офиса НОРДКОР в Москве"
            src="https://www.openstreetmap.org/export/embed.html?bbox=37.58%2C55.73%2C37.66%2C55.77&layer=mapnik&marker=55.75%2C37.62"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
