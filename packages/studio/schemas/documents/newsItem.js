export default {
  name: "newsItem",
  type: "document",
  title: "News",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "bodyText",
      type: "text",
      title: "Body text",
    },
    {
      name: "date",
      type: "date",
      title: "Date",
    },
    {
      name: "time",
      type: "string",
      title: "Time",
      description: "Format time as following: hh:mm",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
};
