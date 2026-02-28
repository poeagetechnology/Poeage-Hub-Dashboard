import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.poeagehub.in";

export default function SEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
}) {
  const fullTitle = title
    ? `${title} | Poeage Hub`
    : "Poeage Hub | Multi-Vendor Shopping Platform";

  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
    
  );
}