import arrow from "react-icons/lib/md/keyboard-arrow-down";

export default {
  name: "textBlockWithTitle",
  title: "seksjon",
  icon: arrow,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "description",
      title: "Temaer",
      type: "localeBlock"
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
