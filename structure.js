import S from "@sanity/desk-tool/structure-builder";
import person from "react-icons/lib/md/person";
import info from "react-icons/lib/go/info";
import list from "react-icons/lib/md/shuffle";
import settings from "react-icons/lib/go/settings";
import arrow from "react-icons/lib/md/subdirectory-arrow-right";

// Complete structure
export default () =>
  S.list()
    .title("Side")
    .items([
      S.listItem()
        .title("Koronaveiviser")
        .icon(arrow)
        .child(
          S.list()
            .title("Koronaveiviser")
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
                ({ spec }) => spec.id === "context"
              ),

              ...S.documentTypeListItems().filter(
                ({ spec }) => spec.id === "infopanel"
              ),

              S.documentListItem()
                .id("information")
                .schemaType("information")
                .icon(info),

              S.documentListItem()
                .id("related")
                .schemaType("related")
                .icon(list)
            ])
        ),
      S.listItem()
        .title("Selvstendig næringsdrivende")
        .icon(person)
        .child(
          S.list()
            .title("Selvstendig næringsdrivende")
            .items([
              S.documentListItem()
                .id("sn-frontpage")
                .title("Forsiden")
                .schemaType("snFrontpage")
                .icon(settings),

              ...S.documentTypeListItems().filter(
                ({ spec }) => spec.id === "snContentPage"
              )
            ])
        ),

      ...S.documentTypeListItems().filter(({ spec }) => spec.id === "alert")
    ]);
