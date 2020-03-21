import S from "@sanity/desk-tool/structure-builder";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.documentListItem()
        .id("whatsYourSituation")
        .schemaType("whatsYourSituation")
        .title("Hva er din situasjon?"),

      S.documentListItem()
        .id("allSituations")
        .schemaType("allSituations")
        .title("Alle situasjoner"),

      ...S.documentTypeListItems().filter(
        ({ spec }) => spec.id !== "channel" && spec.id !== "theme"
      )
    ]);
