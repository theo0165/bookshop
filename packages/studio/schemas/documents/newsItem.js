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
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      description: "If other adress then, Allmänna vägen 12, Göteborg",
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      description: "Leave blank if the event if free.",
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
          title: "Alternativ text",
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
