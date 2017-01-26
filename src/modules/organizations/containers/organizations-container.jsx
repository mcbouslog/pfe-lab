import React from 'react';
import { connect } from 'react-redux';
import apiClient from 'panoptes-client/lib/api-client';

import { setOrganizations } from '../action-creators';
import { organizationsShape } from '../model';
import ListOrganizations from '../components/list-organizations';

class OrganizationsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchOrganizations();
  }

  componentWillUnmount() {
    this.props.dispatch(setOrganizations([]));
  }

  fetchOrganizations() {
    apiClient.type('organizations').get().then((orgs) => {
      this.props.dispatch(setOrganizations(orgs));
    });
  }

  render() {
    return (
      <ListOrganizations organizations={this.props.organizations} />
    );
  }
}

OrganizationsContainer.propTypes = {
  dispatch: React.PropTypes.func,
  organizations: organizationsShape,
};

function mapStateToProps(state) {
  return {
    organizations: state.organizations,
  };
}

export default connect(mapStateToProps)(OrganizationsContainer);
