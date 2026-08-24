import { blogs } from "@/features/blogs/data/blogs";

export function getBlogs() {
  return blogs;
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
