import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

  return <div className={styles.container}>Test</div>;
};

export default Home;
