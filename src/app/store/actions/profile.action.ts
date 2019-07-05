import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProfileActionTypes {
  PROFILE = '[Profile] Load Profile',
  PROFILE_FAIL = '[Profile] Load Profile Success',
  PROFILE_SUCCESS = '[Profile] Load Profile Fail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class loadProfile implements Action {
  readonly type = ProfileActionTypes.PROFILE;
  constructor(public payload: any) { }
}

export class loadProfileFail implements Action {
  readonly type = ProfileActionTypes.PROFILE_FAIL;
  constructor(public payload: any) { }
}

export class loadProfileSuccess implements Action {
  readonly type = ProfileActionTypes.PROFILE_SUCCESS;
  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProfileActionsUnion =
            | loadProfile
            | loadProfileSuccess
            | loadProfileFail;
