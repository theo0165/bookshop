export default {
  name: "frontpage",
  title: "Första sida",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titel",
    },
    {
      name: "text",
      type: "text",
      title: "Omslagstext",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Omslagsbild",
    },
    {
      name: "linkText",
      type: "string",
      title: "Länktext",
    },
    {
      name: "cards",
      type: "array",
      title: "Kort",
      of: [{ type: "halfRow" }, { type: "fullRow" }],
    },
  ],
};
