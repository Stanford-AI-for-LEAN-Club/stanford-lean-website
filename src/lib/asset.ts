// Prefix a /-rooted public asset path with the configured basePath so it
// resolves correctly when the site is served under a subpath (e.g. GitHub
// Pages at /stanford-lean-website/). next/image with unoptimized=true does
// not auto-prepend basePath/assetPrefix to the src attribute.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
