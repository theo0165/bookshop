import { NextPage } from "next";
import client from "../helpers/sanity";

interface Props {
  data: {
    firstAboutTitle: string;
    firstBodyText: string;
    image: string;
    firstCard: {
      firstTitle: string;
      secondTitle: string;
      text: string;
      image: string;
    };
    firstImageCard: string;

    // date: string | null;
  };
}

const AboutPage: NextPage<Props> = ({ data }) => {
  // console.log(data.firstAboutTitle);
  console.log(data);

  return (
    <>
      <div>
        <h1>{data.firstAboutTitle}</h1>
        <p>{data.firstBodyText}</p>
        <img src={data.image} />
      </div>
      <div>
        <p>{data.firstCard.firstTitle}</p>
        <h2>{data.firstCard.secondTitle}</h2>
        <img src={data.firstCard.image} />
      </div>
      <div>
        <img src={data.firstImageCard} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await client.fetch(
    `*[_type == 'aboutPage' && !(_id in path("drafts.**"))]{
      firstAboutTitle,
      firstBodyText,
      "image": firstAboutImage.asset->url,
      firstCard{
        "image": img.asset->url,
        firstTitle,
        secondTitle,
        text
      },
      "firstImageCard": firstImageCard.asset->url,
    }[0]`
  );

  return { props: { data } };
};

export default AboutPage;
