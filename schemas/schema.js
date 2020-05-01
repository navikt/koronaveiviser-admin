// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import alert from "./alert";
import context from "./koronaveiviser/context";
import infopanel from "./koronaveiviser/information";
import informationOld from "./koronaveiviser/information-old";
import link from "./utils/link";
import linkList from "./utils/link-list";
import textBlockWithTitle from "./utils/text-block-with-title";
import related from "./koronaveiviser/related";
import page from "./koronaveiviser/page";
import snFrontpage from "./selvstendig-naerinsgdrivende/frontpage";
import snContentPage from "./selvstendig-naerinsgdrivende/content-page";
import snPageSection from "./selvstendig-naerinsgdrivende/page-section";
import snLinkBox from "./selvstendig-naerinsgdrivende/link-box";
import snContentBox from "./selvstendig-naerinsgdrivende/content-box";
import snExpandingBox from "./selvstendig-naerinsgdrivende/expanding-box";
import snSubSection from "./selvstendig-naerinsgdrivende/sub-section";
import snHero from "./selvstendig-naerinsgdrivende/hero";
import { localeBlock, localeString, localeUrl } from "./utils/localization";
import inforef from "./utils/information-ref";

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
    related,
    infopanel,
    inforef,

    // Fjern etter at ny frontend er i prod
    informationOld,
    textBlockWithTitle,

    // Selvstendig næringsdrivende
    snFrontpage,
    snContentPage,
    snPageSection,
    snLinkBox,
    snContentBox,
    snExpandingBox,
    snSubSection,
    snHero,

    // Localization
    localeString,
    localeBlock,
    localeUrl
  ])
});
