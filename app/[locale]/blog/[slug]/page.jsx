import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import '../../../styles/blog.css';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

import itMessages from '@/messages/it.json';
import enMessages from '@/messages/en.json';
import deMessages from '@/messages/de.json';

function getMessages(locale) {
  if (locale === 'en') return enMessages;
  if (locale === 'de') return deMessages;
  return itMessages;
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ['it', 'en', 'de'];
  return locales.flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params;
  const msg = getMessages(locale).blog;
  const p = `/${locale}`;

  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <section className="blog-hero">
        <div className="container blog-hero-content">
          <div className="blog-hero-card">
            <h1>{msg.title}</h1>
            <a href={p} className="breadcrumb-btn">{msg.breadcrumb}</a>
          </div>
        </div>
      </section>
      <Breadcrumbs hidden items={[
        { name: 'Home', href: p },
        { name: 'Blog', href: `${p}/blog` },
        { name: post.title },
      ]} />

      <section className="blog-post">
        <div className="container">
          <div className="blog-post-wrapper">
            <div className="blog-post-header">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span>{new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'de' ? 'de-DE' : 'it-IT', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}</span>
                <span>{msg.by} {post.author}</span>
              </div>
            </div>
            <div className="blog-post-img">
              <Image src={post.image} alt={post.title} width={600} height={400} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 500px" />
            </div>
            <div
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <div className="blog-post-footer">
              <a href={`${p}/blog`} className="blog-back-link">{msg.backToBlog}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
