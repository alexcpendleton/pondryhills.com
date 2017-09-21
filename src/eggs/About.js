import React from 'react';
class About extends React.Component {
  buildEmailHref(email, subject) {
    return `mailto:${email}?subject=${subject}`;
  }
  render() {
    const {email, subject} = this.props;
    return (
      <nav id='about'>
        <a id="github" href={this.props.github}>Github</a> | <a id="email" href={this.buildEmailHref(email, subject)}>Report an Issue</a>
      </nav>
    );
  }
}

About.defaultProps = {
  github: "https://github.com/alexcpendleton/pondryhills.com",
  email: "vespoids@pondryhills.com",
  subject: "I found an issue!"
};
export default About;