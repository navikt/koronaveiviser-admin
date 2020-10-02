export default {
  title: "Hero",
  name: "hero",
  type: "object",
  fields: [
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
      description: "Valgfritt. Kun anbefalt når boksen står som øverste og viktigste element på siden",
      name: "heroImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Reklamelenketekst",
      description: "Valgfritt. Brukes som 'call to action' på lenke videre.",
      name: "heroLinkText",
      type: "localeString"
    },
    {
      title: "Reklame URL",
      description: "Selve lenken videre. VIKTIG: hvis dette feltet står tomt, vil ikke lenkeknappen synes. This is a feature, not a bug :)",
      name: "heroURL",
      type: "localeUrl"
    }
  ],
  preview: {
    select: {
      title: "contentBoxTitle.nb"
    }
  }
};
