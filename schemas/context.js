import list from "react-icons/lib/md/list";

export default {
  name: "context",
  title: "Alle situasjoner",
  icon: list,
  type: "document",
  fields: [
    {
      name: "order",
      title: "Rekkefølge",
      description: "Fra venstre til høyre",
      type: "number"
    },
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "context",
      title: "Arbeidsflate",
      type: "localeString"
    },
    {
      name: "anchor",
      description: "https://www.nav.no/person/koronaveiviser/#arbeidsflate-id",
      title: "Arbeidsflate-id / anker",
      type: "slug",
    },
    {
      name: "description",
      title: "Temaer",
      type: "array",
      of: [{ type: "linkList" }]
    },
    {
      name: "infotitle",
      title: "Praktisk informasjon tittel",
      type: "localeString"
    },
    {
      name: "inforefs",
      title: "Praktisk informasjon",
      type: "array",
      of: [{ type: "inforef" }]
    }
  ],
  preview: {
    select: {
      title: "context.nb"
    }
  }
};
