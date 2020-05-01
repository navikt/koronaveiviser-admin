export default {
  title: "Sideseksjon",
  name: "pageSection",
  type: "object",
  fields: [
    {
      title: "Skjul overskrift",
      name: "hideName",
      type: "boolean"
    },
    {
      title: "Seksjonsnavn/overskrift",
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
      name: "alertRefs",
      title: "Varsler",
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
