import tab from "react-icons/lib/md/tab";

export default {
  name: "linkList",
  icon: tab,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "links",
      title: "Lenker",
      type: "array",
      of: [{ type: "link" }]
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
