import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://oasidolcevita.com";

  const locales = ["it", "en", "de"];
  const entries = [];

  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "galleria", priority: 0.8, changeFrequency: "monthly" },
    { path: "luoghi-di-interesse", priority: 0.8, changeFrequency: "monthly" },
    { path: "blog", priority: 0.9, changeFrequency: "weekly" },
    { path: "contatti", priority: 0.6, changeFrequency: "yearly" },
    { path: "disponibilita", priority: 0.7, changeFrequency: "weekly" },
    { path: "privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  for (const locale of locales) {
    for (const page of staticPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${page.path ? `/${page.path}` : ""}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }

    const posts = getAllPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
