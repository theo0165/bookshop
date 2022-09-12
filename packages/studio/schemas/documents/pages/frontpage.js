export default {
  name: "frontpage",
  title: "Frontpage",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "text",
      title: "Starting text",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero image",
    },
    {
      name: "linkText",
      type: "string",
      title: "Link text",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [{ type: "halfRow" }, { type: "fullRow" }],
    },
  ],
};
