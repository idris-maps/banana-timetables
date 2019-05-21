import store from './index'

export const SET_LIST = 'SET_LIST'
export const setList = items =>
  store.dispatch({ type: SET_LIST, payload: items })

export const SET_INPUT = 'SET_INPUT'
export const setInput = value =>
  store.dispatch({ type: SET_INPUT, payload: value })

export const SET_PAGE = 'SET_PAGE'
export const goToPage = (page, list = []) =>
  store.dispatch({ type: SET_PAGE, payload: { page, list } })