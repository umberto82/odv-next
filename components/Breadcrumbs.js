import JsonLd from "./JsonLd";

export default function Breadcrumbs({ items, className, hidden }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://oasidolcevita.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href ? `${siteUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      {!hidden && (
        <nav aria-label="Breadcrumb" className={className}>
          <ol className="breadcrumbs">
            {items.map((item, i) => (
              <li key={i}>
                {item.href ? (
                  <a href={item.href}>{item.name}</a>
                ) : (
                  <span>{item.name}</span>
                )}
                {i < items.length - 1 && <span className="bc-sep">›</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
