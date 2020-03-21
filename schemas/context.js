export default {
  name: "context",
  title: "Alle situasjoner",
  type: "document",
  fields: [
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
