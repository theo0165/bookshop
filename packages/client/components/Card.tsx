import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CardType from "../types/Card";
import * as S from "./styled/Card.styled";
import BodyLarge from "./styled/texts/BodyLarge";
import BodyNormal from "./styled/texts/BodyNormal";
import Caption from "./styled/texts/Caption";
import HeadingTwo from "./styled/texts/HeadingTwo";
import UnderlineButtonText from "./styled/texts/UnderlineButtonText";

interface Props {
  data: CardType;
}

const Card: FC<Props> = ({ data }) => {
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

      {data.type === "Utan länk" && (
        <S.NoLinkContainer fullWidth={data._type === "fullRow"}>
          <HeadingTwo>{data.title}</HeadingTwo>
          <BodyNormal>{data.bodyText}</BodyNormal>
        </S.NoLinkContainer>
      )}

      {data.type === "Nyhet" && (
        <S.NewsContainer>
          <Link href={`/nyhet/${data.newsItem.slug}`}>
            <a>
              <Caption grey>Nyheter</Caption>
              <HeadingTwo>{data.newsItem.title}</HeadingTwo>
              <BodyNormal>
                {data.newsItem.body.length > 150
                  ? `${data.newsItem.body.substr(0, 150)}...`
                  : data.newsItem.body}
              </BodyNormal>
            </a>
          </Link>
        </S.NewsContainer>
      )}
    </S.Card>
  );
};

export default Card;
