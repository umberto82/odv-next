import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import '../../styles/blog.css';

import itMessages from '@/messages/it.json';
import enMessages from '@/messages/en.json';

function getMessages(locale) {
  return locale === 'en' ? enMessages : itMessages;
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'it';
  const msg = getMessages(locale).blog;

  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <main>
      <section className="blog-hero">
        <div className="container blog-hero-content">
          <div className="blog-hero-card">
            <h1>{msg.title}</h1>
            <a href="/" className="breadcrumb-btn">{msg.breadcrumb}</a>
          </div>
        </div>
      </section>

      <section className="blog-post">
        <div className="container">
          <div className="blog-post-wrapper">
            <div className="blog-post-header">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span>{new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'it-IT', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}</span>
                <span>{msg.by} {post.author}</span>
              </div>
            </div>
            <div className="blog-post-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <div className="blog-post-footer">
              <a href="/blog" className="blog-back-link">{msg.backToBlog}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
