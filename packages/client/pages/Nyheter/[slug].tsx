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
    image: string;
  };
}

const NewsPage: NextPage<Props> = ({ data, globalSettings }) => {
  //const topInfoBar = useRef<HTMLDivElement | null>(null);
  console.log(data);

  return <></>;
};

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug;

  const globalSettings = await getGlobalSettings();

  const data = await client.fetch(
    `*[_type == 'newsItem' && slug.current == "news-2"]{
        title,
        slug,
        bodyText,
        date,
      'image': image.asset->url,
      'altText': image.asset->alt,
    }[0]
    `
  );

  console.log(data);

  return { props: { data, globalSettings } };
};

export default NewsPage;
