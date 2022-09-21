export default {
  name: "newsPage",
  type: "document",
  title: "Nyhetssida",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "firstCard",
      title: "Erbjudande ett",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "bodyText",
          title: "Text",
          type: "text",
        },
      ],
    },
    {
      name: "secondCard",
      title: "Erbjudande två",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "bodyText",
          title: "Text",
          type: "text",
        },
      ],
    },
  ],
};
