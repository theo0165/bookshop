interface Card {
  type: "Med länk" | "Utan länk" | "Bild" | "Citat" | "Nyhet";
  [key: string]: any;
}

export default Card;
