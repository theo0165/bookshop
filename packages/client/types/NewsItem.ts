import Category from "./Category";

interface NewsItem {
  _id: string;
  bodyText: string;
  categories: Category[];
  date: string | null;
  time: string | null;
  image: string;
  slug: string;
  title: string;
}

export default NewsItem;
