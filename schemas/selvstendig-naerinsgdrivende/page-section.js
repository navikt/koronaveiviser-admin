export default {
  title: "Sideseksjon",
  name: "pageSection",
  type: "object",
  fields: [
    {
      title: "Seksjonsnavn",
      name: "sectionName",
      type: "string"
    },
    {
      title: "Seksjonsinnhold",
      name: "sectionContent",
      type: "array",
      of: [{ type: "linkBox" }, { type: "contentBox" }]
    }
  ]
};
