import { AnchorLink } from "@/components/AnchorLink";
import { developer, footerNav, site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.tag}>{site.positioning}.</p>
        </div>

        <div>
          <p className={styles.colTitle}>Компания</p>
          <ul>
            {footerNav.company.map((item) => (
              <li key={item.label}>
                <AnchorLink href={item.href}>{item.label}</AnchorLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Решения</p>
          <ul>
            {footerNav.solutions.map((item) => (
              <li key={item.label}>
                <AnchorLink href={item.href}>{item.label}</AnchorLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Контакты</p>
          <ul>
            <li>
              <AnchorLink href="/kontakty#zayavka">Оставить заявку</AnchorLink>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 {site.name}</p>
        <p className={styles.dev}>
          Сделано в рамках портфолио:
          <span>
            {developer.name} {developer.handle}
          </span>
          <span className={styles.links}>
            {developer.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </span>
        </p>
      </div>
    </footer>
  );
}
