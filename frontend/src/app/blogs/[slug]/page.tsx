import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailBody } from "@/features/blogs/components/BlogDetailBody";
import { BlogDetailHero } from "@/features/blogs/components/BlogDetailHero";
import {
  getBlogBySlug,
  getBlogs,
} from "@/features/blogs/repositories/blogsRepository";

export function generateStaticParams() {
  return getBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog not found | DevIyke Labs",
    };
  }

  return {
    title: `${blog.title} | Blogs | DevIyke Labs`,
    description: blog.summary,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main id="main-content" className="flex-1">
      <BlogDetailHero blog={blog} />
      <BlogDetailBody blog={blog} />
    </main>
  );
}
