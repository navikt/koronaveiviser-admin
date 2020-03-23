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
    },
    {
      name: "anchor",
      title: "ID / Anker",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "title.nb",
      anchor: "anchor"
    },
    prepare(selection) {
      const { title, anchor } = selection;
      return {
        title: title,
        ...(anchor && {
          subtitle: `https://www.nav.no/person/koronaveiviser/#${anchor}`
        })
      };
    }
  }
};
