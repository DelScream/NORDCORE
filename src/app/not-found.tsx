import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "70vh" }}>
      <div className="container">
        <p className="kicker">Ошибка 404</p>
        <h1 className="display h2">Страница не найдена</h1>
        <p className="lead">Документ отсутствует в архиве сайта.</p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: 24 }}>
          На главную
        </Link>
      </div>
    </section>
  );
}
