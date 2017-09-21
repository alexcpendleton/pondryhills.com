import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { shallow } from 'enzyme';

function render(props) {
  return shallow(<About {...props} />);
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
it('should render a nav#about', () => {
  const component = render();
  expect(component.find("nav#about").length).toBe(1);
});
describe('mail issue', () => {
  it('should contain a mailto:link with props.email and props.subject', () => {
    const email = "fakerton@mailinator.com";
    const subject = "I found an issue!"
    const component = render({email, subject});
    const link = component.find("a#email");
    expect(link.prop("href")).toEqual(`mailto:${email}?subject=${subject}`);
    expect(link.text()).toEqual("Report an Issue");
  });
  it('should contain a mailto:link with props.email and props.subject', () => {
    const email = "vespoids@pondryhills.com";
    const subject = "I found an issue!"
    const component = render();
    const link = component.find("a#email");
    expect(link.prop("href")).toEqual(`mailto:${email}?subject=${subject}`);
    expect(link.text()).toEqual("Report an Issue");
  });
});
describe('github', () => {  
  it('should contain a link to props.github', () => {
    const uri = "https://github.com/test";
    const component = render({
      github:uri
    });
    const githubLink = component.find("a#github");
    expect(githubLink.prop("href")).toEqual(uri)
  });
  it('should use the actual repository URI when not overridden', () => {
    const uri = "https://alexcpendleton.github.com/pondryhills.com";
    const component = render();
    const githubLink = component.find("a#github");
    expect(githubLink.prop("href")).toEqual(uri);
    expect(githubLink.text()).toEqual("Github");
  });
});
