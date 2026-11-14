import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogNode } from '@/types/blog';

interface RichTextRendererProps {
  content: BlogNode[] | string | null | undefined;
}

const RICHTEXT_CLASSES = `
  ckeditor-content text-lg max-w-none
  [&_p]:text-on-surface-variant [&_p]:mb-6 [&_p]:leading-relaxed
  [&_h1]:text-on-surface [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:mt-12
  [&_h2]:text-on-surface [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:mt-10
  [&_h3]:text-on-surface [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4 [&_h3]:mt-8
  [&_h4]:text-on-surface [&_h4]:text-xl [&_h4]:font-bold [&_h4]:mb-4 [&_h4]:mt-6
  [&_strong]:text-on-surface [&_strong]:font-bold
  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul_li]:mb-2
  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_li]:mb-2
  [&_li]:text-on-surface-variant
  [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline
  [&_blockquote]:block [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-2xl [&_blockquote]:text-on-surface-variant
  [&_img]:rounded-3xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full [&_img]:border [&_img]:border-outline/10
`;

export function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) {
    return null;
  }

  // ============================================================
  // STRING CONTENT
  // ============================================================
  if (typeof content === 'string') {
    const hasHTML = /<\/?[a-z][\s\S]*>/i.test(content);

    // Strapi CKEditor HTML
    if (hasHTML) {
      return (
        <div
          className={RICHTEXT_CLASSES}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }

    // ============================================================
    // MARKDOWN CONTENT
    // ============================================================

    let markdown = content
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .trim();

    // Fix: 1.**Title** -> 1. **Title**
    markdown = markdown.replace(
      /^(\s*\d+\.)\s*(\*\*)/gm,
      '$1 $2'
    );

    // Fix bullet points that are stuck to previous text
    markdown = markdown.replace(
      /(\S)[\r\n]+(-\s+)/g,
      '$1\n\n$2'
    );

    // Fix numbered list items that are stuck together
    markdown = markdown.replace(
      /(\S)[\r\n]+(\d+\.\s+)/g,
      '$1\n\n$2'
    );

    // Convert all other single newlines to Markdown hard breaks (two spaces before newline)
    markdown = markdown.replace(/([^\n])\n([^\n])/g, '$1  \n$2');

    // Make bold numbered headings cleaner
    markdown = markdown.replace(
      /^(\d+\.)\s+\*\*(.+?)\*\*/gm,
      '$1 **$2**'
    );

    return (
      <div className={RICHTEXT_CLASSES}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            strong: ({ children }) => <strong>{children}</strong>,
            ul: ({ children }) => <ul>{children}</ul>,
            ol: ({ children }) => <ol>{children}</ol>,
            li: ({ children }) => <li>{children}</li>,
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            blockquote: ({ children }) => <blockquote>{children}</blockquote>,
            img: ({ src, alt }) => <img src={src} alt={alt} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    );
  }

  // ============================================================
  // STRAPI BLOCKS CONTENT
  // ============================================================

  if (Array.isArray(content)) {
    return (
      <div className={RICHTEXT_CLASSES}>
        {content.map((node: any, index: number) => {
          switch (node.type) {
            case 'paragraph':
              return (
                <p key={index}>
                  {renderChildren(node.children)}
                </p>
              );

            case 'heading': {
              const level = node.level || 2;
              const HeadingTag = `h${level}` as any;
              return (
                <HeadingTag key={index}>
                  {renderChildren(node.children)}
                </HeadingTag>
              );
            }

            case 'list': {
              const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
              return (
                <ListTag key={index}>
                  {node.children?.map((item: any, itemIndex: number) => (
                    <li key={itemIndex}>
                      {renderChildren(item.children)}
                    </li>
                  ))}
                </ListTag>
              );
            }

            case 'quote':
              return (
                <blockquote key={index}>
                  {renderChildren(node.children)}
                </blockquote>
              );

            default:
              return (
                <div key={index}>
                  {renderChildren(node.children)}
                </div>
              );
          }
        })}
      </div>
    );
  }

  return null;
}

// ============================================================
// STRAPI BLOCK CHILDREN
// ============================================================

function renderChildren(children: any[]) {
  if (!children) {
    return null;
  }

  return children.map((child: any, index: number) => {
    if (child.type === 'text') {
      let text: React.ReactNode = child.text;

      if (child.bold) {
        text = <strong key={index}>{text}</strong>;
      }
      if (child.italic) {
        text = <em key={index}>{text}</em>;
      }
      if (child.underline) {
        text = <u key={index}>{text}</u>;
      }
      if (child.strikethrough) {
        text = <s key={index}>{text}</s>;
      }

      return <React.Fragment key={index}>{text}</React.Fragment>;
    }

    if (child.type === 'link') {
      return (
        <a
          key={index}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderChildren(child.children)}
        </a>
      );
    }

    return null;
  });
}