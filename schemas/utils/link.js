export default {
  name: "link",
  type: "object",
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
