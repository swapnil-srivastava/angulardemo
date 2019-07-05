import * as fromProfileAction from '../actions/profile.action';

export interface ProfileState {
  data: {};
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromProfileAction.ProfileActionsUnion
): ProfileState {

  switch (action.type) {
    case fromProfileAction.ProfileActionTypes.PROFILE : {
      const data = state.data;
      return {
        ...state,
        data: {
          ...data,
          ...action.payload
        },
        loading: true,
        loaded: false
      };
    }

    case fromProfileAction.ProfileActionTypes.PROFILE_SUCCESS : {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromProfileAction.ProfileActionTypes.PROFILE_FAIL : {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getProfile = (state: ProfileState) => state.data;
export const getProfileLoading = (state: ProfileState) => state.loaded;
export const getProfileLoaded = (state: ProfileState) => state.loading;
