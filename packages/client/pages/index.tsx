import type { NextPage } from "next";
import BodyNormal from "../components/styled/BodyNormal";
import HeadingOne from "../components/styled/HeadingOne";
import UnderlineButtonText from "../components/styled/UnderlineButtonText";
import client from "../helpers/sanity";
import style from "../styles/Home.module.scss";

interface Card {
  type: string;
  [key: string]: any;
}
interface Props {
  data: {
    text: string;
    heroImage: string;
    title: string;
    linkText: string;
    cards: Card[];
  };
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.heroText}>
          <HeadingOne>{data.title}</HeadingOne>
          <BodyNormal>{data.text}</BodyNormal>
          <UnderlineButtonText href="/om-oss">
            {data.linkText}
          </UnderlineButtonText>
        </div>
        <img height="360px" src={data.heroImage} className={style.heroImage} />
      </div>
      <div className={style.cards}>
        {data.cards && data.cards.map((card: Card) => <p>{card.type}</p>)}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await client.fetch(`
    *[_type == "frontpage" && !(_id in path("drafts.**"))]{
      text,
      linkText,
      "heroImage": heroImage.asset->url,
      title,
      cards
    }[0]
  `);

  return { props: { data } };
};

//Test för Instagram
// export const getServerSideProps = async () => {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url);
//   const insta = await data.json();

//   return { props: { insta } };
// };
