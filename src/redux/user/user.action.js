/**
 * Actions that return an object
 * reducer is expecting SET_CURRENT_USER
 * create a user action
 */

import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
