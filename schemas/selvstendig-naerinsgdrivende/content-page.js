import info from "react-icons/lib/md/info";

export default {
  title: "Innholdssider",
  name: "snContentPage",
  icon: info,
  type: "document",
  fields: [
    {
      title: "Sidetittel",
      name: "pageTitle",
      type: "localeString"
    },
    {
      title: "Slug",
      description: "Hva lenken til siden skal være",
      name: "pageSlug",
      type: "slug"
    },
    {
      title: "Ingresstekst",
      description: "Valgfritt: legg inn en kort introduksjon",
      name: "pageIntroduction",
      type: "localeBlock"
    },
    {
      title: "Hovedinnhold",
      name: "mainPageContent",
      type: "array",
      of: [{ type: "pageSection" }]
    },
    {
      title: "Lenkeseksjonstittel",
      description:
        "Valgfritt, men kanskje smart. For eksempel: 'Lenker videre'.",
      name: "linksSectionTitle",
      type: "localeString"
    },
    {
      title: "Lenkebokser",
      description: "Valgfritt",
      name: "linkBoxes",
      type: "array",
      of: [{ type: "linkBox" }]
    }
  ]
};
