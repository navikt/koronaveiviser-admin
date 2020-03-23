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
      description: "https://www.nav.no/person/koronaveiviser/#ditt-anker",
      title: "ID / Anker",
      type: "slug"
    }
  ],
  preview: {
    select: {
      title: "title.nb",
      anchor: "anchor.current"
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
