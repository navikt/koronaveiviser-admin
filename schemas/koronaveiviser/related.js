export default {
  name: "related",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "description",
      title: "Lenker",
      type: "array",
      of: [{ type: "link" }]
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
