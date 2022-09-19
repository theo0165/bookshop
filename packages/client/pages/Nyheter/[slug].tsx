import { NextPage } from 'next';
import client from '../../helpers/sanity';
import getGlobalSettings from '../../helpers/getGlobalSettings';

import {
  BodyContainer,
  CardContainer,
  CardWrapper,
  HeroSection,
  ImageChild,
  ImageWrapper,
  TextWrapperFirst,
  TextWtapperSecond,
} from '../../components/styled/About.styled';
import GlobalSettings from '../../types/GlobalSettings';
import path from 'path';

interface Props {
  globalSettings: GlobalSettings;
  data: {
    title: string;
    slug: string;
    bodyText: string;
    date: string;
    time: string;
    image: string;
  };
}

const NewsPage: NextPage<Props> = ({ data, globalSettings }) => {
  //const topInfoBar = useRef<HTMLDivElement | null>(null);
  console.log(data);

  return (
    <>
      <p>Nyhet</p>
      <p>{data.title}</p>
      <p>{data.bodyText}</p>
      <p>{data.time}</p>


    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug;
  //const slug = 'news-2';

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
      time
    }[0]
    `
  );
  console.log('hej');

  console.log(data);

  return { props: { data, globalSettings } };
};

export default NewsPage;
