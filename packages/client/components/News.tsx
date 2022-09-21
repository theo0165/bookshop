import Image from "next/image";
import { FC } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import formatNewsDate from "../helpers/formatNewsDate";
import NewsItem from "../types/NewsItem";
import * as S from "./styled/News.styled";
import BodyLarge from "./styled/texts/BodyLarge";
import BodySmall from "./styled/texts/BodySmall";
import BodySmallest from "./styled/texts/BodySmallest";
import Caption from "./styled/texts/Caption";
//import UnderlineButtonText from "./styled/texts/UnderlineButtonText";

interface Props {
  newsItem: NewsItem;
}

const News: FC<Props> = ({ newsItem }) => {
  return (
    <S.Container>
      <S.Top>
        <S.Image>
          <Image src={newsItem.image} layout="fill" objectFit="cover" />
        </S.Image>
        {newsItem.date && (
          <S.Date>
            <BodySmall>{formatNewsDate(newsItem.date).day}</BodySmall>
            <S.HeadingThree>
              {formatNewsDate(newsItem.date).date}
            </S.HeadingThree>
            <S.HeadingThree>
              {formatNewsDate(newsItem.date).month}
            </S.HeadingThree>
          </S.Date>
        )}

        {newsItem.time && (
          <S.Time>
            <AiOutlineClockCircle />
            <Caption>Tid: {newsItem.time}</Caption>
          </S.Time>
        )}
      </S.Top>
      <S.Bottom>
        {/* Cut at x chars */}
        <div>
          <BodyLarge>{newsItem.title}</BodyLarge>
          <BodySmallest>
            {newsItem.bodyText.length < 200
              ? newsItem.bodyText
              : `${newsItem.bodyText.slice(0, 200)}...`}
          </BodySmallest>
        </div>
        <S.ReadMore>Läs mer</S.ReadMore>
      </S.Bottom>
    </S.Container>
  );
};

export default News;