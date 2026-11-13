import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { RichTextRenderer } from '@/components/Blog/RichTextRenderer';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let strapiRes;
  const parts = slug.split('--');
  
  if (parts.length > 1) {
    const documentId = parts[parts.length - 1];
    strapiRes = await blogService.getBlogByDocumentId(documentId);
  } else {
    strapiRes = await blogService.getBlogBySlug(slug);
  }
  
  let blog: BlogPost | undefined = strapiRes?.data?.[0];

  if (!blog) {
    return {
      title: 'Blog Not Found | LIVENGAGE',
    };
  }

  return {
    title: `${blog.title} | LIVENGAGE`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  
  let strapiRes;
  const parts = slug.split('--');
  
  if (parts.length > 1) {
    const documentId = parts[parts.length - 1];
    strapiRes = await blogService.getBlogByDocumentId(documentId);
  } else {
    strapiRes = await blogService.getBlogBySlug(slug);
  }
  
  let blog: BlogPost | undefined = strapiRes?.data?.[0];

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="px-6 md:px-12 max-w-[1000px] mx-auto">
        
        <Link href="/blogs" className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors mb-12 font-body font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blogs
        </Link>
        
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 font-body text-on-surface-variant">
            {blog.publishedDate && (
              <time dateTime={blog.publishedDate}>
                {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            {blog.author && (
              <>
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{blog.author}</span>
              </>
            )}
          </div>
          
          <h1 className="font-display-lg text-4xl md:text-6xl leading-tight text-on-surface mb-8">
            {blog.title}
          </h1>
          
          {blog.coverImage && (
            <div className="relative rounded-3xl overflow-hidden bg-surface-container mt-12 border border-outline/10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={getMediaUrl(blog.coverImage.url) || ''} 
                alt={blog.coverImage.alternativeText || blog.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <article className="prose-container bg-surface-container-lowest p-6 md:p-12 rounded-[40px] border border-outline/10 shadow-sm">
          <RichTextRenderer content={blog.content} />
        </article>
        
      </div>
    </main>
  );
}
