export default {
  title: "Ekspanderende boks",
  name: "expandingBox",
  type: "object",
  fields: [
    {
      title: "Overskrift",
      name: "contentBoxTitle",
      type: "localeString"
    },
    {
      title: "Tekst for åpne-knapp",
      name: "contentBoxOpenText",
      type: "localeString"
    },
    {
      title: "Tekst for lukk-knapp",
      name: "contentBoxCloseText",
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
