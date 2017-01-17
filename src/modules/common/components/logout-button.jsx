import React from 'react';

const PropTypes = React.PropTypes;

const LogoutButton = ({ logout, user }) =>
  <div>
    <span>{user.display_name}</span>
    <button type="submit" style={{ marginLeft: '1em' }} className="secret-button site-nav__link" onClick={logout}>Log out</button>
  </div>;

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({ credited_name: PropTypes.string }).isRequired,
};

export default LogoutButton;
