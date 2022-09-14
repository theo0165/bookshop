import type { NextPage } from "next";

const Galley: NextPage = () => {
  return <div></div>;
};

export default Galley;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return { props: {} };
  console.log(feed);
};
