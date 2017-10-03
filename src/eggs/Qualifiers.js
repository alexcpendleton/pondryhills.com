import React from 'react';

class Qualifers extends React.Component {
  render() {
    const text = this.buildText();
    if(!text || !text.length) {
      return "";
    }
    return (
      <span id="qualifiers">{text}</span>
    );
  }
  buildText() {
    const qualifiers = this.props.qualifiers || [];
    if(!qualifiers || !qualifiers.length) return "";
    return `(${qualifiers.join(", ")})`;
  }
}
Qualifers.defaultProps = {
  qualifiers:[]
}
export default Qualifers;