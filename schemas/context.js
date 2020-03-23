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
      name: "context",
      title: "Arbeidsflate",
      type: "localeString"
    },
    {
      name: "description",
      title: "Temaer",
      type: "array",
      of: [{ type: "linkList" }]
    }
  ],
  preview: {
    select: {
      title: "context.nb"
    }
  }
};