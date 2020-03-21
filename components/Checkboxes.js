import React from "react";
import PropTypes from "prop-types";

import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import Switch from "@sanity/components/lib/toggles/Switch";
import { withDocument } from "part:@sanity/form-builder";

const createPatchFrom = list =>
  PatchEvent.from(!list.length ? unset() : set(list));

class Checkboxes extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        displayWhenFieldIsTrue: PropTypes.string,
        list: PropTypes.array
      }).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      values: props.value || []
    };
  }

  render() {
    const { type, onChange, document } = this.props;
    const { values } = this.state;

    return !document.displayOnAllPages ? (
      <div key={type.title}>
        <p>{type.title}</p>
        {type.options.list.map(option => {
          return (
            <Switch
              key={option.value}
              value={option.value}
              className={"test"}
              label={option.title}
              checked={values.includes(option.value)}
              onChange={() => {
                if (values.includes(option.value)) {
                  const newArray = values.filter(v => v !== option.value);
                  onChange(createPatchFrom(newArray));
                  this.setState({ values: newArray });
                } else {
                  values.push(`${option.value}`);
                  onChange(createPatchFrom(values));
                  this.setState({ values });
                }
              }}
            />
          );
        })}
      </div>
    ) : (
      <div />
    );
  }
}

export default withDocument(Checkboxes);
