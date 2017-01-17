import React from 'react';

const LoginButton = ({ login }) =>
  <button
    type="submit"
    className="secret-button site-nav__link"
    onClick={login}
  >
    Login
  </button>;

LoginButton.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default LoginButton;
