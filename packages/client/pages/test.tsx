import { NextPage } from "next";
import client from "../helpers/sanity";

interface Props {
  data: {
    title: string;
    bodyText: string;
    date: string | null;
    image: string;
  };
}

const Test: NextPage<Props> = ({ data }) => {
  return (
    <>
      <p>{data.bodyText}</p>
      <img src={data.image} />
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await client.fetch(
    `*[_type == 'newsItem' && !(_id in path("drafts.**"))]{
        title,
        bodyText,
        date,
        "image": image.asset->url
    }[0]`
  );

  return { props: { data } };
};

export default Test;
