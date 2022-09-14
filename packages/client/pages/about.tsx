import { NextPage } from "next";
import client from "../helpers/sanity";

import {
  BodyContainer,
  CardContainer,
  CardWrapper,
  HeroSection,
} from "../components/styled/About.styled";

import HeadingOne from "../components/styled/texts/HeadingOne";
import BodyNormal from "../components/styled/texts/BodyNormal";
import Caption from "../components/styled/texts/Caption";
import HeadingTwo from "../components/styled/texts/HeadingTwo";

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
    secondAboutImage: string;
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
        <CardWrapper>
          <CardContainer>
            <Caption>{data.firstCard.caption}</Caption>
            <HeadingTwo>{data.firstCard.heading}</HeadingTwo>
            <BodyNormal>{data.firstCard.text}</BodyNormal>
          </CardContainer>
          <div>
            <img src={data.firstImageCard} width={509} height={348} />
          </div>
          <div>
            <img src={data.secondImageCard} width={509} height={348} />
          </div>
          <CardContainer>
            <p>{data.secondCard.caption}</p>
            <h2>{data.secondCard.heading}</h2>
            <p>{data.secondCard.text}</p>
          </CardContainer>
        </CardWrapper>
        <div>
          <h1>{data.secondAboutTitle}</h1>
          <p>{data.secondBodyText}</p>
          <img src={data.secondAboutImage} />
        </div>
        <div>
          <p>{data.thirdCard.caption}</p>
          <h2>{data.thirdCard.heading}</h2>
          <p>{data.thirdCard.text}</p>
        </div>
        <div>
          <img src={data.thirdImageCard} />
        </div>
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
      "secondImageCard": secondImageCard.asset->url,
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
      "imageThird": thirdImageCard.asset->url,
    }[0]`
  );

  return { props: { data } };
};

export default AboutPage;
