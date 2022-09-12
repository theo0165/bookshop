export default {
  name: "halfRow",
  title: "Half row",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Med länk", "Utan länk", "Bild", "Citat", "Nyhet"],
      },
    },
    {
      name: "newsItem",
      title: "Nyhet",
      type: "reference",
      to: [{ type: "newsItem" }],
      hidden: ({ parent, value }) => !value && !(parent.type === "Nyhet"),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: ({ parent, value }) =>
        !value && !(parent.type === "Med länk" || parent.type === "Utan länk"),
    },
    {
      name: "bodyText",
      title: "Text",
      type: "text",
      hidden: ({ parent, value }) =>
        !value &&
        !(
          parent.type === "Med länk" ||
          parent.type === "Utan länk" ||
          parent.type === "Citat"
        ),
    },
    {
      name: "linkText",
      title: "Link text",
      type: "string",
      hidden: ({ parent, value }) => !value && !(parent.type === "Med länk"),
    },
    {
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      hidden: ({ parent, value }) => !value && !(parent.type === "Med länk"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt. text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
      hidden: ({ parent, value }) => !value && !(parent.type === "Bild"),
    },
  ],
};
