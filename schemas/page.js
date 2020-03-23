export default {
  name: "page",
  type: "object",
  fields: [
    {
      name: "pageTitle",
      title: "Sidetittel",
      type: "localeString"
    },
    {
      name: "metaDescription",
      title: "Metabeskrivelse",
      type: "localeBlock"
    }
  ],
  preview: {
    select: {
      title: "pageTitle.nb"
    }
  }
};
