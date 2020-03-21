import info from "react-icons/lib/md/info";

export default {
  name: "textBlockWithTitle",
  title: "seksjon",
  icon: info,
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
