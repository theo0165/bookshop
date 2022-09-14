import { NextPage } from "next";
import client from "../helpers/sanity";
import HeadingOne from "../components/styled/texts/HeadingOne";
import {
  BodyContainer,
  CardContainer,
  HeroSection,
} from "../components/styled/About.styled";
import BodyNormal from "../components/styled/texts/BodyNormal";

interface Props {
  data: {
    firstAboutTitle: string;
    firstBodyText: string;
    image: string;
    firstCard: {
      caption: string;
      heading: string;
      text: string;
    };
    firstImageCard: string;
    secondImageCard: string;
    secondCard: {
      caption: string;
      heading: string;
      text: string;
    };
    secondAboutTitle: string;
    secondBodyText: string;
    secondBodyImage: string;
    thirdCard: {
      caption: string;
      heading: string;
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
      <BodyContainer>
        <HeroSection>
          <div>
            <HeadingOne>{data.firstAboutTitle}</HeadingOne>
            <BodyNormal>{data.firstBodyText}</BodyNormal>
          </div>
          <img src={data.image} />
        </HeroSection>
        <CardContainer>
          <p>{data.firstCard.caption}</p>
          <h2>{data.firstCard.heading}</h2>
          <p>{data.secondCard.text}</p>
        </CardContainer>
        <CardContainer>
          <img src={data.firstImageCard} />
        </CardContainer>
        <CardContainer>
          <img src={data.secondImageCard} />
        </CardContainer>
        <CardContainer>
          <p>{data.secondCard.caption}</p>
          <h2>{data.secondCard.heading}</h2>
          <p>{data.secondCard.text}</p>
        </CardContainer>
        <div>
          <h1>{data.secondAboutTitle}</h1>
          <p>{data.secondBodyText}</p>
          <img src={data.secondBodyImage} />
        </div>
        <CardContainer>
          <p>{data.thirdCard.caption}</p>
          <h2>{data.thirdCard.heading}</h2>
          <p>{data.thirdCard.text}</p>
        </CardContainer>
        <CardContainer>
          <img src={data.thirdImageCard} />
        </CardContainer>
      </BodyContainer>
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
        caption,
        heading,
        text
      },
      "firstImageCard": firstImageCard.asset->url,
      secondCard{
        caption,
        heading,
        text
      },
      secondAboutTitle,
      secondBodyText,
      "imageSecond": secondAboutImage.asset->url,
      thirdCard{
        caption,
        heading,
        text
      },
      "imageThird": thirdAboutImage.asset->url,
    }[0]`
  );

  return { props: { data } };
};

export default AboutPage;
