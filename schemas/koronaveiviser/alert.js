import info from "react-icons/lib/go/info";
import success from "react-icons/lib/go/check";
import advarsel from "react-icons/lib/go/alert";
import error from "react-icons/lib/go/x";
import Checkboxes from "../../components/Checkboxes";

const types = {
  info: "Info",
  suksess: "Suksess",
  advarsel: "Advarsel",
  feil: "Feil"
};

export default {
  name: "alert",
  title: "Driftsmeldinger",
  fieldsets: [{ name: "display", title: "Visning" }],
  type: "document",
  icon: advarsel,
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        layout: "radio",
        list: [
          {
            title: types["info"],
            value: "info"
          },
          {
            title: types["suksess"],
            value: "suksess"
          },
          {
            title: types["advarsel"],
            value: "advarsel"
          },
          {
            title: types["feil"],
            value: "feil"
          }
        ]
      }
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "localeBlock"
    },
    {
      name: "displayOnAllPages",
      title: "Vis på alle sider",
      fieldset: "display",
      type: "boolean",
      value: true
    },
    {
      name: "displayOnSpesificPages",
      title: "Spesifiser",
      fieldset: "display",
      type: "array",
      of: [{ type: "string" }],
      inputComponent: Checkboxes,
      options: {
        list: [{ value: "forsiden", title: "Forsiden" }]
      }
    }
  ],
  initialValue: {
    displayOnAllPages: true
  },
  preview: {
    select: {
      type: "type",
      description: "description"
    },
    prepare(selection) {
      const { type, description } = selection;
      const block = (description.nb || []).find(
        block => block._type === "block"
      );
      const children = block.children;
      return {
        title: children ? children.map(span => span.text).join("") : ``,
        media: {
          info: info,
          suksess: success,
          advarsel: advarsel,
          feil: error
        }[type]
      };
    }
  }
};
