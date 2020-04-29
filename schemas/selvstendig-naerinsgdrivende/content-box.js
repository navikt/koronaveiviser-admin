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
      type: "array",
      of: [{ type: "block" }]
    }
    // Kan hende det kommer flere felt enn dette, men vi begynner her.
  ]
};
