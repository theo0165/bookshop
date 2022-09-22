import { AiOutlineNotification } from "react-icons/ai";

export default {
  name: "newsItem",
  type: "document",
  title: "Nyheter",
  icon: AiOutlineNotification,
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
      name: "address",
      type: "string",
      title: "Address",
      description:
        "Fyll i adress om den är annan än, Allmänna vägen 12, Göteborg",
    },
    {
      name: "price",
      type: "string",
      title: "Pris",
      description: "Om fältet lämnas tomt blir texten - Fri entré",
    },
    {
      name: "time",
      type: "string",
      title: "Time",
      description: "Tid skrivs: hh:mm",
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
