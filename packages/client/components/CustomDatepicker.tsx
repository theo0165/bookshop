import { forwardRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import * as S from "./styled/CustomDatepicker.styled";
import BodyNormal from "./styled/texts/BodyNormal";

interface Props {
  value?: string | null;
  onClick?: () => void;
}

const CustomDatepicker = forwardRef<HTMLDivElement, Props>(
  ({ value, onClick }, ref) => {
    return (
      <S.DateContainer ref={ref} onClick={onClick}>
        <div>
          <AiOutlineCalendar />
        </div>
        <BodyNormal>Datum</BodyNormal>
      </S.DateContainer>
    );
  }
);

CustomDatepicker.displayName = "CustomDatepicker";

export default CustomDatepicker;
