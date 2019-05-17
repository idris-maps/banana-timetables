import store from './index'

export const SET_LIST = 'SET_LIST'
export const setList = items =>
  store.dispatch({ type: SET_LIST, payload: items })
