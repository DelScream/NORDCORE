import { SiteImage } from "@/components/SiteImage";
import { industries } from "@/data/industries";
import { Reveal } from "@/components/Reveal";
import styles from "./IndustryGallery.module.css";

export function IndustryGallery() {
  return (
    <div className={styles.row}>
      {industries.map((item, index) => (
        <Reveal key={item.slug} className={styles.card} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
          <div className={styles.media}>
            <SiteImage
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 700px) 80vw, 320px"
            />
          </div>
          <div className={styles.body}>
            <p className={styles.index}>0{index + 1}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
