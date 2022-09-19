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
import { useEffect, useState } from "react";
import Category from "../types/Category";
import NewsItem from "../types/NewsItem";
import News from "../components/News";

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
  _newsItems: NewsItem[];
}

const Nyheter: NextPage<Props> = ({
  globalSettings,
  data,
  categories,
  _newsItems,
}) => {
  const [newsItems, setNewsItems] = useState(_newsItems);
  const [filteredNewsItems, setFilteredNewsItems] = useState(_newsItems);
  const [filterByCategories, setFilterByCategories] = useState<Category[]>([]);

  const toggleFilter = (category: Category) => {
    if (filterByCategories.includes(category)) {
      // Remove from filter by categories list
      setFilterByCategories(
        filterByCategories.filter(
          (categoriesInList) => categoriesInList._id != category._id
        )
      );
    } else {
      // Add to filter by categories list
      setFilterByCategories([...filterByCategories, category]);
    }
  };

  useEffect(() => {
    // Filter here
  }, [filterByCategories]);

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
          <S.NewsItems>
            {filteredNewsItems.map((item) => (
              <News newsItem={item} />
            ))}
          </S.NewsItems>
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

  const newsItems = await client.fetch(`
    *[_type == "newsItem" && !(_id in path("drafts.**"))]{
      _id,
      bodyText,
      title,
      "slug": slug.current,
      "categories": categories[]{
        "_id": @->_id,
        "title": @->title
      },
      "image": image.asset->url,
      date,
      time
    }
  `);

  return { props: { globalSettings, data, categories, _newsItems: newsItems } };
};

export default Nyheter;
