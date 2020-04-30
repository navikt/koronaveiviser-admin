export default {
  title: "Sideseksjon",
  name: "pageSection",
  type: "object",
  fields: [
    {
      title: "Seksjonsnavn",
      name: "sectionName",
      type: "localeString"
    },
    {
      title: "Seksjonsinnhold",
      name: "sectionContent",
      type: "array",
      of: [{ type: "linkBox" }, { type: "contentBox" }]
    },
    {
      name: "alerts",
      title: "Varsler.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "alert"}] }]
    }
  ],
  preview: {
    select: {
      title: "sectionName.nb"
    }
  }
};
