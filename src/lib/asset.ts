export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
