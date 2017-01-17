import React from 'react';
import { Link } from 'react-router';
import SiteNavItems from './site-nav-items';
import HeaderAuth from '../containers/header-auth';

class SiteNav extends React.Component {
  constructor() {
    super();

    this.renderNavItem = this.renderNavItem.bind(this);
  }

  renderNavItem(item) {
    if (item.to.match(/^https?:/ig)) {
      return (
        <li key={item.label}>
          <a href={item.to} className="site-nav__link">{item.label}</a>
        </li>
      );
    }
    return (
      <li key={item.label}>
        <Link to={item.to} className="site-nav__link" activeClassName="site-nav__link--active">
          {item.label}
        </Link>
      </li>
    );
  }

  render() {
    let nav = null;
    if (this.props.navItems) {
      nav = (
        <nav className="site-nav">
          <a href="https://www.zooniverse.org/" className="site-nav__link">ZOOLOGO PH</a>
          <ul className="site-nav__main-links">
            {this.props.navItems.map(this.renderNavItem)}
          </ul>
          <HeaderAuth />
        </nav>
      );
    }
    return nav;
  }
}

SiteNav.propTypes = {
  navItems: React.PropTypes.arrayOf(React.PropTypes.object),
};

SiteNav.defaultProps = {
  navItems: SiteNavItems,
};

export default SiteNav;
