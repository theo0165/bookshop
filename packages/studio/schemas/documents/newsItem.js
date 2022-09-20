export default {
  name: "newsItem",
  type: "document",
  title: "Nyheter",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titel",
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
      title: "Brödtext",
    },
    {
      name: "date",
      type: "date",
      title: "Datum",
    },
    {
      name: "image",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Kategorier",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
};
