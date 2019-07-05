import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as fromProfileReducer from '../reducers/profile.reducer';

export interface ProfileState {
  profile: fromProfileReducer.ProfileState;
}

export const reducers: ActionReducerMap<ProfileState> = {
  profile: fromProfileReducer.reducer
};

export const metaReducers: MetaReducer<ProfileState>[] = !environment.production ? [] : [];

export const getProfileState = createFeatureSelector('profile');

export const getProfile = createSelector(
  getProfileState,
  fromProfileReducer.getProfile
);

export const getProfileLoaded = createSelector(
  getProfileState,
  fromProfileReducer.getProfileLoaded
);

export const getProfileLoading = createSelector(
  getProfileState,
  fromProfileReducer.getProfileLoading
);
