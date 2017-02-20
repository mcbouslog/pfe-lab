import * as types from '../../constants/action-types';

export function setCurrentOrganization(organization) {
  return {
    type: types.SET_CURRENT_ORGANIZATION,
    organization,
  };
}

export function setOwnedOrganizations(ownedOrganizations) {
  return {
    type: types.SET_OWNED_ORGANIZATIONS,
    ownedOrganizations,
  };
}

export function setCollaboratorOrganizations(collaboratorOrganizations) {
  return {
    type: types.SET_COLLABORATOR_ORGANIZATIONS,
    collaboratorOrganizations,
  };
}

export function setOrganizationCollaborators(organizationCollaborators) {
  return {
    type: types.SET_ORGANIZATION_COLLABORATORS,
    organizationCollaborators,
  };
}

export function setOrganizationOwner(organizationOwner) {
  return {
    type: types.SET_ORGANIZATION_OWNER,
    organizationOwner,
  };
}
