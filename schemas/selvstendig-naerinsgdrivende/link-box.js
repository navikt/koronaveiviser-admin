export default {
  title: "Lenkeboks",
  name: "linkBox",
  type: "object",
  fields: [
    {
      title: "Overskrift",
      name: "linkBoxTitle",
      type: "string"
    },
    {
      title: "Emneknagg",
      description:
        "Velg tilknyttet produkt eller område som skal synes i lenkeboksen. For eksempel: sykepenger, økonomisk sosialhjelp, eller skatteetaten",
      name: "subjectTag",
      type: "string"
    },
    {
      title: "Ikon",
      name: "linkBoxIcon",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "URL",
      description:
        "Sett in lenken til siden som skal lenkes til. Greit med 'Gå til' når vi lenker til ikke-NAV sider.",
      name: "associatedURL",
      type: "url"
    }
  ]
};
