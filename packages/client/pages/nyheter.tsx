import { NextPage } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import getGlobalSettings from "../helpers/getGlobalSettings";
import GlobalSettings from "../types/GlobalSettings";

interface Props {
  globalSettings: GlobalSettings;
}

const Nyheter: NextPage<Props> = ({ globalSettings }) => {
  return (
    <>
      <Header settings={globalSettings} />
      <Breadcrumbs />
    </>
  );
};

export const getServerSideProps = async () => {
  const globalSettings = await getGlobalSettings();

  return { props: { globalSettings } };
};

export default Nyheter;
