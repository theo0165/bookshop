import { NextPage } from "next";
import client from "../helpers/sanity";

import {
  BodyContainer,
  CardContainer,
  CardWrapper,
  HeroSection,
  HeroSectionTwo,
  ImageChild,
  ImageWrapper,
  TextWrapperFirst,
  TextWtapperSecond,
} from "../components/styled/About.styled";

import HeadingOne from "../components/styled/texts/HeadingOne";
import BodyNormal from "../components/styled/texts/BodyNormal";
import Caption from "../components/styled/texts/Caption";
import HeadingTwo from "../components/styled/texts/HeadingTwo";
import Header from "../components/Header";
import GlobalSettings from "../types/GlobalSettings";
import getGlobalSettings from "../helpers/getGlobalSettings";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { HeroImage } from "../components/styled/Homepage.styled";

interface Props {
  globalSettings: GlobalSettings;
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

const AboutPage: NextPage<Props> = ({ data, globalSettings }) => {
  return (
    <>
      <Header settings={globalSettings} />
      <BodyContainer>
        <Breadcrumbs />
        <HeroSection>
          <TextWrapperFirst>
            <HeadingOne>{data.firstAboutTitle}</HeadingOne>

            {data.firstBodyText?.split("\n\n").map((section, index) => (
              <BodyNormal key={`firstBodyText${index}`}>{section}</BodyNormal>
            ))}
          </TextWrapperFirst>
          <HeroImage src={data.image} />
        </HeroSection>
        <CardWrapper>
          <CardContainer order="2">
            <Caption>{data.firstCard.caption}</Caption>
            <HeadingTwo>{data.firstCard.heading}</HeadingTwo>
            <BodyNormal>{data.firstCard.text}</BodyNormal>
          </CardContainer>
          <ImageWrapper order="1">
            <ImageChild src={data.firstImageCard} />
          </ImageWrapper>
          <ImageWrapper order="4">
            <ImageChild src={data.secondImageCard} />
          </ImageWrapper>
          <CardContainer order="3">
            <Caption>{data.secondCard.caption}</Caption>
            <HeadingTwo>{data.secondCard.heading}</HeadingTwo>
            {data.secondCard.text?.split("\n\n").map((section, index) => (
              <BodyNormal key={`info-text-${index}`}>{section}</BodyNormal>
            ))}
          </CardContainer>
        </CardWrapper>
        <HeroSectionTwo>
          <HeroImage src={data.imageSecond} />
          <TextWtapperSecond>
            <HeadingOne>{data.secondAboutTitle}</HeadingOne>
            {data.secondBodyText?.split("\n\n").map((section, index) => (
              <BodyNormal key={`info-text-${index}`}>{section}</BodyNormal>
            ))}
          </TextWtapperSecond>
        </HeroSectionTwo>
        <CardWrapper>
          <CardContainer order="1">
            <Caption>{data.thirdCard.caption}</Caption>
            <HeadingTwo>{data.thirdCard.heading}</HeadingTwo>
            <BodyNormal>{data.thirdCard.text}</BodyNormal>
          </CardContainer>
          <ImageWrapper order="2">
            <ImageChild src={data.imageThird} />
          </ImageWrapper>
        </CardWrapper>
        <Footer settings={globalSettings} />
      </BodyContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();

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

  return { props: { data, globalSettings } };
};

export default AboutPage;
