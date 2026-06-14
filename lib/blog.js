import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'content', 'blog');

function getDir(locale) {
  return locale === 'en' ? path.join(blogDir, 'en') : blogDir;
}

export function getAllPosts(locale = 'it') {
  const dir = getDir(locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      return {
        title: data.title,
        date: data.date,
        author: data.author,
        image: data.image,
        excerpt: data.excerpt,
        slug: data.slug,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getPostBySlug(slug, locale = 'it') {
  const dir = getDir(locale);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(dir, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    if (data.slug === slug) {
      return {
        title: data.title,
        date: data.date,
        author: data.author,
        image: data.image,
        slug: data.slug,
        content,
      };
    }
  }
  return null;
}

export function getAllSlugs() {
  const dirs = [blogDir, path.join(blogDir, 'en')];
  const slugs = [];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      if (!slugs.includes(data.slug)) slugs.push(data.slug);
    }
  }
  return slugs;
}
