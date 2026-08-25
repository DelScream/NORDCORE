"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./LeadForm.module.css";

const options = [
  "Проектирование",
  "Производство оборудования",
  "Модернизация линии",
  "Автоматизация",
  "Монтаж и пусконаладка",
  "Сервис и обслуживание",
  "Другое",
];

function LeadFormFields() {
  const searchParams = useSearchParams();
  const model = searchParams?.get("model");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const agree = data.get("agree");

    if (!name || !company || !contact || !agree) {
      setError("Заполните обязательные поля и подтвердите согласие.");
      return;
    }

    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <p className="kicker">Заявка принята</p>
        <p className={styles.successText}>
          Спасибо. В рамках концепта заявка не отправляется на сервер — форма
          показывает рабочий сценарий интерфейса.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {model ? (
        <p className={styles.model}>Запрос документации: {model}</p>
      ) : null}
      <label>
        <span>Имя</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>Компания</span>
        <input name="company" autoComplete="organization" required />
      </label>
      <label>
        <span>Телефон / Email</span>
        <input name="contact" autoComplete="tel" required />
      </label>
      <label>
        <span>Что необходимо сделать?</span>
        <select name="task" defaultValue={options[0]}>
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className={styles.check}>
        <input type="checkbox" name="agree" />
        <span>Согласен на обработку персональных данных</span>
      </label>
      {error ? <p className={styles.error}>{error}</p> : null}
      <button className="btn btn--primary" type="submit">
        Отправить заявку <span className="arrow">→</span>
      </button>
    </form>
  );
}

export function LeadForm() {
  return (
    <Suspense fallback={<div className={styles.form} />}>
      <LeadFormFields />
    </Suspense>
  );
}
