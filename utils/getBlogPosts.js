export const getBlogPosts = () => {
  return [
    {
      slug: "top-5-washing-machine-tips",
      title: "Top 5 Washing Machine Maintenance Tips",
      content: "Here are the top 5 tips to keep your washing machine running smoothly...",
      author: "John Doe",
      date: "2023-10-26",
    },
    {
      slug: "choosing-the-right-detergent",
      title: "How to Choose the Right Detergent",
      content: "Choosing the right detergent is crucial for your machine's health...",
      author: "Jane Smith",
      date: "2023-10-20",
    }
  ];
};

export const getBlogPost = (slug) => {
  const posts = getBlogPosts();
  return posts.find(p => p.slug === slug) || null;
};