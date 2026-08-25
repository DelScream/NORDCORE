import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  kicker?: string;
  title: string;
  image: string;
  alt: string;
  children?: ReactNode;
};

export function PageHero({ kicker, title, image, alt, children }: Props) {
  return (
    <header className="page-hero">
      <div className="page-hero__bg">
        <Image src={image} alt={alt} fill sizes="100vw" priority />
      </div>
      <div className="container">
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1 className="display h2">{title}</h1>
        {children}
      </div>
    </header>
  );
}
