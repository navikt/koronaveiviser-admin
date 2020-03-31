import list from "react-icons/lib/md/list";

export default {
  name: "context",
  title: "Alle situasjoner",
  icon: list,
  type: "document",
  fieldsets: [{ name: "infoset", title: "Praktisk informasjon"}],
  fields: [
    {
      name: "order",
      title: "Rekkefølge",
      description: "Fra venstre til høyre",
      type: "number"
    },
    {
      name: "context",
      title: "Arbeidsflate",
      type: "localeString"
    },
    {
      name: "title",
      title: "Tittel (vises inne i fanen)",
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
      title: "Tittel",
      type: "localeString",
      fieldset: "infoset"
    },
    {
      name: "inforefs",
      title: "Paneler",
      type: "array",
      of: [{ type: "inforef" }],
      fieldset: "infoset"
    }
  ],
  preview: {
    select: {
      title: "context.nb"
    }
  }
};
