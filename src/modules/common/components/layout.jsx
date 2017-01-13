import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Landing from './landing';
import Footer from './footer';

const Layout = ({ user, loginInitialized, children }) =>
  <div className="layout">
    <Header />

    <main className="content-section">
      {(user && loginInitialized && children ?
        children : <Landing userBool={user !== null} loginInitialized={loginInitialized} />)}
    </main>

    <Footer />
  </div>;

Layout.propTypes = {
  children: React.PropTypes.node,
  loginInitialized: React.PropTypes.bool,
  user: React.PropTypes.shape({ id: React.PropTypes.string }),
};

Layout.defaultProps = {
  loginInitialized: false,
  user: null,
};

function mapStateToProps(state, ownProps) { // eslint-disable-line no-unused-vars
  return {
    user: state.user,
    loginInitialized: state.initialized,
  };
}

export default connect(mapStateToProps)(Layout);
