import { NextPage } from "next";
import client from "../helpers/sanity";

import {
  BodyContainer,
  CardContainer,
  CardWrapper,
  HeroSection,
  TextWtapperFirst,
  TextWtapperSecond,
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
    imageSecond: string;
    thirdCard: {
      caption: string;
      heading: string;
      text: string;
    };
    imageThird: string;
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
          <TextWtapperFirst>
            <HeadingOne>{data.firstAboutTitle}</HeadingOne>
            <BodyNormal>{data.firstBodyText}</BodyNormal>
            {/* {data.infoText?.split("\n\n").map((section, index) => (
  <p key={`info-text-${index}`}>{section}</p>
))} */}
          </TextWtapperFirst>
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
            <Caption>{data.secondCard.caption}</Caption>
            <HeadingTwo>{data.secondCard.heading}</HeadingTwo>
            <BodyNormal>{data.secondCard.text}</BodyNormal>
          </CardContainer>
        </CardWrapper>
        <HeroSection>
          <img src={data.imageSecond} />
          <TextWtapperSecond>
            <HeadingOne>{data.secondAboutTitle}</HeadingOne>
            <BodyNormal>{data.secondBodyText}</BodyNormal>
          </TextWtapperSecond>
        </HeroSection>
        <CardWrapper>
          <CardContainer>
            <Caption>{data.thirdCard.caption}</Caption>
            <HeadingTwo>{data.thirdCard.heading}</HeadingTwo>
            <BodyNormal>{data.thirdCard.text}</BodyNormal>
          </CardContainer>
          <div>
            <img src={data.imageThird} width={509} height={348} />
          </div>
        </CardWrapper>
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
