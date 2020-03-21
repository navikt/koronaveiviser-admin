import S from "@sanity/desk-tool/structure-builder";
import person from "react-icons/lib/md/person";
import info from "react-icons/lib/go/info";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.documentListItem()
        .id("whatsYourSituation")
        .schemaType("linkList")
        .icon(person),

      ...S.documentTypeListItems().filter(
        ({ spec }) => spec.id !== "channel" && spec.id !== "theme"
      ),

      S.documentListItem()
        .id("information")
        .schemaType("information")
        .icon(info)
    ]);
