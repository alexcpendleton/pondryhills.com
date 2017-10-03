import React from 'react';
import ReactDOM from 'react-dom';
import Qualifiers from './Qualifiers';
import { shallow } from 'enzyme';

function render(props) {
  return shallow(<Qualifiers {...props} />);
}
describe('render', () => {
  it('should render (Late-game, Rare Dens) when props.qualifiers contains "Late-game" and "Rare Dens"', () => {
    const component = render({qualifiers:["Late-game", "Rare Dens"]});
    expect(component.find("#qualifiers").text())
      .toEqual("(Late-game, Rare Dens)");
  });
  it('should render nothing when props.qualifiers is null', () => {
    const component = render({qualifiers:null});
    expect(component.debug())
      .toEqual("");
  });
});