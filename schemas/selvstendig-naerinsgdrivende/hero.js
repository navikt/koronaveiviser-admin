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
    }
  ],
  preview: {
    select: {
      title: "contentBoxTitle.nb"
    }
  }
};
