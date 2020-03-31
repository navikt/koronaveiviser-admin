import info from "react-icons/lib/md/info";

export default {
  name: "infopanel",
  title: "Praktisk informasjon",
  type: "document",
  icon: info,
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
