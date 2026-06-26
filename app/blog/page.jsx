import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { getAllPosts } from '@/lib/blog';
import '../styles/blog.css';
import Breadcrumbs from '@/components/Breadcrumbs';

import itMessages from '@/messages/it.json';
import enMessages from '@/messages/en.json';

export const metadata = {
  title: "Blog — Consigli di viaggio sui Colli Euganei | Oasi Dolce Vita",
  description:
    "Scopri i Colli Euganei, Lozzo Atestino e i dintorni: terme di Abano e Montegrotto, borghi da visitare, cantine, esperienze enogastronomiche e consigli per la tua vacanza in villa con piscina a Oasi Dolce Vita.",
  openGraph: {
    title: "Blog — Consigli di viaggio sui Colli Euganei | Oasi Dolce Vita",
    description:
      "Scopri i Colli Euganei: terme, borghi, cantine e consigli di viaggio. Idee per la tua vacanza in villa con piscina a Oasi Dolce Vita.",
  },
};

function getMessages(locale) {
  return locale === 'en' ? enMessages : itMessages;
}

export default async function BlogPage({ searchParams }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'it';
  const msg = getMessages(locale).blog;

  const filter = searchParams?.filter || 'tutti';
  const allPosts = getAllPosts(locale);

  const posts = filter === 'recenti'
    ? allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2)
    : allPosts;

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
      <Breadcrumbs hidden items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]} />

      <section className="blog-archive">
        <div className="container">
          <div className="blog-filters">
            <Link
              href="/blog"
              className={`filter-btn ${filter === 'tutti' ? 'active' : ''}`}
            >
              {msg.all}
            </Link>
            <Link
              href="/blog?filter=recenti"
              className={`filter-btn ${filter === 'recenti' ? 'active' : ''}`}
            >
              {msg.recent}
            </Link>
          </div>

          <div className="blog-grid">
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card-img">
                  <Image src={post.image} alt={post.title} width={600} height={400} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">
                      {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'it-IT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="blog-card-link">{msg.readMore}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
