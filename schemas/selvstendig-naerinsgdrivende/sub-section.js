export default {
  title: "Underseksjon",
  name: "subSection",
  type: "object",
  fields: [
    {
      title: "Mellomoverskrift",
      description:
        "Valgfritt, hvis du vil fordele innholdet nøyere innen en seksjon",
      name: "subHeading",
      type: "string"
    },
    {
      title: "Innholdet til underseksjon",
      description: "Legg inn ett eller flere avsnitt med vanlig tekst",
      name: "subSectionContent",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};
