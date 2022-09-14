import Image from "next/image";
import { FC } from "react";
import CardType from "../types/Card";
import * as S from "./styled/Card.styled";
import HeadingTwo from "./styled/texts/HeadingTwo";

interface Props {
  data: CardType;
}

const Card: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <S.Card
      width={data._type}
      background={
        data.background === "Grön" || data.type === "Bild" ? "green" : "white"
      }
    >
      {data.type === "Bild" && (
        <S.ImageContainer>
          <Image src={data.image} layout="fill" objectFit="cover" />
        </S.ImageContainer>
      )}

      {data.type === "Citat" && (
        <S.QuoteContainer>
          <HeadingTwo white>“{data.bodyText}“</HeadingTwo>
        </S.QuoteContainer>
      )}
    </S.Card>
  );
};

export default Card;
