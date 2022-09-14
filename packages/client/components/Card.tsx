import { FC } from "react";
import CardType from "../types/Card";
import * as S from "./styled/Card.styled";

interface Props {
  data: CardType;
}

const Card: FC<Props> = ({ data }) => {
  return (
    <S.Card
      width={data._type}
      background={data.background === "Grön" ? "green" : "white"}
    ></S.Card>
  );
};

export default Card;
