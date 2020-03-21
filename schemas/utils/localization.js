const supportedLanguages = [
  { id: "nb", title: "Norsk", isDefault: true },
  { id: "en", title: "Engelsk" }
];

export const localeString = {
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      title: "Oversettelser",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations"
  }))
};

export const localeUrl = {
  name: "localeUrl",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      title: "Andre språk",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "url",
    fieldset: lang.isDefault ? null : "translations"
  }))
};

export const localeBlock = {
  name: "localeBlock",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      title: "Oversettelser",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    of: [{ type: "block" }],
    fieldset: lang.isDefault ? null : "translations"
  }))
};
