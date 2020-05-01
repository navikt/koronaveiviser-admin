export default {
  title: "Ekspanderende boks",
  name: "expandingBox",
  type: "object",
  fields: [
    {
      title: "Overskrift",
      name: "expandingBoxTitle",
      type: "localeString"
    },
    {
      title: "Tekst for åpne-knapp",
      name: "expandingBoxOpenText",
      type: "localeString"
    },
    {
      title: "Tekst for lukk-knapp",
      name: "expandingBoxCloseText",
      type: "localeString"
    },
    {
      title: "Innhold",
      name: "expandingBoxBody",
      type: "localeBlock"
    }
  ],
  preview: {
    select: {
      title: "expandingBoxTitle.nb"
    }
  }
};
