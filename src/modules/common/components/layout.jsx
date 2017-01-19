import React from 'react';
import { connect } from 'react-redux';
import SiteNav from './site-nav';
import Landing from './landing';
import SiteFooter from './site-footer';

const Layout = ({ user, loginInitialized, children }) =>
  <div className="layout">
    <header className="layout__header">
      <SiteNav />
    </header>
    <div className="layout__not-header">
      <main className="layout__main">
        {(user && loginInitialized && children ?
          children : <Landing userBool={user !== null} loginInitialized={loginInitialized} />)}
      </main>

      <footer className="layout__footer">
        <SiteFooter />
      </footer>
    </div>
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
