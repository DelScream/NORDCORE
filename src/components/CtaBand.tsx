import { AnchorLink } from "@/components/AnchorLink";
import styles from "./CtaBand.module.css";

type Props = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Нужна похожая инженерная задача?",
  text = "Опишите производство и ограничение по сроку — подготовим техническое предложение.",
}: Props) {
  return (
    <section className={`section ${styles.band}`}>
      <div className={`container ${styles.inner} frame`}>
        <span className="frame-tr" />
        <span className="frame-bl" />
        <div>
          <h2 className="display h2">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <AnchorLink href="/kontakty#zayavka" className="btn btn--primary">
          Обсудить проект
        </AnchorLink>
      </div>
    </section>
  );
}
