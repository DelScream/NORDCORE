"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <section className="section">
      <div className="container">
        <p className="lead">Перенаправление…</p>
      </div>
    </section>
  );
}
