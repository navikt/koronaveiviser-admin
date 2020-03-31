
export default {
  name: "inforef",
  type: "object",
  fields: [
    {
      name: "ref",
      title: "Praktisk info",
      type: "reference",
      to: [{type: "infopanel"}]
    },
    {
      name: "anchor",
      description: "https://www.nav.no/person/koronaveiviser/#arbeidsflate-id_info-id",
      title: "Info-id / anker",
      type: "slug"
    },
  ],
  preview: {
    select: {
      title: "ref.title.nb",
      anchor: "anchor.current"
    },
    prepare(selection) {
      const { title, anchor } = selection;

      return {
        title: title,
        subtitle: anchor ? "https://www.nav.no/person/koronaveiviser/#arbeidsflate-id_"+anchor : null
      }
    }
  }
};
