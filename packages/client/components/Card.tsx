import Image from "next/image";
import { FC } from "react";
import CardType from "../types/Card";
import * as S from "./styled/Card.styled";
import BodyLarge from "./styled/texts/BodyLarge";
import HeadingTwo from "./styled/texts/HeadingTwo";
import UnderlineButtonText from "./styled/texts/UnderlineButtonText";

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

      {data.type === "Med länk" && (
        <S.LinkContainer>
          <div>
            <HeadingTwo>{data.title}</HeadingTwo>
            <BodyLarge>{data.bodyText}</BodyLarge>
            <UnderlineButtonText href={data.linkUrl}>
              {data.linkText}
            </UnderlineButtonText>
          </div>
        </S.LinkContainer>
      )}
    </S.Card>
  );
};

export default Card;
