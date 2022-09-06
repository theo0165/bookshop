import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-09-06",
  useCdn: false,
});

export default client;
