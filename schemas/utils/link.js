import arrow from "react-icons/lib/md/keyboard-arrow-right";

export default {
  name: "link",
  type: "object",
  icon: arrow,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString"
    },
    {
      name: "url",
      title: "Lenke",
      type: "localeUrl"
    }
  ],
  preview: {
    select: {
      title: "title.nb"
    }
  }
};
