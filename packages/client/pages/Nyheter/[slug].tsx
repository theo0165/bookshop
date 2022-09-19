import { NextPage } from 'next';
import client from '../../helpers/sanity';
import getGlobalSettings from '../../helpers/getGlobalSettings';

import {
  AiOutlineClockCircle,
  AiOutlineWallet,
  AiOutlineInfoCircle,
  AiOutlineEnvironment,
} from 'react-icons/ai';
import GlobalSettings from '../../types/GlobalSettings';
import path from 'path';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import * as S from '../../components/styled/NewsItem.styled';
import DisplayOne from '../../components/styled/texts/DisplayOne';
import {
  Container,
  DateContainer,
} from '../../components/styled/Nyheter.styled';
import * as D from '../../components/styled/News.styled';
import BodySmall from '../../components/styled/texts/BodySmall';
import HeadingThree from '../../components/styled/texts/HeadingThree';
import formatNewsDate from '../../helpers/formatNewsDate';
import BodyLarge from '../../components/styled/texts/BodyLarge';
import BodyNormal from '../../components/styled/texts/BodyNormal';
import Caption from '../../components/styled/texts/Caption';


interface Props {
  globalSettings: GlobalSettings;
  data: {
    title: string;
    slug: string;
    bodyText: string;
    date: string;
    time: string;
    adress: string;
    price: string;
    image: string;
  };
}

const NewsPage: NextPage<Props> = ({ data, globalSettings }) => {
  //const topInfoBar = useRef<HTMLDivElement | null>(null);
  //console.log(data);

  return (
    <>
      <Header settings={globalSettings} />
      <Breadcrumbs />
      <Container>
      <S.NewsItemImage src={data.image}/>
        <S.TitleContainer>
          <S.NewsItemTitle>
            <Caption>Insert category</Caption>
          </S.NewsItemTitle>
          <S.Date>
            <BodySmall>{formatNewsDate(data.date).day}</BodySmall>
            <HeadingThree>{formatNewsDate(data.date).date}</HeadingThree>
            <HeadingThree>{formatNewsDate(data.date).month}</HeadingThree>
          </S.Date>
        </S.TitleContainer>
        <DisplayOne>{data.title}</DisplayOne>
        <S.MainContainer>
          <div>
            <BodyNormal>{data.bodyText}</BodyNormal>
          </div>
          <S.TimeDateContainer>
            <S.DateTimeInfo>
              <AiOutlineClockCircle />
              <BodyNormal>{data.time}</BodyNormal>
            </S.DateTimeInfo>
            <S.DateTimeInfo>
              <AiOutlineWallet />
              <BodyNormal>{data.price ? data.price : 'Fri entré'}</BodyNormal>
            </S.DateTimeInfo>
            <S.DateTimeInfo>
              <AiOutlineInfoCircle />
              <BodyNormal>Föranmälan krävs</BodyNormal>
            </S.DateTimeInfo>
            <S.DateTimeInfo>
              <AiOutlineEnvironment />
              <BodyNormal>
                {data.adress ? data.adress : 'Allmänna vägen 12, Göteborg'}
              </BodyNormal>
            </S.DateTimeInfo>
          </S.TimeDateContainer>
        </S.MainContainer>
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
      date,
      time,
      adress,
      price
    }[0]
    `
  );

  return { props: { data, globalSettings } };
};

export default NewsPage;
