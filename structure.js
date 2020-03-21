import S from "@sanity/desk-tool/structure-builder";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.documentListItem()
        .id("whatsYourSituation")
        .schemaType("linkList")
        .title("Hva er din situasjon?"),

      ...S.documentTypeListItems().filter(
        ({ spec }) => spec.id !== "channel" && spec.id !== "theme"
      )
    ]);
