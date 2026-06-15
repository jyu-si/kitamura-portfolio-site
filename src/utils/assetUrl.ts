export function assetUrl(path: string) {
  if (/^(?:https?:|data:|blob:)/.test(path)) {
    return path;
  }

  return new URL(path.replace(/^\/+/, ""), document.baseURI).toString();
}
