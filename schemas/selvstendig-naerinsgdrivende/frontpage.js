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
      title: "Ingresstekst",
      description: "Valgfritt: legg inn en kort introduksjon",
      name: "pageIntroduction",
      type: "localeString"
    },
    {
      title: "Reklametittel",
      name: "heroTitle",
      type: "localeString"
    },
    {
      title: "Reklameinnhold",
      name: "heroContent",
      type: "localeBlock"
    },
    {
      title: "Reklamebilde",
      name: "heroImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Reklamelenketekst",
      description: "Brukes som 'call to action' på lenke videre",
      name: "heroLinkText",
      type: "localeString"
    },
    {
      title: "Reklame URL",
      description: "Dit vi skal lenke hen",
      name: "heroURL",
      type: "localeUrl"
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
