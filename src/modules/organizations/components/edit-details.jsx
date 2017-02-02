import React from 'react';
import { connect } from 'react-redux';

import { organizationShape } from '../model';

const EditDetails = ({ organization }) => {
  if (!organization) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{organization.display_name}</h2>
      <p><small>{organization.description}</small></p>
      <p>You are editing this organization</p>
    </div>
  );
};

EditDetails.propTypes = { organization: organizationShape };

function mapStateToProps(state, ownProps) { // eslint-disable-line no-unused-vars
  return {
    organization: state.organization,
  };
}

export default connect(mapStateToProps)(EditDetails);
