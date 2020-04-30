export default {
  title: "Innholdsboks",
  name: "contentBox",
  type: "object",
  fields: [
    {
      title: "Overskrift",
      name: "contentBoxTitle",
      type: "localeString"
    },
    {
      title: "Innhold",
      name: "contentBoxBody",
      type: "localeBlock"
    }
  ],
  preview: {
    select: {
      title: "contentBoxTitle.nb"
    }
  }
};
