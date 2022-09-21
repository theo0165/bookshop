import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import translateBreadcrumb from "../helpers/translateBreadcrumb";
import * as S from "./styled/Breadcrumbs.styled";
import Caption from "./styled/texts/Caption";

const Breadcrumbs: FC = () => {
  const router = useRouter();

  return (
    <S.BreadcrumbContainer>
      <Caption>/</Caption>
      <Link href="/">
        <a>
          <Caption>hem</Caption>
        </a>
      </Link>
      {router.asPath.split("/").map(
        (path: string, index: number) =>
          path != "" && (
            <span key={`breadcrumb-${index}`}>
              <Caption>/</Caption>
              <Link href={`/${path}`}>
                <a>
                  <Caption>{translateBreadcrumb(path)}</Caption>
                </a>
              </Link>
            </span>
          )
      )}
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumbs;
