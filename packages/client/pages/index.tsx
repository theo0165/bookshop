import type { NextPage } from "next";
import client from "../helpers/sanity";

interface Props {
  data: {
    text: string;
    heroImage: string;
    title: string;
    cards: {
      type: string;
      [key: string]: any;
    }[];
  };
}

const Home: NextPage<Props> = ({ data }) => {
  return <></>;
};

export default Home;

export const getServerSideProps = async () => {
  const data = await client.fetch(`
    *[_type == "frontpage" && !(_id in path("drafts.**"))]{
      text,
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
