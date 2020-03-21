import info from "react-icons/lib/md/info";

export default {
  name: "information",
  icon: info,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "sections",
      title: "Seksjoner",
      type: "array",
      of: [{ type: "textBlockWithTitle" }]
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
