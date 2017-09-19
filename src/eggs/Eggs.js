import React from 'react';
import data from './data.json';
import Seleggtor from './Seleggtor'

class Eggs extends React.Component {
  constructor(props) {
    super(props);
    this.onSeleggtionChanged = this.onSeleggtionChanged.bind(this);
    this.state = {
      selectedZone: data["Pondry Hills"]
    }
  }
  render() {
    return (
      <div id='eggs'>
        <Seleggtor data={data} onChange={this.onSeleggtionChanged} />
        {this.renderZone(this.state.selectedZone)}
      </div>
    );
  }
  onSeleggtionChanged(selectedZone) {
    console.log("onSeleggtionChanged", arguments);
    this.setState({
      selectedZone:selectedZone
    });
  }
  renderAllZones(zones) {
    return Object.keys(zones).map((i)=>this.renderZone(zones[i]))
  }
  renderZone(zone) {
    return (
      <div className="zone">
        <h2>{zone.name}</h2>
        <div className="lrMons">
          {this.renderMonsterList(zone.lowRankMonsters)}
        </div>
        <div className="hrmons">
          {this.renderMonsterList(zone.highRankMonsters)}
        </div>
      </div>
    );
  }
  renderMonsterList(monsters) {
    return (<ul>{monsters.map(this.renderMonster)}</ul>)
  }
  renderMonster(mon) {
    return ( 
      <li key={mon.name}> 
        <h3>{mon.name}</h3>
        <img src={require(`./images/${mon.uri}`)} alt={`${mon.name} eggs`} />
      </li>
    );
  }
}

export default Eggs;