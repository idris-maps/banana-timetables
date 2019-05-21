import store from './index'
import {
  PAGE_TO,
} from '../pages/names'

export const SET_LIST = 'SET_LIST'
export const setList = items =>
  store.dispatch({ type: SET_LIST, payload: items })

export const SET_INPUT = 'SET_INPUT'
export const setInput = value =>
  store.dispatch({ type: SET_INPUT, payload: value })

export const SET_PAGE = 'SET_PAGE'
export const goToPage = (page, list = []) =>
  store.dispatch({ type: SET_PAGE, payload: { page, list } })

export const SET_FROM = 'SET_FROM'
export const setFromStop = stopId => {
  store.dispatch({ type: SET_FROM, payload: stopId })
  const { list } = store.getState()
  goToPage(PAGE_TO, list.filter(d => d.id !== stopId))
}

export const SET_TO = 'SET_TO'
export const setToStop = stopId =>
  store.dispatch({ type: SET_TO, payload: stopId })