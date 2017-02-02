import React from 'react';
import { connect } from 'react-redux';

import apiClient from 'panoptes-client/lib/api-client';
// import { organizationShape } from '../model';
import { setCurrentOrganization } from '../action-creators';
import OrganizationLayout from '../components/organization-layout';

class OrganizationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.fetchOrganization(props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params && this.props.params && nextProps.params.id === this.props.params.id) return;

    this.fetchOrganization(nextProps.params.id);
  }

  componentWillUnmount() {
    this.props.dispatch(setCurrentOrganization(null));
  }

  fetchOrganization(id) { // eslint-disable-line class-methods-use-this
    if (!id) {
      return;
    }

    apiClient.type('organizations').get({ id }).then((org) => {
      this.props.dispatch(setCurrentOrganization(org[0]));
    });
  }

  render() {
    return (
      <OrganizationLayout orgID={this.props.params.id}>
        {this.props.children}
      </OrganizationLayout>
    );
  }
}

OrganizationContainer.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
  // organization: organizationShape,
  params: React.PropTypes.shape({ id: React.PropTypes.string }),
};

function mapStateToProps(state) {
  return {
    organization: state.organization,
  };
}

export default connect(mapStateToProps)(OrganizationContainer);
