import GlobalSettings from "../types/GlobalSettings";
import client from "./sanity";

const getGlobalSettings = async (): Promise<GlobalSettings> => {
  const globalSettings = await client.fetch<GlobalSettings>(`
    *[_type == "globalSettings" && !(_id in path("drafts.**"))]{
      title,
      "logo": logo.asset->url,
      "mobileLogo": mobileLogo.asset->url,
      openingHours,
      address,
      email,
      number,
      facebook,
      instagram
    }[0]
  `);

  return globalSettings;
};

export default getGlobalSettings;
