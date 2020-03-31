import S from "@sanity/desk-tool/structure-builder";
import person from "react-icons/lib/md/person";
import list from "react-icons/lib/md/shuffle";
import info from "react-icons/lib/go/info";
import settings from "react-icons/lib/md/settings";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.documentListItem()
        .id("frontpage")
        .title("Innstillinger")
        .schemaType("page")
        .icon(settings),

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
      .icon(info),

      S.documentListItem()
        .id("related")
        .schemaType("related")
        .icon(list)
    ]);
