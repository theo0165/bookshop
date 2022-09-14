import type { NextPage } from "next";
import BodyNormal from "../components/styled/texts/BodyNormal";
import HeadingOne from "../components/styled/texts/HeadingOne";
import UnderlineButtonText from "../components/styled/texts/UnderlineButtonText";
import client from "../helpers/sanity";
import * as S from "../components/styled/Homepage.styled";
import Card from "../components/Card";
import CardType from "../types/Card";
import getGlobalSettings from "../helpers/getGlobalSettings";
import GlobalSettings from "../types/GlobalSettings";
import Header from "../components/Header";
import TopInfoBar from "../components/TopInfoBar";
import { useRef } from "react";
interface Props {
  data: {
    text: string;
    heroImage: string;
    title: string;
    linkText: string;
    cards: CardType[];
  };

  globalSettings: GlobalSettings;
}

const Home: NextPage<Props> = ({ data, globalSettings }) => {
  const topInfoBar = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <TopInfoBar ref={topInfoBar} settings={globalSettings} />
      <Header
        settings={globalSettings}
        offset={topInfoBar.current?.clientHeight}
      />
      <S.HeroContainer>
        <S.HeroText>
          <HeadingOne>{data.title}</HeadingOne>
          <BodyNormal>{data.text}</BodyNormal>
          <UnderlineButtonText href="/om-oss">
            {data.linkText}
          </UnderlineButtonText>
        </S.HeroText>
        <S.HeroImage src={data.heroImage} />
      </S.HeroContainer>
      <S.CardsContainer>
        {data.cards &&
          data.cards.map((card: CardType) => (
            <Card data={card} key={`card-${card._key}`} />
          ))}
      </S.CardsContainer>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();
  const data = await client.fetch(`
  *[_type == "frontpage" && !(_id in path("drafts.**"))]{
    text,
    linkText,
    "heroImage": heroImage.asset->url,
    title,
    cards[]{
      type == "Nyhet" => {
        _key,
        _type,
        background,
        type,
        "newsItem": {
          "title": newsItem->title,
          "body": newsItem->bodyText,
          "slug": newsItem->slug.current
        },
      },
  
      type == "Citat" => {
        ...
      },
  
      type == "Med länk" => {
        ...
      },
  
      type == "Utan länk" => {
        ...
      },
  
      type == "Bild" => {
        _key,
        _type,
        type,
        "image": image.asset->url,
      },
    }
  }[0]
  `);

  return { props: { data, globalSettings } };
};

//Test för Instagram
// export const getServerSideProps = async () => {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url);
//   const insta = await data.json();

//   return { props: { insta } };
// };
