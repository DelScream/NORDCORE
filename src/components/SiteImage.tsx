import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/asset";

export function SiteImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <Image src={resolved} {...props} />;
}
