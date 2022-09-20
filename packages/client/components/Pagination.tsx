import { FC } from "react";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
  gotoPage: (page: number) => void;
}

const Pagination: FC<Props> = ({ nextPage, prevPage, gotoPage }) => {
  return <></>;
};

export default Pagination;
