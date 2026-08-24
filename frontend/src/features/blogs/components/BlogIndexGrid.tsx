import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BlogCard } from "@/features/blogs/components/BlogCard";
import { getBlogs } from "@/features/blogs/repositories/blogsRepository";

export function BlogIndexGrid() {
  const blogs = getBlogs();

  return (
    <Section className="pt-0">
      <PageContainer>
        <div className="grid gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <Reveal key={blog.slug} delay={0.06 * index} distance={18}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
