import React from 'react';
import data from './data.json';
import Seleggtor from './Seleggtor'
import About from './About'

import 'mini.css'

class Eggs extends React.Component {
  constructor(props) {
    super(props);
    this.onSeleggtionChanged = this
      .onSeleggtionChanged
      .bind(this);
    this.state = {
      selectedZone: data["Pondry Hills"]
    }
  }
  render() {
    return (
      <div id='eggs'>
        <Seleggtor data={data} onChange={this.onSeleggtionChanged}/> 
        <div id="zones">
        {this.renderZone(this.state.selectedZone)}
        </div>
        <About />
      </div>
    );
  }
  onSeleggtionChanged(selectedZone) {
    this.setState({selectedZone: selectedZone});
  }
  renderAllZones(zones) {
    return Object
      .keys(zones)
      .map((i) => this.renderZone(zones[i]))
  }
  renderZone(zone) {
    return (
      <div className="zone">
        {this.renderRankContainer(zone.lowRankMonsters, "Low Rank", "lr-monsters")}
        {this.renderRankContainer(zone.highRankMonsters, "High Rank", "hr-monsters")}
      </div>
    );
  }
  renderRankContainer(monsters, rank, className) {
    if(!monsters || !monsters.length) return "";
    const fullClass = `monster-list ${className}`;
    return (
      <div className={fullClass}>
        <h3 className="rank">{rank}</h3>
        {this.renderMonsterList(monsters)}
      </div>
    );
  }
  renderMonsterList(monsters) {
    return (
      <ul>{monsters.map(this.renderMonster)}</ul>
    )
  }
  renderMonster(mon) {
    return (
      <li key={mon.name} className="single-monster">
        <h4>{mon.name}</h4>
        <img
          src={require(`./images/${mon.uri}`)}
          alt={`${mon.name} eggs`}
          className="eggmage"/>
      </li>
    );
  }
}

export default Eggs;