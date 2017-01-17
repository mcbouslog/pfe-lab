import React from 'react';
import { Link } from 'react-router';

const SignedIn = () =>
  <div className="landing-buttons">
    <a className="call-to-action standard-button landing-button" href="https://www.zooniverse.org/lab">Projects</a>
    <br />
    <Link className="call-to-action standard-button landing-button" to="/organizations">Organizations</Link>
  </div>;

const SignedOut = () =>
  <div className="landing-buttons">
    <a className="call-to-action standard-button landing-button" href="">Sign In</a>
    <br />
    <a className="call-to-action standard-button landing-button" href="">Back to Projects</a>
  </div>;

export default class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.classList.add('on-secondary-page');
    document.documentElement.classList.add('on-landing-page');
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('on-secondary-page');
    document.documentElement.classList.remove('on-landing-page');
  }

  render() {
    return (
      <div className="landing-page">
        <span style={{ fontSize: '20px' }}>ZOOLOGOTYPE PH</span>
        <h3 className="landing-title">Zooniverse Lab</h3>
        <div className="landing-tagline">
          <p>Anyone can build a Zooniverse project. Just upload your data and choose the tasks you want the volunteers to do. To find out more, read our How to Build a Project documentation [INSERT LINK], or click the button below to get started.</p>
        </div>
        <div className="landing-actions">
          {this.props.userBool && this.props.loginInitialized ? <SignedIn /> : <SignedOut />}
          <div className="landing-links">
            <p className="heading">Quick Links</p>
            <a href="https://www.zooniverse.org/help">Project Builder Help</a>
            <a href="https://www.zooniverse.org/help/lab-policies">Project Builder Policies</a>
            <a href="https://www.zooniverse.org/lab-best-practices/introduction">Best Practices Guide</a>
            <a href="https://www.zooniverse.org/about/acknowledgements">Acknowledgements</a>
            <a href="https://www.zooniverse.org/talk/18">Project Builder Talk</a>
            <a href="https://www.zooniverse.org/help/glossary">Glossary</a>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  loginInitialized: React.PropTypes.bool,
  userBool: React.PropTypes.bool,
};

Landing.defaultProps = {
  loginInitialized: false,
  userBool: false,
};
