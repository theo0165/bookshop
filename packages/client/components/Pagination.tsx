import { FC } from "react";
import * as S from "./styled/Pagination.styled";
import Caption from "./styled/texts/Caption";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
  gotoPage: (page: number) => void;
  pages: number;
  selectedPage: number;
}

/*
  If more than 6 pages: show page 1 - 4 ... lastPage
    When on page 3: show page 1 ... 2 3 4 ... lastPage
 */

const Pagination: FC<Props> = ({
  nextPage,
  prevPage,
  gotoPage,
  pages,
  selectedPage,
}) => {
  return (
    <S.Container>
      <S.Prev onClick={prevPage}>
        <Caption>Föregående</Caption>
      </S.Prev>
      <S.Pages>
        {pages >= 6 && selectedPage <= 2 && (
          <>
            {[...Array(4)].map((_, i) => (
              <S.Page
                isSelected={selectedPage === i + 1}
                key={`page-${i + 1}`}
                onClick={() => gotoPage(i + 1)}
              >
                {i + 1}
              </S.Page>
            ))}
            <Caption>...</Caption>
            <S.Page
              isSelected={selectedPage === pages}
              onClick={() => gotoPage(pages)}
            >
              {pages}
            </S.Page>
          </>
        )}

        {pages >= 6 && selectedPage > 2 && selectedPage < pages - 2 && (
          <>
            <S.Page isSelected={false} onClick={() => gotoPage(1)}>
              1
            </S.Page>

            <Caption>...</Caption>

            <S.Page
              isSelected={false}
              onClick={() => gotoPage(selectedPage - 1)}
            >
              {selectedPage - 1}
            </S.Page>

            <S.Page
              isSelected={true}
              key={`page-${selectedPage}`}
              onClick={() => gotoPage(selectedPage)}
            >
              {selectedPage}
            </S.Page>

            <S.Page
              isSelected={false}
              onClick={() => gotoPage(selectedPage + 1)}
            >
              {selectedPage + 1}
            </S.Page>

            <Caption>...</Caption>
            <S.Page isSelected={false} onClick={() => gotoPage(pages)}>
              {pages}
            </S.Page>
          </>
        )}

        {/* Missing: when more than 6 pages and user is on second to last and last page */}
        {pages > 6 &&
          (selectedPage === pages - 1 || selectedPage === pages - 2) && (
            <>
              <S.Page isSelected={false} onClick={() => gotoPage(1)}>
                1
              </S.Page>
              <Caption>...</Caption>
              <S.Reverse>
                {[...Array(4)].map((_, i) => (
                  <S.Page
                    isSelected={selectedPage === pages - i}
                    key={`page-${pages - i}`}
                    onClick={() => gotoPage(pages - i)}
                  >
                    {pages - i}
                  </S.Page>
                ))}
              </S.Reverse>
            </>
          )}

        {pages < 6 &&
          [...Array(pages)].map((_, i) => (
            <S.Page
              isSelected={selectedPage === i + 1}
              key={`page-${i + 1}`}
              onClick={() => gotoPage(i + 1)}
            >
              {i + 1}
            </S.Page>
          ))}
      </S.Pages>
      <S.Next onClick={nextPage}>
        <Caption>Nästa Sida</Caption>
      </S.Next>
    </S.Container>
  );
};

export default Pagination;
