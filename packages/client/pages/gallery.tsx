import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Galley: NextPage = () => {
  return <div className={styles.container}></div>;
};

export default Galley;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return { props: {} };
  console.log(feed);
};
