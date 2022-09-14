export default {
  name: "fullRow",
  title: "Full row",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Med länk", "Utan länk", "Bild"],
      },
    },
    {
      name: "background",
      title: "Bakgrund",
      type: "string",
      options: {
        list: ["Grön", "Vit"],
      },
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
        !value && !(parent.type === "Med länk" || parent.type === "Utan länk"),
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
