// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import alert from "./alert";
import context from "./context";
import information from "./information";
import link from "./utils/link";
import linkList from "./utils/link-list";
import related from "./related";
import page from "./page";
import textBlockWithTitle from "./utils/text-block-with-title";
import { localeBlock, localeString, localeUrl } from "./utils/localization";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Content types
    page,
    context,
    alert,
    link,
    linkList,
    textBlockWithTitle,
    information,
    related,

    // Localization
    localeString,
    localeBlock,
    localeUrl
  ])
});
