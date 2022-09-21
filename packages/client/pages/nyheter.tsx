import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "../components/Breadcrumbs";
import CustomDatepicker from "../components/CustomDatepicker";
import Header from "../components/Header";
import News from "../components/News";
import Pagination from "../components/Pagination";
import * as S from "../components/styled/Nyheter.styled";
import BodyNormal from "../components/styled/texts/BodyNormal";
import Caption from "../components/styled/texts/Caption";
import HeadingOne from "../components/styled/texts/HeadingOne";
import HeadingTwo from "../components/styled/texts/HeadingTwo";
import getGlobalSettings from "../helpers/getGlobalSettings";
import client from "../helpers/sanity";
import Category from "../types/Category";
import GlobalSettings from "../types/GlobalSettings";
import NewsItem from "../types/NewsItem";

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
  newsItemCount: number;
}

const Nyheter: NextPage<Props> = ({
  globalSettings,
  data,
  categories,
  _newsItems,
  newsItemCount,
}) => {
  const router = useRouter();
  const [newsItems, setNewsItems] = useState(_newsItems);
  const [filteredNewsItems, setFilteredNewsItems] = useState(_newsItems);
  const [filterByCategories, setFilterByCategories] = useState<string[]>([]);
  const [filterByDate, setFilterByDate] = useState<Date | null>(null);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < Math.ceil(newsItemCount / 6)) {
      setPage(page + 1);
      router.push(`/nyheter?page=${page + 1}`, undefined, { shallow: true });
    }
  };

  const prevPage = () => {
    if (page < 3) {
      setPage(1);
      router.push("/nyheter", undefined, { shallow: true });
    } else {
      setPage(page - 1);
      router.push(`/nyheter?page=${page - 1}`, undefined, { shallow: true });
    }
  };

  const gotoPage = (newPage: number) => {
    setPage(newPage);
    router.push(`/nyheter?page=${newPage}`, undefined, { shallow: true });
  };

  const fetchNews = async (page: number): Promise<NewsItem[]> => {
    const offset = page > 0 ? (page - 1) * 6 : 0;
    const nextNews = await client.fetch(
      `
      *[_type == "newsItem" && !(_id in path("drafts.**"))] | order(date asc) | order(publishedAt desc) [$start...$end]{
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
    `,
      {
        start: offset,
        end: offset + 6,
      }
    );

    return nextNews;
  };

  const toggleFilter = (category: Category) => {
    if (filterByCategories.includes(category._id)) {
      // Remove from filter by categories list
      setFilterByCategories(
        filterByCategories.filter(
          (categoriesInList) => categoriesInList != category._id
        )
      );
    } else {
      // Add to filter by categories list
      setFilterByCategories([...filterByCategories, category._id]);
    }
  };

  useEffect(() => {
    // Filter here
    if (filterByCategories.length > 0) {
      setFilteredNewsItems(
        newsItems
          .filter((item) => {
            return item.categories.some((category) =>
              filterByCategories.includes(category._id)
            );
          })
          .filter((item) => {
            const newsItemDate = new Date(item.date);
            const newsItemYear = newsItemDate.getFullYear();

            const newsItemMonth =
              newsItemDate.getMonth() + 1 < 10
                ? `0${newsItemDate.getMonth() + 1}`
                : newsItemDate.getMonth() + 1;

            const newsItemDay =
              newsItemDate.getDate() + 1 < 10
                ? `0${newsItemDate.getDate() + 1}`
                : newsItemDate.getDate() + 1;

            const filterByYear = filterByDate.getFullYear();
            const filterByMonth =
              filterByDate.getMonth() + 1 < 10
                ? `0${filterByDate.getMonth() + 1}`
                : filterByDate.getMonth() + 1;

            const filterByDay =
              filterByDate.getDate() + 1 < 10
                ? `0${filterByDate.getDate() + 1}`
                : filterByDate.getDate() + 1;

            return (
              `${newsItemYear}-${newsItemMonth}-${newsItemDay}` ===
              `${filterByYear}-${filterByMonth}-${filterByDay}`
            );
          })
      );
    } else {
      setFilteredNewsItems(newsItems);
    }
  }, [filterByCategories, filterByDate, newsItems]);

  useEffect(() => {
    console.log("Page changed");

    (async () => {
      if (router.query.page) {
        console.log("test");

        const pageInQuery =
          typeof router.query.page === "string"
            ? parseInt(router.query.page)
            : parseInt(router.query.page[0]);

        setPage(pageInQuery);
        setNewsItems(await fetchNews(pageInQuery));
      } else {
        console.log("test again");

        setPage(1);
        setNewsItems(await fetchNews(0));
      }
    })();
  }, [router.query.page]);

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
                <DatePicker
                  selected={filterByDate}
                  onChange={(date) => setFilterByDate(date)}
                  customInput={<CustomDatepicker />}
                />
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
                    checked={filterByCategories.includes(category._id)}
                    readOnly
                  />
                  <BodyNormal>{category.title}</BodyNormal>
                </S.CategoryContainer>
              ))}
            </S.FilterBottom>
          </S.FilterContainer>
          <S.NewsItems>
            {filteredNewsItems.map((item) => (
              <News newsItem={item} key={`news-item-${item._id}`} />
            ))}
          </S.NewsItems>
        </S.NewsContainer>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          gotoPage={gotoPage}
          pages={Math.ceil(newsItemCount / 6)}
          selectedPage={page}
        />
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
    *[_type == "newsItem" && !(_id in path("drafts.**"))] | order(date asc) | order(publishedAt desc) [0...6]{
      _id,
      bodyText,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      date,
      time
    }
  `);

  const newsItemCount = await client.fetch(`
    count(*[_type == "newsItem" && !(_id in path("drafts.**"))])
  `);

  return {
    props: {
      globalSettings,
      data,
      categories,
      _newsItems: newsItems,
      newsItemCount,
    },
  };
};

export default Nyheter;
