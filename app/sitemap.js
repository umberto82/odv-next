import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://oasidolcevita.com";

  const posts = getAllPosts("it");

  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/galleria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/luoghi-di-interesse`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/disponibilita`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogPosts = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
