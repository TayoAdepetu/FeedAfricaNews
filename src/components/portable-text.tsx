import { PortableTextComponents } from 'next-sanity';
import { urlFor } from '@/sanity/image';
import Link from 'next/link';

export const components: PortableTextComponents = {
  // Block components
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-7 mb-4 text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mt-5 mb-3 text-slate-700">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-7 mb-4 text-gray-700">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-gray-600 bg-gray-50">
        {children}
      </blockquote>
    ),
  },

  // Image block component
  types: {
    image: ({ value }) => {
      if (!value || !value.asset) return null;

      const imageUrl = urlFor(value)?.width(800).url();
      if (!imageUrl) return null;

      const altText = value?.alt || 'Blog post image';

      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {value?.caption && (
            <figcaption className="text-sm text-gray-600 text-center mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },

  // Mark components for inline styling
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-primary underline hover:no-underline transition-all"
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    ),
  },

  // List components
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
        {children}
      </ul>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-700">{children}</li>
    ),
  },
};
