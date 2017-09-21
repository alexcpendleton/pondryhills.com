import React from 'react';
import ReactDOM from 'react-dom';
import Eggs from './Eggs';
import About from './About'
import { shallow } from 'enzyme';

function render(props) {
  return shallow(<Eggs {...props} />);
}
function fcl(){
  expect(arguments).toEqual("x")
}

describe('about', () => {
  it('should render the About component at the bottom', () => {
    const component = render();
    const last = component.children().last();
    expect(last.is(About)).toBeTruthy();
  });
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Eggs />, div);
});

