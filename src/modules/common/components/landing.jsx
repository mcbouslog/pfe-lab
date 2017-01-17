import React from 'react';
import { Link } from 'react-router';
import { loginToPanoptes } from '../../../services/panoptes';

const SignedIn = () =>
  <div className="landing__buttons">
    <a className="landing__button" href="https://www.zooniverse.org/lab">Projects</a>
    <br />
    <Link className="landing__button" to="/organizations">Organizations</Link>
  </div>;

const SignedOut = () =>
  <div className="landing__buttons">
    <button className="landing__button" onClick={loginToPanoptes}>Sign In</button>
    <br />
    <a className="landing__button" href="https://www.zooniverse.org/projects">Back to Projects</a>
  </div>;

export default class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.classList.add('on-landing-page');
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('on-landing-page');
  }

  render() {
    return (
      <div className="landing">
        <span style={{ fontSize: '20px' }}>ZOOLOGOTYPE PH</span>
        <h3 className="landing__title">Zooniverse Lab</h3>
        <div className="landing__tagline">
          <p>Anyone can build a Zooniverse project. Just upload your data and choose the tasks you want the volunteers to do. To find out more, read our <a href="https://www.zooniverse.org/lab-how-to">How to Build a Project documentation</a>, or click the button below to get started.</p>
        </div>
        <div>
          {this.props.userBool && this.props.loginInitialized ? <SignedIn /> : <SignedOut />}
          <div className="landing__links">
            <p className="landing__links__heading">Quick Links</p>
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
