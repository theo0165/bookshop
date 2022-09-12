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
        list: ["With link", "Without link", "Image"],
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: ({ parent, value }) =>
        !value &&
        !(parent.type === "With link" || parent.type === "Without link"),
    },
    {
      name: "bodyText",
      title: "Text",
      type: "text",
      hidden: ({ parent, value }) =>
        !value &&
        !(parent.type === "With link" || parent.type === "Without link"),
    },
    {
      name: "linkText",
      title: "Link text",
      type: "string",
      hidden: ({ parent, value }) => !value && !(parent.type === "With link"),
    },
    {
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      hidden: ({ parent, value }) => !value && !(parent.type === "With link"),
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
      hidden: ({ parent, value }) => !value && !(parent.type === "Image"),
    },
  ],
};
