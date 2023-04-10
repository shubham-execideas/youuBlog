const addBlogPost = require("/js/algolia").addBlogPost;

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
    media_folder: "img",
    public_folder: "/img",
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "_posts",
        create: true,
        fields: [
          { name: "title", label: "Title", widget: "string" },
          { name: "description", label: "Description", widget: "text" },
        ],
        // Add a hook to add new blog posts to Algolia when they are created
        hooks: {
          onCreate: async ({ entry }) => {
            await addBlogPost(
              entry.slug,
              entry.data.title,
              entry.data.description
            );
          },
        },
      },
    ],
  },
});
