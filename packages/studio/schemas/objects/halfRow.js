import {
  AiOutlineLink,
  AiOutlineDisconnect,
  AiOutlineNotification,
} from "react-icons/ai";
import { GrBlockQuote } from "react-icons/gr";

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
      name: "background",
      title: "Bakgrund",
      type: "string",
      options: {
        list: ["Grön", "Vit"],
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
  preview: {
    select: {
      type: "type",
      image: "image",
    },
    prepare: (selection) => {
      const { type, image } = selection;

      const icons = {
        "Med länk": AiOutlineLink,
        "Utan länk": AiOutlineDisconnect,
        Citat: GrBlockQuote,
        Nyhet: AiOutlineNotification,
      };

      return {
        title: "Fullbredd",
        subtitle: `${type}`,
        media: image ? image : icons[type],
      };
    },
  },
};
