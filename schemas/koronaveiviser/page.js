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
      type: "localeString"
    }
  ],
  preview: {
    select: {
      title: "pageTitle.nb"
    }
  }
};
