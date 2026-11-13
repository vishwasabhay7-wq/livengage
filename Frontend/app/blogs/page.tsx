import { Metadata } from 'next';
import Link from 'next/link';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

const getBlogUrl = (blog: BlogPost) => {
  const titleSlug = (blog.title || 'post')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `/blogs/${titleSlug}--${blog.documentId}`;
};

export const revalidate = 60;
export const metadata: Metadata = {
  title: 'Blog | LIVENGAGE',
  description: 'Insights, news, and stories from the LIVENGAGE team.',
};

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Math.max(1, parseInt(resolvedSearchParams.page || '1', 10));
  const PAGE_SIZE = 9;

  const strapiRes = await blogService.getBlogs(currentPage, PAGE_SIZE);
  const realBlogs: BlogPost[] = strapiRes?.data || [];
  
  const allBlogs: BlogPost[] = realBlogs;
  const totalBlogs = allBlogs.length;
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  // Pagination logic:
  // Page 1: 1 Featured Blog + 8 Regular Blogs = 9 items
  // Page 2+: 9 Regular Blogs
  let featuredBlog: BlogPost | null = null;
  let regularBlogs: BlogPost[] = [];

  if (currentPage === 1) {
    featuredBlog = allBlogs[0] || null;
    regularBlogs = allBlogs.slice(1, PAGE_SIZE);
  } else {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    regularBlogs = allBlogs.slice(startIndex, endIndex);
  }

  return (
    <main className="min-h-screen relative overflow-hidden mesh-gradient">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left relative z-10">
          <h1 className="font-display-md text-4xl md:text-6xl leading-tight text-on-surface mb-4 tracking-tight uppercase">
            LIVENGAGE <span className="text-primary italic">// Insights</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl">
            Expert advice, industry news, and actionable strategies to help you scale your live-streaming career and grow your agency.
          </p>
        </div>

        {totalBlogs === 0 ? (
          <div className="py-24 text-center border border-outline/10 rounded-[32px] bg-surface-container-lowest">
            <h2 className="font-display-md text-3xl text-on-surface mb-4">No blogs found</h2>
            <p className="font-body text-on-surface-variant">Check back later for new stories and insights.</p>
          </div>
        ) : (
          <div className="space-y-16">
            
            {/* Featured Blog (Page 1 Only) */}
            {currentPage === 1 && featuredBlog && (
              <Link 
                href={getBlogUrl(featuredBlog)} 
                className="group relative block w-full rounded-[40px] overflow-hidden min-h-[500px] flex flex-col justify-end p-8 md:p-16 border border-white/10 dark:border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]"
              >
                {/* Background Image / Gradient Mesh */}
                <div className="absolute inset-0 z-0 bg-surface-container-highest">
                  {featuredBlog.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={getMediaUrl(featuredBlog.coverImage.url) || ''} 
                      alt={featuredBlog.coverImage.alternativeText || featuredBlog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60"
                    />
                  ) : (
                    <div className="w-full h-full mesh-gradient opacity-60"></div>
                  )}
                  {/* Heavy gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/30 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl bg-black/30 backdrop-blur-lg p-8 md:p-12 rounded-[32px] border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-2 shadow-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase border border-white/20">
                      Featured
                    </span>
                    {featuredBlog.publishedDate && (
                      <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-xs border border-white/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(featuredBlog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="font-display-lg text-4xl md:text-6xl text-white leading-tight mb-6 uppercase tracking-tight">
                    {featuredBlog.title}
                  </h2>
                  
                  <p className="font-body-lg text-lg md:text-xl text-white/80 line-clamp-3 mb-8 max-w-3xl">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Read Featured Article
                  </div>
                </div>
              </Link>
            )}

            {/* Asymmetric Grid for Regular Blogs */}
            {regularBlogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularBlogs.map((blog, idx) => {
                  // Make every 4th item span 2 columns on large screens
                  const isWide = idx % 4 === 0;
                  
                  return (
                    <Link 
                      href={getBlogUrl(blog)} 
                      key={blog.id} 
                      className={cn(
                        "group relative flex flex-col min-h-[400px] rounded-[32px] overflow-hidden transition-all duration-500",
                        "bg-white dark:bg-[#111]",
                        "border border-outline-variant/20 dark:border-white/5",
                        "shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]",
                        isWide ? "lg:col-span-2 flex-row" : "lg:col-span-1"
                      )}
                    >
                      {/* Cover Image Background (for wide) or Top Image (for normal) */}
                      {isWide ? (
                        <>
                          <div className="absolute inset-0 z-0">
                            {blog.coverImage ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img 
                                src={getMediaUrl(blog.coverImage.url) || ''} 
                                alt={blog.coverImage.alternativeText || blog.title}
                                className="w-full h-full object-cover opacity-20 dark:opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30 dark:group-hover:opacity-60"
                              />
                            ) : (
                              <div className="w-full h-full bg-surface-container-highest opacity-50"></div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#111] dark:via-[#111]/80 dark:to-transparent"></div>
                          </div>
                          
                          <div className="relative z-10 p-10 flex flex-col justify-end w-full md:w-2/3 h-full">
                            <div className="flex flex-wrap items-center gap-3 mb-6 mt-auto">
                              {blog.publishedDate && (
                                <span className="px-4 py-1.5 rounded-full bg-black text-white dark:bg-white/10 dark:text-white font-medium text-xs border border-transparent dark:border-white/20">
                                  {new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                              )}
                            </div>
                            <h3 className="font-display-md text-3xl md:text-4xl text-on-surface dark:text-white font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-3">
                              {blog.title}
                            </h3>
                            <p className="font-body text-on-surface-variant dark:text-white/70 line-clamp-2">
                              {blog.excerpt}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative h-[240px] w-full overflow-hidden bg-surface-container-highest">
                            {blog.coverImage ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img 
                                src={getMediaUrl(blog.coverImage.url) || ''} 
                                alt={blog.coverImage.alternativeText || blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                                No Image
                              </div>
                            )}
                            {/* Floating Badge */}
                            {blog.publishedDate && (
                              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-semibold text-[10px] tracking-wider uppercase border border-white/10">
                                {new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </div>
                            )}
                          </div>
                          
                          <div className="p-8 flex flex-col flex-grow z-10">
                            <h3 className="font-display-md text-2xl text-on-surface dark:text-white font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-3">
                              {blog.title}
                            </h3>
                            
                            <p className="font-body text-on-surface-variant dark:text-[#94A3B8] line-clamp-2 mb-8 flex-grow text-sm">
                              {blog.excerpt}
                            </p>
                            
                            <div className="flex items-center text-primary font-bold text-sm tracking-wider uppercase mt-auto">
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Pagination Navigation */}
            {totalPages > 1 && (
              <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-outline-variant/30 dark:border-white/10">
                <p className="text-sm font-medium text-on-surface-variant dark:text-[#94A3B8]">
                  Showing <span className="text-on-surface dark:text-white font-bold">{regularBlogs.length + (currentPage === 1 && featuredBlog ? 1 : 0)}</span> of <span className="text-on-surface dark:text-white font-bold">{totalBlogs}</span> articles
                </p>

                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  {currentPage > 1 ? (
                    <Link
                      href={`/blogs?page=${currentPage - 1}`}
                      className="px-4 py-2.5 rounded-full glass-card border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-white hover:border-primary/50 transition-colors text-sm font-medium flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Link>
                  ) : (
                    <span className="px-4 py-2.5 rounded-full border border-outline-variant/10 text-on-surface-variant/40 cursor-not-allowed text-sm font-medium flex items-center gap-1.5">
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </span>
                  )}

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1.5 px-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isActive = pageNum === currentPage;
                      return (
                        <Link
                          key={pageNum}
                          href={`/blogs?page=${pageNum}`}
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                            isActive
                              ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                              : "glass-card text-on-surface dark:text-white/80 hover:text-white hover:border-primary/40"
                          )}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  {currentPage < totalPages ? (
                    <Link
                      href={`/blogs?page=${currentPage + 1}`}
                      className="px-4 py-2.5 rounded-full glass-card border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-white hover:border-primary/50 transition-colors text-sm font-medium flex items-center gap-1.5"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="px-4 py-2.5 rounded-full border border-outline-variant/10 text-on-surface-variant/40 cursor-not-allowed text-sm font-medium flex items-center gap-1.5">
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
