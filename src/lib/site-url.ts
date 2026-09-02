const LOCAL_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate) return null;

  const valueWithProtocol = /^https?:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    const url = new URL(valueWithProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function getSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const siteUrl = normalizeSiteUrl(candidate);
    if (siteUrl) return siteUrl;
  }

  return LOCAL_SITE_URL;
}
