import { NextPage } from "next";
import client from "../../helpers/sanity";
import getGlobalSettings from "../../helpers/getGlobalSettings";

import {
  AiOutlineClockCircle,
  AiOutlineWallet,
  AiOutlineInfoCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import GlobalSettings from "../../types/GlobalSettings";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import * as S from "../../components/styled/NewsItem.styled";
import DisplayOne from "../../components/styled/texts/DisplayOne";
import {
  Container,
  NewsItems,
} from "../../components/styled/Nyheter.styled";
import BodySmall from "../../components/styled/texts/BodySmall";
import HeadingThree from "../../components/styled/texts/HeadingThree";
import formatNewsDate from "../../helpers/formatNewsDate";
import BodyNormal from "../../components/styled/texts/BodyNormal";
import Caption from "../../components/styled/texts/Caption";
import NewsItem from "../../types/NewsItem";
import News from "../../components/News";
import Footer from "../../components/Footer";
import Category from "../../types/Category";

interface Props {
  globalSettings: GlobalSettings;
  data: {
    title: string;
    slug: string;
    bodyText: string;
    date: string | null;
    time: string | null;
    address: string;
    price: string;
    image: string;
    image_alt: string;
    categories: Category[];
  };
  newsItems: NewsItem[];
}

const NewsPage: NextPage<Props> = ({ data, globalSettings, newsItems }) => {
  console.log(newsItems);

  return (
    <>
      <Header settings={globalSettings} />
      <Breadcrumbs />
      <Container>
        <S.NewsItemImage src={data.image} alt={data.image_alt} />
        <S.TitleContainer>
          <S.NewsItemTitle>
            {data.categories.map((category) => (
              <Caption key={category._id}>| {category.title} | </Caption>
            ))}
          </S.NewsItemTitle>
          {data.date && (
            <S.Date>
              <BodySmall>{formatNewsDate(data.date).day}</BodySmall>
              <HeadingThree>{formatNewsDate(data.date).date}</HeadingThree>
              <HeadingThree>{formatNewsDate(data.date).month}</HeadingThree>
            </S.Date>
          )}
        </S.TitleContainer>
        <S.MainContainer>
          <div>
            <DisplayOne>{data.title}</DisplayOne>
            <BodyNormal>{data.bodyText}</BodyNormal>
          </div>
          <S.TimeDateContainer>
            <S.FlexWrapper>
              {data.time && (
                <S.DateTimeInfo>
                  <AiOutlineClockCircle />
                  <BodyNormal>{data.time}</BodyNormal>
                </S.DateTimeInfo>
              )}
              <S.DateTimeInfo>
                <AiOutlineWallet />
                <BodyNormal>{data.price ? data.price : "Fri entré"}</BodyNormal>
              </S.DateTimeInfo>
            </S.FlexWrapper>
            <S.FlexWrapper>
              <S.DateTimeInfo>
                <AiOutlineInfoCircle />
                <BodyNormal>Föranmälan krävs</BodyNormal>
              </S.DateTimeInfo>

              <S.DateTimeInfo>
                <AiOutlineEnvironment />
                <BodyNormal>
                  {data.address ? data.address : "Allmänna vägen 12, Göteborg"}
                </BodyNormal>
              </S.DateTimeInfo>
            </S.FlexWrapper>
          </S.TimeDateContainer>
        </S.MainContainer>
        <DisplayOne>Kolla även</DisplayOne>
        <NewsItems>
          {newsItems.map((item) => (
            <S.CardContainer key={`news-item-${item._id}`}>
              <News newsItem={item} />
            </S.CardContainer>
          ))}
        </NewsItems>
        <Footer settings={globalSettings} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug;

  const globalSettings = await getGlobalSettings();

  const data = await client.fetch(
    `    *[_type == "newsItem" && slug.current =='${slug}']{
      _id,
      bodyText,
      title,
      "slug": slug.current,
      "categories": categories[]{
        "_id": @->_id,
        "title": @->title
      },
      "image": image.asset->url,
      "image_alt": image.alt,
      date,
      time,
      address,
      price
    }[0]
    `
  );

  const newsItems = await client.fetch(`
  *[_type == "newsItem" && !(_id in path("drafts.**"))][0...3]{
    _id,
    bodyText,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    date,
    time
  }
`);

  return { props: { data, globalSettings, newsItems } };
};

export default NewsPage;
