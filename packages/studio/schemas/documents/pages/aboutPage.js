export default {
  name: "aboutPage",
  type: "document",
  title: "Om oss",
  fields: [
    {
      name: "firstAboutTitle",
      type: "string",
      title: "Titel",
    },
    {
      name: "firstBodyText",
      type: "text",
      title: "Sidhuvudstext",
    },
    {
      name: "firstAboutImage",
      type: "image",
      title: "Sidhuvudsbild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "firstAboutAlt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "firstCard",
      type: "card",
      title: "Kort",
    },
    {
      name: "firstImageCard",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "firstImageCardAlt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "secondImageCard",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "secondImageCardAlt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "secondCard",
      type: "card",
      title: "Kort",
    },
    {
      name: "secondAboutTitle",
      type: "string",
      title: "Titel",
    },
    {
      name: "secondBodyText",
      type: "text",
      title: "Sidhuvudstext",
    },
    {
      name: "secondAboutImage",
      type: "image",
      title: "Sidhuvudsbild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "secondAboutAlt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "thirdCard",
      type: "card",
      title: "Kort",
    },
    {
      name: "thirdImageCard",
      type: "image",
      title: "Bild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "thirdImageCardAlt",
          type: "string",
          title: "Alternativ text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
