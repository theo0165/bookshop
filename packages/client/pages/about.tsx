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
    };
    firstImageCard: string;
    secondImageCard: string;
    secondCard: {
      firstTitle: string;
      secondTitle: string;
      text: string;
    };
    secondAboutTitle: string;
    secondBodyText: string;
    secondBodyImage: string;
    thirdCard: {
      firstTitle: string;
      secondTitle: string;
      text: string;
    };
    thirdImageCard: string;
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
        <p>{data.secondCard.text}</p>
      </div>
      <div>
        <img src={data.firstImageCard} />
      </div>
      <div>
        <img src={data.secondImageCard} />
      </div>
      <div>
        <p>{data.secondCard.firstTitle}</p>
        <h2>{data.secondCard.secondTitle}</h2>
        <p>{data.secondCard.text}</p>
      </div>
      <div>
        <h1>{data.secondAboutTitle}</h1>
        <p>{data.secondBodyText}</p>
        <img src={data.secondBodyImage} />
      </div>
      <div>
        <p>{data.thirdCard.firstTitle}</p>
        <h2>{data.thirdCard.secondTitle}</h2>
        <p>{data.thirdCard.text}</p>
      </div>
      <div>
        <img src={data.thirdImageCard} />
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
        firstTitle,
        secondTitle,
        text
      },
      "firstImageCard": firstImageCard.asset->url,
      secondCard{
        firstTitle,
        secondTitle,
        text
      },
      secondAboutTitle,
      secondBodyText,
      "imageSecond": secondAboutImage.asset->url,
      thirdCard{
        firstTitle,
        secondTitle,
        text
      },
      "imageThird": thirdAboutImage.asset->url,
    }[0]`
  );

  return { props: { data } };
};

export default AboutPage;
