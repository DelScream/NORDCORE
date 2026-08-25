import { LeadForm } from "@/components/LeadForm";
import styles from "./LeadSection.module.css";

export function LeadSection() {
  return (
    <section className={`section ${styles.cta}`} id="zayavka">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="kicker">Заявка</p>
          <h2 className="display h2">Расскажите о задаче</h2>
          <p className="lead">
            Коротко опишите производство и то, что нужно изменить. Инженер
            свяжется с вами, чтобы уточнить исходные данные.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
