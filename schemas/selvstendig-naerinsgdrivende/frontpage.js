export default {
  title: "SN&F sin landingsside",
  name: "snFrontpage",
  type: "object",
  fields: [
    {
      title: "Sidetittel",
      name: "pageTitle",
      type: "string"
    },
    {
      title: "Ingresstekst",
      description: "Valgfritt: legg inn en kort introduksjon",
      name: "pageIntroduction",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Reklametittel",
      name: "heroTitle",
      type: "string"
    },
    {
      title: "Reklameinnhold",
      name: "heroContent",
      type: "array",
      of: [{ type: "block" }]
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
      type: "string"
    },
    {
      title: "Reklame URL",
      description: "Dit vi skal lenke hen",
      name: "heroURL",
      type: "url"
    },
    {
      title: "Hovedinnhold",
      name: "mainPageContent",
      type: "array",
      of: [{ type: "pageSection" }]
    }
  ]
};
