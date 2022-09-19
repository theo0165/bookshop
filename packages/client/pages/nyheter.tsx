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
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";

interface Category {
  _id: string;
  title: string;
}

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
  categories: Category[];
}

const Nyheter: NextPage<Props> = ({ globalSettings, data, categories }) => {
  const [filterByCategories, setFilterByCategories] = useState<Category[]>([]);

  const toggleFilter = (category: Category) => {
    if (filterByCategories.includes(category)) {
      console.log("is in list");

      // Remove from filter by categories list
      setFilterByCategories(
        filterByCategories.filter(
          (categoriesInList) => categoriesInList._id != category._id
        )
      );
    } else {
      console.log("Is not in list");

      // Add to filter by categories list
      setFilterByCategories([...filterByCategories, category]);
    }
  };

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
              <S.Button greenBg>
                <a href={`mailto:${globalSettings.email}`}>
                  <Caption>Kontakt</Caption>
                </a>
              </S.Button>
            </S.Card>
            <S.Card bg="white">
              <Caption>Erbjudande</Caption>
              <HeadingTwo>{data.secondCard.title}</HeadingTwo>
              <BodyNormal>{data.secondCard.bodyText}</BodyNormal>
              <S.Button>
                <a href={`mailto:${globalSettings.email}`}>
                  <Caption>Kontakt</Caption>
                </a>
              </S.Button>
            </S.Card>
          </S.Cards>
        </S.CardContainer>
        <S.NewsContainer>
          <HeadingOne>Vad händer hos oss?</HeadingOne>
          <S.FilterContainer>
            <S.FilterTop>
              <Caption>Filtrera</Caption>
              <S.DateContainer>
                <div>
                  <AiOutlineCalendar />
                </div>
                <BodyNormal>Datum</BodyNormal>
              </S.DateContainer>
            </S.FilterTop>
            <S.FilterBottom>
              {categories.map((category) => (
                <S.CategoryContainer
                  key={`category-${category._id}`}
                  onClick={() => toggleFilter(category)}
                >
                  <S.CategoryCheckbox
                    type="checkbox"
                    checked={filterByCategories.includes(category)}
                    readOnly
                  />
                  <BodyNormal>{category.title}</BodyNormal>
                </S.CategoryContainer>
              ))}
            </S.FilterBottom>
          </S.FilterContainer>
        </S.NewsContainer>
      </S.Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();

  const data = await client.fetch(`
    *[_type == "newsPage" && !(_id in path("drafts.**"))][0]
  `);

  const categories = await client.fetch(`
    *[_type == "category" && !(_id in path("drafts.**"))]{
      _id,
      title
    }
  `);

  return { props: { globalSettings, data, categories } };
};

export default Nyheter;
