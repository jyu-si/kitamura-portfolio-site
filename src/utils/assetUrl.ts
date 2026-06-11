export function assetUrl(path: string) {
  return new URL(path.replace(/^\/+/, ""), document.baseURI).toString();
}
