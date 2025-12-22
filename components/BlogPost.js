import React from 'react';
import { useTranslation } from 'next-i18next';
import { getBlogPost } from '../utils/getBlogPosts';

const BlogPost = ({ slug }) => {
  const { t } = useTranslation('common');
  const { title, content, author, date } = getBlogPost(slug);

  return (
    <article className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-gray-600 mb-4">
        <span className="font-bold">By {author}</span>{' '}
        <span className="mx-2">•</span>
        <span className="font-bold">{date}</span>
      </div>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default BlogPost;