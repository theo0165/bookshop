import { NextPage } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import getGlobalSettings from "../helpers/getGlobalSettings";
import GlobalSettings from "../types/GlobalSettings";
import * as S from "../components/styled/Nyheter.styled";
import Caption from "../components/styled/texts/Caption";
import HeadingOne from "../components/styled/texts/HeadingOne";
import client from "../helpers/sanity";
import HeadingTwo from "../components/styled/texts/HeadingTwo";
import BodyNormal from "../components/styled/texts/BodyNormal";

interface Props {
  globalSettings: GlobalSettings;
  data: {
    title: string;
    firstCard: {
      title: string;
      bodyText: string;
    };
    secondCard: {
      title: string;
      bodyText: string;
    };
  };
}

const Nyheter: NextPage<Props> = ({ globalSettings, data }) => {
  console.log(data);

  return (
    <>
      <Header settings={globalSettings} />
      <Breadcrumbs />
      <S.Container>
        <S.CardContainer>
          <HeadingOne>Evenemang</HeadingOne>
          <S.Cards>
            <S.Card bg="green">
              <Caption>Erbjudande</Caption>
              <HeadingTwo>{data.firstCard.title}</HeadingTwo>
              <BodyNormal>{data.firstCard.bodyText}</BodyNormal>
              <S.Button>
                <Caption>Kontakt</Caption>
              </S.Button>
            </S.Card>
            <S.Card bg="white">
              <Caption>Erbjudande</Caption>
              <HeadingTwo>{data.secondCard.title}</HeadingTwo>
              <BodyNormal>{data.secondCard.bodyText}</BodyNormal>
              <S.Button>
                <Caption>Kontakt</Caption>
              </S.Button>
            </S.Card>
          </S.Cards>
        </S.CardContainer>
      </S.Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();

  const data = await client.fetch(`
    *[_type == "newsPage" && !(_id in path("drafts.**"))][0]
  `);

  return { props: { globalSettings, data } };
};

export default Nyheter;
