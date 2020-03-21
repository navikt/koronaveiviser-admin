export default {
  name: "allSituations",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "localeString" }]
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
