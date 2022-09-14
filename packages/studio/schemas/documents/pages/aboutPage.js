export default {
  name: "aboutPage",
  type: "document",
  title: "About page",
  fields: [
    {
      name: "firstAboutTitle",
      type: "string",
      title: "About title",
    },
    {
      name: "firstBodyText",
      type: "text",
      title: "Body text",
    },
    {
      name: "firstAboutImage",
      type: "image",
      title: "Header Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "firstAboutAlt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "firstCard",
      type: "card",
      title: "First card",
    },
    {
      name: "firstImageCard",
      type: "image",
      title: "Image card",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "firstImageCardAlt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "secondImageCard",
      type: "image",
      title: "Second image card",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "secondImageCardAlt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "secondCard",
      type: "card",
      title: "Second card",
    },
    {
      name: "secondAboutTitle",
      type: "string",
      title: "About title",
    },
    {
      name: "secondBodyText",
      type: "text",
      title: "Body text",
    },
    {
      name: "secondAboutImage",
      type: "image",
      title: "Header Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "secondAboutAlt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "thirdCard",
      type: "card",
      title: "Third card",
    },
    {
      name: "thirdImageCard",
      type: "image",
      title: "Image card",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "thirdImageCardAlt",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
