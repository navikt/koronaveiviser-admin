export default {
  title: "SN&F sin landingsside",
  name: "snFrontpage",
  type: "object",
  fields: [
    {
      title: "Sidetittel",
      name: "pageTitle",
      type: "localeString"
    },
    {
      title: "Metabeskrivelse",
      name: "metaDescription",
      type: "localeString"
    },
    {
      title: "Ingresstekst",
      description: "Valgfritt: legg inn en kort introduksjon",
      name: "pageIntroduction",
      type: "localeString"
    },
    {
      title: "Reklame",
      name: "hero",
      options: {
        collapsible: true
      },
      type: "hero"
    },
    {
      title: "Hovedinnhold",
      name: "mainPageContent",
      type: "array",
      of: [{ type: "pageSection" }]
    }
  ],
  preview: {
    select: {
      title: "pageTitle.nb"
    }
  }
};
