/**
 * Actions that return an object
 * reducer is expecting SET_CURRENT_USER
 * create a user action
 */

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})
