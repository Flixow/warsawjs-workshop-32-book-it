import { createSelector } from 'reselect';

const getProfileSelector = state => JSON.stringify(state.me.profile);

export const profileSelector = createSelector(
  getProfileSelector,
  profile => JSON.parse(profile)
);

export const profileNameSelector = createSelector(
  profileSelector,
  profile => profile.name
);
