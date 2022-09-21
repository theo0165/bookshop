export default {
  name: "globalSettings",
  type: "document",
  title: "Globala inställningar",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Hemsidans titel",
    },
    {
      name: "logo",
      type: "image",
      title: "Logotyp",
    },
    {
      name: "mobileLogo",
      type: "image",
      title: "Logotyp för mobil",
    },
    {
      name: "openingHours",
      type: "string",
      title: "Öppetider",
    },
    {
      name: "address",
      type: "string",
      title: "Adress",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "number",
      type: "string",
      title: "Telefonnummer",
    },
    {
      name: "instagram",
      type: "url",
      title: "Instagram",
    },
    {
      name: "facebook",
      type: "url",
      title: "Facebook",
    },
  ],
};
