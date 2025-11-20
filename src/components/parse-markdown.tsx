"use client"

import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({ content, className }: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <ReactMarkdown
        components={{
          // Customize how each element renders
          p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          h1: ({ children }) => <h1 className="text-2xl font-semibold mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-semibold mb-2">{children}</h3>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="ml-4">{children}</li>,
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {children}
              </code>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}