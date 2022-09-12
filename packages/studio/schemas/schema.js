// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import globalSettings from "./documents/globalSettings";
import categories from "./documents/categories";
import newsItem from "./documents/newsItem";
import aboutPage from "./documents/pages/aboutPage";
import card from "./objects/card";
import frontpage from "./documents/pages/frontpage";
import halfRow from "./objects/halfRow";
import fullRow from "./objects/fullRow";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    frontpage,
    globalSettings,
    categories,
    newsItem,
    aboutPage,
    card,

    // ---
    halfRow,
    fullRow,
  ]),
});
