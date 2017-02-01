import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import apiClient from 'panoptes-client/lib/api-client';
import { organizationShape } from '../model';
import { setCurrentOrganization } from '../action-creators';

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
    const children = this.props.children; // eslint-disable-line react/prop-types
    const organization = this.props.organization;
    const organizationId = this.props.params.id;

    // inject props into children
    const wrappedChildren = React.Children.map(children, child =>
      React.cloneElement(child, { organization, organizationId }),
    );

    return (
      <div>
        <aside>
          <nav>
            <ul>
              <li><Link to={`/organizations/${organizationId}`}>Edit</Link></li>
              <li><Link to={`/organizations/${organizationId}/about`}>About</Link></li>
              <li><Link to={`/organizations/${organizationId}/collaborators`}>Collaborators</Link></li>
              <li><Link to={`/organizations/${organizationId}/visibility`}>Visibility</Link></li>
            </ul>
          </nav>
        </aside>
        <section>{wrappedChildren}</section>
      </div>
    );
  }
}

OrganizationContainer.propTypes = {
  dispatch: React.PropTypes.func,
  organization: organizationShape,
  params: React.PropTypes.shape({ id: React.PropTypes.string }),
};

function mapStateToProps(state) {
  return {
    organization: state.organization,
  };
}

export default connect(mapStateToProps)(OrganizationContainer);
