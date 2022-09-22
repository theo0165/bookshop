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
import InstagramImage from "../types/InstagramImage";
import DisplayOne from "../components/styled/texts/DisplayOne";
import Footer from "../components/Footer";

interface Props {
  data: {
    text: string;
    heroImage: string;
    title: string;
    linkText: string;
    cards: CardType[];
  };

  instagram: {
    data: InstagramImage[];
  };

  globalSettings: GlobalSettings;
}

const Home: NextPage<Props> = ({ data, globalSettings, instagram }) => {
  const topInfoBar = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <TopInfoBar ref={topInfoBar} settings={globalSettings} />
      <Header
        settings={globalSettings}
        offset={topInfoBar.current?.scrollHeight ?? 64}
      />
      <S.Container>
        <S.HeroContainer>
          <S.HeroText>
            <HeadingOne>{data.title}</HeadingOne>
            <BodyNormal>{data.text}</BodyNormal>
            <UnderlineButtonText href="/om">
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

        <S.InstagramContainer>
          <DisplayOne>Instagram</DisplayOne>
          <S.InstagramImageContainer>
            {instagram.data &&
              instagram.data
                .slice(0, 9)
                .map((instagramImage: InstagramImage) => (
                  <S.InstaLink
                    key={instagramImage.id}
                    href={instagramImage.permalink}
                  >
                    <S.InstaImage src={instagramImage.media_url} />
                  </S.InstaLink>
                ))}
          </S.InstagramImageContainer>
        </S.InstagramContainer>
      </S.Container>
      <Footer settings={globalSettings} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

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

  const instagramData = await fetch(url);
  const instagram = await instagramData.json();

  return { props: { data, globalSettings, instagram } };
};
