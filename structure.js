import S from "@sanity/desk-tool/structure-builder";
import person from "react-icons/lib/md/person";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.documentListItem()
        .id("whatsYourSituation")
        .schemaType("linkList")
        .title("Hva er din situasjon?")
        .icon(person),

      ...S.documentTypeListItems().filter(
        ({ spec }) => spec.id !== "channel" && spec.id !== "theme"
      )
    ]);
