import React from 'react';

class Seleggtor extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return (
      <div id="seleggtor">
        <select onChange={this.onChange}>
          {Object.keys(this.props.data).map(this.renderOption)}
        </select>
      </div>
    );
  }
  renderOption(name) {
    return (<option key={name} value={name}>{name}</option>)
  }
  onChange(event) {
    const zoneName = event.target.value;
    this.props.onChange(this.props.data[zoneName]);
  }
}

export default Seleggtor;