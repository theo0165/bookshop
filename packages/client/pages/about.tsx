import { NextPage } from "next";
import client from "../helpers/sanity";

interface Props {
  data: {
    firstAboutTitle: string;
    firstBodyText: string;
    firstAboutImage: string;
    // date: string | null;
  };
}

const AboutPage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div>
        <h1>{data.firstAboutTitle}</h1>
        <p>{data.firstBodyText}</p>
        <img src={data.firstAboutImage} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await client.fetch(
    `*[_type == 'aboutPage' && !(_id in path("drafts.**"))]{
      firstAboutTitle,
      firstBodyText,
      "image": image.asset->url
    }[0]`
  );

  return { props: { data } };
};

export default AboutPage;
