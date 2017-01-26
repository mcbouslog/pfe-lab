import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import EditCollaborators from './components/edit-collaborators';
import EditDetails from './components/edit-details';
import OrganizationContainer from './containers/organization-container';
import OrganizationsContainer from './containers/organizations-container';

const organizationsRoutes = store => (
  <Provider store={store}>
    <Router>
      <Route path="/organizations">
        <IndexRoute component={OrganizationsContainer} />
        <Route path=":id" component={OrganizationContainer}>
          <IndexRoute component={EditDetails} />
          <Route path="collaborators" component={EditCollaborators} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default organizationsRoutes;
